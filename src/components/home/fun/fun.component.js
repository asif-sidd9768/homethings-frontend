import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView, ActivityIndicator, KeyboardAvoidingView } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import TypeWriter from 'react-native-typewriter'
import generate from "../../../utils/openai";
import { Divider } from "@rneui/themed/dist/Divider";
import getFunData from "../../../services/openai";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Fun = () => {
  const [number, onChangeNumber] = useState('');
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState('')

  useEffect(() => {
    (async () => {
      const result = await getFunData('where should we go?')
      console.log(result)
    })()
  }, [])

  const submit = async () => {
    setIsLoading(true)
    setTitle(number)
    const result = await getFunData(number)
    setContent(result)
    setIsLoading(false)
    onChangeNumber('')
  }
  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}} enabled>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="write something..."
            placeholderTextColor="#fff" 
            keyboardType="text"
          />
          {
            isLoading ? 
            <ActivityIndicator color="white" style={{marginRight: 5, flex: 2}} /> : 
            <TouchableOpacity disabled={isLoading} style={styles.inputBtn} onPress={submit}>
              <Icon name='forward' size={30} color='white' options={{}} />
            </TouchableOpacity>
          }
        </View>
        <ScrollView style={styles.resultContainer}>
          <View>
          {
            isLoading ? <ActivityIndicator style={styles.loader} ActivityIndicator size="large" color="gray"/> :
            content ? 
            <View>
              <Text style={styles.title}>{title ? title : 'Something random'}</Text>
              <Divider style={{marginTop: 20, marginHorizontal: 20}} />
              <TypeWriter style={styles.resultIfData} typing={1} minDelay={0} maxDelay={10}>{content}</TypeWriter> 
            </View>: 
            <Text style={styles.resultIfNoData}>Type and search to see the magic</Text>
          }
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },  
  resultContainer: {
    flex: 0.85,
  },
  inputContainer: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  resultIfData: {
    padding: 15,
    fontSize: 16,
    margin: 0,
    textAlign: 'justify'
  },
  title: {
    textAlign: 'center',
    marginTop: 18,
    fontWeight: 'bold',
    fontSize: 20
  },
  resultIfNoData: {
    position: 'absolute',
    top: 200,
    left: 40,
    textAlign: 'center',
    fontSize: 24
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    flex: 9,
    placeholder: 'white'
  },
  inputBtn: {
    flex: 2
  },
  loader: {
    position: 'absolute',
    top: 200,
    left: 200
  }
})

export default Fun
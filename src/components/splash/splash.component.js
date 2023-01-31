import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user').then((value) =>
        navigation.replace(
          value === null ? 'Auth' : 'home'
        ),
      );
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/Cars.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <Text style={{fontSize: 24, color: 'white'}}>Home Things</Text>
      <Text style={{fontSize: 18, color: 'white'}}>Get you covered</Text>
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});

export default Splash
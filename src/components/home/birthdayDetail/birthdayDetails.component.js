import { Divider } from '@rneui/themed';
import { useState } from 'react';
import { SafeAreaView, Modal, Pressable, View, FlatList, Image, StyleSheet, Text, StatusBar, SectionList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { daysLeftForBDay } from '../../../utils/services';
// import Birthdays from "../../../../assets/happy-birthday.png"
// import Anniversaries from "../../../../assets/happy-birthday.png"
// import Bikes from "../../../../assets/bicycle.png"

const images = {
  Cars: require('../../../../assets/Cars.png'),
  Bikes: require('../../../../assets/motorbike.png'),
  Birthdays: require('../../../../assets/Birthdays.png'),
  Anniversaries: require('../../../../assets/anniversary.png'),
}

const Item = ({ headerTitle, title, date, number, daysLeft, birthDay }) => {
  return(
    <View style={styles.item}>
      {console.log(new Date(birthDay).toLocaleDateString())}
      <Image source={images[headerTitle]} style={styles.img}/>
      <View style={styles.titleContainer}>
        <Text style={styles.title} >{title}</Text>
        <Text style={styles.date}>{birthDay ? `${new Date(birthDay).toLocaleDateString()}` : number}</Text>
      </View>
      <Text style={styles.timeLeft}>
        {daysLeft} days
      </Text>
    </View>
  )
};

const BirthdayDetail = ({route}) => { 
  let {details} = route.params
  console.log('route === ', route)
  console.log('details ==== ', details)
  
  details.map(d => {
    d['daysLeft'] = daysLeftForBDay(d.birthDay)
  })

  details.sort((a,b) => {
    return a.daysLeft - b.daysLeft
  })
  //console.log('details === ', details)
  details?.birthdays?.sort((a,b) => {
    return a.daysLeft - b.daysLeft
  })

  details?.anniversary?.sort((a,b) => {
    return a.daysLeft - b.daysLeft
  })

  const renderItem = ({ item }) => (
    <Item 
      headerTitle="Birthdays"
      title={item.name} 
      date={item.date} 
      number={item.number} 
      daysLeft={item.daysLeft} 
      birthDay={item.birthDay}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={details}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 10,
  },
  modalContainer: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  sectionHeader: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
    marginBottom: 10
  },
  img: {
    flex: 1,
    height: 80,
    borderRadius: 80/2,
    padding: 15,
    overflow: 'hidden'
  },
  titleContainer: {
    flex: 3,
    marginLeft: 20
  },
  title: {
    fontSize: 24
  },
  date: {
    marginTop: 10,
  },
  timeLeft: {
    flex: 1,
    fontWeight: 'bold'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalDataHeader: {
    marginBottom: 10,
    fontSize: 18
  },
  modalDataText: {
    marginBottom: 5,
  },
  modalDataContainerRight: {
    flex: 4
  },
  modalDataContainerLeft: {
    flex: 5
  }
});

export default BirthdayDetail;
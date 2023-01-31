import AsyncStorage from '@react-native-async-storage/async-storage';
import { Divider } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { SafeAreaView, Modal, Pressable, View, FlatList, Image, StyleSheet, Text, StatusBar, SectionList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';
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

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ headerTitle, title, date, number, daysLeft }) => {
  return(
    <View style={styles.item}>
      <Image source={images[headerTitle]} style={styles.img}/>
      <View style={styles.titleContainer}>
        <Text style={styles.title} >{title}</Text>
        <Text style={styles.date}>{(new Date(date).toLocaleDateString()).replaceAll('/', '-')}</Text>
      </View>
      <Text style={styles.timeLeft}>
        {daysLeft} days
      </Text>
    </View>
  )
};

const GridDetail = (route) => {
  const [eventData, setEventData] = useState([])
  const { details } = route

  useEffect(() => {
    (async () => {
      AsyncStorage.getItem('events').then((value) => {
        setEventData(JSON.parse(value))
      })
    })()
  }, [])

  details?.anniversary?.sort((a,b) => {
    return a.daysLeft - b.daysLeft
  })

  const renderItem = ({ item, section, eData }) => {
    //console.log('\n item === ', item)
    return (
      <Item 
        headerTitle={section.title} 
        title={item.title} 
        date={item.eventDate} 
        daysLeft={item.daysLeft}
      />
  )}

  const renderHeader = ({ section }) => {
    if(section.data.length == 0)  {
      return null
    }
    return (
      <Text style={styles.sectionHeader}>{section.title}</Text>
    )
  }

  eventData.map(e => {
    e['daysLeft'] = daysLeftForBDay(e.eventDate)
  })

  eventData.sort((a, b) => a.daysLeft - b.daysLeft)
  
  console.log('details anniver == ', eventData[0])

  return (
    <SafeAreaView style={styles.container}>

      <SectionList
        // data={details.birthdays}
        sections={[
          {
            title: details.birthdays ? "Birthdays" : null,
            data: details?.birthdays ? details.birthdays : [],
          },
          {
            title: details.anniversary ? "Anniversaries" : null,
            data: details.anniversary ? eventData : [],
          }
        ]}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        renderSectionHeader={renderHeader}
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
    // borderWidth: 1,
    // borderColor: 'gray',
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
    fontWeight: 'bold',
    marginRight: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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

export default GridDetail;
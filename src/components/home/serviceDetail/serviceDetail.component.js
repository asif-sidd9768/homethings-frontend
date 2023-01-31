import { Button, FlatList, Image, Linking, SafeAreaView, SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { HOME_DATA } from "../../../data";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-vector-icons/FontAwesome';
import servicesService from "../../../services/services"
import { useEffect, useState } from "react";

const images = {
  Laundry: require('../../../../assets/laundry.png'),
  Religious: require('../../../../assets/mosque.png'),
  Vehicle: require('../../../../assets/Cars.png'),
  Eatery: require('../../../../assets/cutlery.png'),
  Electronics: require('../../../../assets/gadgets.png'),
  Home: require('../../../../assets/tools.png')
}

const openPhoneApp = (number) => {
  console.log('number == ', number)
  Linking.openURL(`tel:${number}`)
}

const Item = ({ headerTitle, title, mobile, code }) => {
  return(
    <View style={styles.item}>
      <Image source={images[headerTitle]} style={styles.img}/>
      <View style={styles.titleContainer}>
        <Text style={styles.title} >{title}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.date}>{headerTitle} - </Text>
          <Icon style={styles.date} name='circle' size={20} color={code} options={{}} />
        </View>
      </View>
      <TouchableOpacity style={styles.callBtn} onPress={() => openPhoneApp(`${mobile}`)}>
        <Icon name='phone' size={30} color='black' options={{}} />
      </TouchableOpacity>
      {/* <Button style={styles.timeLeft} title="" onPress={() => openPhoneApp("9768101141")}>
        
      </Button> */}
    </View>
  )
};

const ServiceDetail = () => {
  const [servicesData, setServicesData] = useState({})

  useEffect(() => {
    (async () => {
      let data = {}
      const datas = await servicesService.getAllServices()
      datas.map(d => data[d.title] = d)
      setServicesData(data)
    })()
  }, [])

  const renderItem = ({ item, section, code }) => {
    console.log('teim === ', item)
    return (
      <Item 
      key={item.id}
      headerTitle={section.title}
      title={item.name} 
      date={item.date} 
      number={item.number} 
      mobile={item.mobile}
      daysLeft={item.daysLeft} 
      birthDay={item.birthDay}
      code={item.code}
    />
    )
    
  }

  const renderHeader = ({ section }) => {
    if(section.data.length == 0)  {
      return null
    }
    return (
      <Text style={styles.sectionHeader}>{section.title}</Text>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        // data={details.birthdays}
        sections={[
          // {
          //   title: servicesData.APPLIANCES.length ? data.APPLIANCES.title : null,
          //   data: servicesData.APPLIANCES ? servicesData.APPLIANCES.data : [],
          //   code: '#000',
          // },
          {
            title: servicesData.Laundry ? servicesData.Laundry.title : 'Laundry',
            data: servicesData.Laundry ? servicesData.Laundry.users : [],
          },
          {
            title: servicesData.Religious ? servicesData.Religious.title : 'Religious',
            data: servicesData.Religious ? servicesData.Religious.users : [],
          },
          {
            title: servicesData.Vehicle ? servicesData.Vehicle.title : 'Vehicle',
            data: servicesData.Vehicle ? servicesData.Vehicle.users : [],
          },
          {
            title: servicesData.Eatery ? servicesData.Eatery.title : 'Eatery',
            data: servicesData.Eatery ? servicesData.Eatery.users : [],
          },
          {
            title: servicesData.Electronics ? servicesData.Electronics.title : 'Electronics',
            data: servicesData.Electronics ? servicesData.Electronics.users : [],
          },
          {
            title: servicesData.Home ? servicesData.Home.title : 'Home',
            data: servicesData.Home ? servicesData.Home.users : [],
          }
        ]}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        renderSectionHeader={renderHeader}
      />
    </SafeAreaView>
  )
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
  callBtn: {
    fontWeight: 'bold',
    marginRight: 15
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

export default ServiceDetail
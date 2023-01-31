import { FlatGrid } from "react-native-super-grid"
import { StyleSheet,Button, View, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { HOME_DATA } from "../../../data"
import img from "../../../../assets/Birthdays.png"
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Grid = ({ navigation, vehiclesData, gadgetsData }) => {

  // const abc = () => {

  // }
  const [gadgets, setGadgets] = useState([])
  const [vehicles, setVehicles] = useState({})
  
  useEffect(() => {
      AsyncStorage.getItem('users').then(data => {
        setGadgets(JSON.parse(data))
      })
  }, [])

  useEffect(() => {
      AsyncStorage.getItem('vehicles').then(data => {
        setVehicles(JSON.parse(data))
      })
  },[])

  const onPressLearnMore = (item) => { 
    console.log('gadgets ==== ', gadgets)
    console.log('vehicles === ', vehicles)
    if(item.title == "Gadgets"){
      navMethod(item, gadgets, "GadgetDetails")
    }else if(item.title == "Vehicles"){
      navMethod(item, vehicles ? vehicles : vehiclesData , "VehicleDetails")
    }else if(item.title == "Birthdays"){
      navMethod(item, gadgets ? gadgets : gadgetsData, "BirthdayDetails")
    }else if(item.title == "Services"){
      navMethod(item, item.details, "ServiceDetails")
    }else if(item.title == "Fun"){
      navMethod(item, gadgets, "fun")
    }else{
      navMethod(item, item.details, "Details")
    }
    // item.title == "Gadgets" ? 
    //   navigation.navigate('GadgetDetails', {
    //     details: gadgets,
    //     title: item.title
    //   })
    // : navigation.navigate('Details', {
    //   details: item.details,
    //   title: item.title
    // })
  }

  const navMethod = (item ,details, page) => {
    navigation.navigate(page, {
      details: details,
      title: item.title
    })
  }
    

  return (
    <FlatGrid
      itemDimension={130}
      data={HOME_DATA}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPressLearnMore(item)}>
          {/* <ImageBackground source={item.image} style={styles.backgroundImage}> */}
            <View style={[styles.itemContainer]}>
              <Image style={[styles.imgStyle]} source={item.image}></Image>
              <Text style={styles.itemName}>{item.title}</Text>
              <Text style={styles.itemCode}>{item.code}</Text>
            </View>
          {/* </ImageBackground> */}
        </TouchableOpacity>
      )}
    />
  )
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  itemContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  imgStyle: {
  },
  detailBtn: {
    backgroundColor: 'black'
  },
  itemName: {
    paddingTop: 8,
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#2c3e50',
  },
});

export default Grid
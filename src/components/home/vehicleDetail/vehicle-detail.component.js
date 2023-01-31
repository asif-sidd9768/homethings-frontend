import { Divider } from '@rneui/themed';
import { useState } from 'react';
import { SafeAreaView, Modal, Pressable, View, FlatList, Image, StyleSheet, Text, StatusBar, SectionList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';
import { daysLeftForBDay, minimunWarranty } from '../../../utils/services';
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

const Item = ({ headerTitle, title, date, number, daysLeft,item }) => {
  return(
    <View style={styles.item}>
      <Image source={images[headerTitle]} style={styles.img}/>
      <View style={styles.titleContainer}>
        <Text style={styles.title} >{title}</Text>
        <Text style={styles.date}>{date ? date : number}</Text>
      </View>
      {/* <Text style={styles.timeLeft}>
      {daysLeftForBDay(item.warrantyData.Puc.endDate)} days
      </Text> */}
      <View style={styles.headerTimeLeft}>
        <Text>Ins End In</Text>
        <Text style={styles.expireInText}>{daysLeftForBDay(item.warrantyData.Puc.endDate)} days</Text>
      </View>
    </View>
  )
};

const VehicleDetail = ({ route }) => { 
  console.log('route === ', route)
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({})
  const { details } = route.params
  console.log(details)

  const renderItem = ({ item, section }) => (
    item.warrantyData ? 
      <Pressable onPress={() => {
        setModalVisible(!modalVisible)
        setModalData({...item, ...section})
      }}>
        <Item 
          headerTitle={section.title} 
          title={item.name} 
          date={item.date} 
          number={item.number} 
          daysLeft={item.daysLeft} 
          warrantyData={item.warrantyData}
          item={item}
        />
      </Pressable> : 
        <Item 
          headerTitle={section.title} 
          title={item.name} 
          date={item.date} 
          number={item.number} 
          daysLeft={item.daysLeft} 
          item={item}
        />
  )

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
      {modalVisible && <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
            style={styles.modalContainer} 
            activeOpacity={1} 
            onPressOut={() => {
              setModalVisible(false)
              setModalData({})
            }}
        >
            <View style={styles.centeredView}>
            <TouchableWithoutFeedback>
              <View style={styles.modalView}>
                <View style={styles.modalDataContainerRight}>
                  <Image source={images[modalData.title]} style={styles.modalDataImg}/>
                  <Divider style={{ marginBottom : 10, marginTop: 10 }} />
                  <Text style={styles.modalDataHeader}>
                    {modalData?.name}
                  </Text>
                  <Text style={styles.modalDataText}>
                    {modalData?.number}
                  </Text>
                </View>
                <Divider orientation="vertical" style={{ marginLeft : 10, marginRight: 10 }} />
                <View style={styles.modalDataContainerLeft}>
                  {/* {console.log('mm == ', modalData.warrantyData)} */}
                  {
                    Object.entries(modalData.warrantyData).map(([k,v], index) => (
                      <View style={{marginBottom: 10}} key={index}>
                        {
                          k != "_id" ? 
                          <View>
                            <Text style={styles.modalDataHeader}>
                              <Text style={{textTransform: 'uppercase'}}>{k}</Text>
                            </Text>
                            <Divider  style={{ marginBottom : 10 }} />
                            {
                              Object.entries(v).map(([k,v], i) => (
                                k != "_id" ? 
                                <View key={i}>
                                  <Text style={styles.modalDataText} > 
                                    <Text style={{fontWeight: 'bold'}}>{k}</Text>: {k.includes("Date") ? new Date(v).toLocaleDateString() : v}
                                  </Text>
                                </View>
                                : null
                              ))
                            }
                          </View>
                        : null
                        }
                        
                      </View>
                    ))
                  }
                </View>
              </View>
              </TouchableWithoutFeedback>
            </View>
        </TouchableOpacity>
      </Modal>}

      <SectionList
        // data={details.birthdays}
        sections={[
          {
            title: details.bikes ? "Bikes" : null,
            data: details.bikes ? details.bikes : [],
          },
          {
            title: details.cars ? "Cars" : null,
            data: details.cars ? details.cars : [],
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
  },
  headerTimeLeft: {
    flex: 1,
    textAlign: 'center'
  },
  expireInText: {
    fontWeight: 'bold',
    marginTop: 3
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

export default VehicleDetail;
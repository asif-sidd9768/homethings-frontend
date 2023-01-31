import { Divider } from '@rneui/themed';
import { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Image, ScrollView
} from 'react-native';
import { minimunWarranty } from '../../utils/services';
import Icon from 'react-native-vector-icons/FontAwesome5';

const images = {
  Cars: require('../../../assets/Cars.png'),
  Bikes: require('../../../assets/motorbike.png'),
  Birthdays: require('../../../assets/Birthdays.png'),
  Anniversaries: require('../../../assets/anniversary.png'),
  Avatar: require('../../../assets/man.png')
}

const GadgetDetails = ({ route }) => {
  const { details, params } = route
  params.details.sort((a,b) => {
    return a.gadgets.length < b.gadgets.length
  })
  return (
    <ScrollView>
    <View style={styles.container}>
      {
        params.details.map(p => {
          console.log(p.gadgets.map(p => console.log(p)))
          let arrayDates = []
          p.gadgets.map(p => p.warranty ? ( arrayDates.push(new Date(p.warrantyTill))) : 0)
          let minimumDayForProduct = arrayDates.length ? Math.ceil(minimunWarranty(arrayDates)) : -1
          return (
            <Item key={p.id} header={p.name} gadgets={p.gadgets} minDays={minimumDayForProduct} />
          )
        })
      }
    </View>
    </ScrollView>
  );
}

const Item = ({ header, gadgets, minDays }) => {

  gadgets?.sort((a,b) => {
    a = new Date(a.warrantyTill)
    b = new Date(b.warrantyTill)
    return a - b
  })

  console.log(minDays)
  const [open, setopen] = useState(false);
  const onPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setopen(!open);
  };

  const onPressEmpty = () => {
    return
  }
  return (
    <TouchableOpacity style={[styles.item]} onPress={gadgets.length > 0 ? onPress : onPressEmpty} activeOpacity={1}>
      <View style={styles.headerItem}>
        <Image source={images['Avatar']} style={styles.headerImg}/>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle} >{header}</Text>
          <Text style={styles.headerDate}>Total Gadgets: {gadgets.length}</Text>
        </View>
        {
          gadgets.length > 0 ?
          <View style={styles.headerTimeLeft}>
            <Text>Expire-In</Text>
            <Text style={styles.expireInText}>{minDays >= 0 ? `${minDays} days` : <Text style={{color: 'red'}}>Over</Text>}</Text>
          </View>
          :
          <View style={styles.headerTimeLeft}>
            <Text style={styles.expireInText}>Nothing</Text>
          </View>
        }
      </View>
      {open && (
        <View style={styles.dataContainer}>
          {
            gadgets.map(gadget => (
              <View key={gadget.id}>
                <View style={styles.showMainContainer}>
                  <View style={styles.showContainer} key={gadget.id}>
                  <Icon name="clock" size={24} style={{width: 30, textAlign: 'center'}}/> 
                    <Divider orientation="vertical" width={1} style={{ marginLeft : 10, marginRight: 10 }} />
                    <Text style={styles.showContainerTitle}>
                      {gadget.name}
                    </Text> 
                  </View>
                  <View style={styles.showWarrantyContainer}>
                    <Text style={styles.showWarrantyHeader} >Warranty Till</Text>
                    {
                      gadget.warranty == true ?
                      <Text style={styles.showWarrantyIfNotOver}>{new Date(gadget.warrantyTill).toLocaleDateString()}</Text> :
                      <Text style={styles.showWarrantyIfOver}>Over</Text>
                    }
                  </View>
                </View>
                <Divider style={{marginBottom: 10, marginTop: 10}} />
              </View>
            ))
          }
        </View>
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  item: {
    width: '100%',
    overflow: 'hidden',
    marginBottom: 5,
  },
  headerItem: {
    flexDirection: 'row',
    alignItems: 'center',
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
  headerImg: {
    flex: 1,
    height: 80,
    borderRadius: 80/2,
    padding: 15,
    overflow: 'hidden'
  },
  headerTitleContainer: {
    flex: 3,
    marginLeft: 20
  },
  headerTitle: {
    fontSize: 24
  },
  headerDate: {
    marginTop: 10,
  },
  headerTimeLeft: {
    flex: 1,
    textAlign: 'center'
  },
  expireInText: {
    fontWeight: 'bold',
    marginTop: 3
  },
  dataContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 16,
  },
  showMainContainer: {
    flexDirection: 'row',
    padding: 5
  },
  showContainer: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginLeft: 10
  },
  showContainerTitle: {
    fontSize: 20,
    marginLeft: 10
  },
  showWarrantyContainer: {
    flex: 2, 
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  showWarrantyHeader: {
    fontSize: 12
  },
  showWarrantyIfNotOver:{
    fontWeight: 'bold', 
    marginTop: 3
  },
  showWarrantyIfOver: {
    fontWeight: 'bold', 
    color: 'red', 
    marginTop: 3
  }
});


export default GadgetDetails
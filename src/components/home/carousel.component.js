import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { Divider } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon as Icon1 } from '@rneui/themed';
import * as Animatable from 'react-native-animatable';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)

// export const data = [
//   {
//     title: "Tomorrow is Zubair's Birthday",
//     body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
//     imgUrl: "https://picsum.photos/id/11/200/300",
//   },
//   {
//     title: "i20's servicing is due",
//     body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
//     imgUrl: "https://picsum.photos/id/10/200/300",
//   },
//   {
//     title: "Bhai's parcel is arriving today",
//     body: "Psellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
//     imgUrl: "https://picsum.photos/id/12/200/300",
//   },
// ];

const CarouselCardItem = ({ item, index }) => {

  const diffDate = (eDate) => {
    const eventDate = new Date(eDate);
    const todayDate = new Date();
    const diffTime = Math.abs(eventDate - todayDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays
  }



  return (
    <View style={styles.container} key={index}>
      {/* <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      /> */}
      <View style={styles.announcementIconContainer}>
        <Icon1 name="announcement" size={25} color="red" style={styles.announcementIcon} />
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.announcementText}>Upcoming Events - {diffDate(item.date)} days</Animatable.Text>
        {/* <Text style={styles.announcementText} >Upcoming Events - {diffDate(item.date)} days</Text> */}
      </View>
      <Divider inset={true} insetType="right" style={{marginLeft: 15, marginTop: 5}} />
      <Text style={styles.header}>{item.title}</Text>
      <View style={styles.dateAndIcon}>
        <Icon name="calendar" size={20} color="gray" /> 
        <Divider orientation="vertical" width={2} style={{ marginLeft : 10, marginRight: 10 }} />
        <Text style={styles.body} >{item.date}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    width: '100%',
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  announcementIcon: {
    alignSelf: 'start',
    marginRight: 15,
  },
  announcementText: {
    color: '#e65366',
    fontSize: 18,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 15,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingRight: 20,
    textAlign: 'justify'
  },
  announcementIconContainer: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 10,
  },
  dateAndIcon: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10,
    justifyContent: 'start',
  }
})

export default CarouselCardItem
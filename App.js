import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/home/home.component';
import Details from './src/components/details/details.component';
import Login from './src/components/login/login.component';
import AppNavigator from './src/components/navigation/app-navigator.component';
import Splash from './src/components/splash/splash.component';
import GadgetDetails from './src/components/gadgetDetails/gadgetDetails.component';
import Register from './src/components/register/register.component';
import CustomMaterialMenu from './src/components/menu/menu.component';
import Icon from 'react-native-vector-icons/FontAwesome';
import VehicleDetail from './src/components/home/vehicleDetail/vehicle-detail.component';
import BirthdayDetail from './src/components/home/birthdayDetail/birthdayDetails.component';
import ServiceDetail from './src/components/home/serviceDetail/serviceDetail.component';
import Fun from './src/components/home/fun/fun.component';
import 'react-native-url-polyfill/auto'

const Stack = createNativeStackNavigator()
const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator 
      initialRouteName="LoginScreen" >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={Register}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: 'black', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash"
      screenOptions={({route,navigation}) => ({
        headerRight: () => (
          <CustomMaterialMenu 
            menuText="Menu"
            textStyle={{color: 'black'}}
            navigation={navigation}
            route={route}
            isIcon={true}
          />
        )
      })}>
        <Stack.Screen
          name="SplashScreen"
          component={Splash}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen name="home" component={Home} options={{ title: 'HOME THINGS' }} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="GadgetDetails" component={GadgetDetails} options={{ title: 'GADGETS' }} />
        <Stack.Screen name="VehicleDetails" component={VehicleDetail} options={{ title: 'VEHICLES' }} />
        <Stack.Screen name="BirthdayDetails" component={BirthdayDetail} options={{ title: 'BIRTHDAYS' }} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetail} options={{ title: 'SERVICES' }} />
        <Stack.Screen name="fun" component={Fun} options={{ title: 'FUN' }} />
      </Stack.Navigator>
      {/* <TouchableOpacity style={styles.floatingButton}>
        <Icon name='plus' size={30} color='gray' options={{}} />
      </TouchableOpacity> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 60,
    backgroundColor: '#000',
    borderRadius: 100,
  }
});

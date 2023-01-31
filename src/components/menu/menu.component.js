// React Native Popup Menu – Over Flow Menu
// https://aboutreact.com/react-native-popup-menu/

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
//import react in our code.
import {View, Text, Image, TouchableOpacity, Alert, StyleSheet} from 'react-native';
//import all the components we are going to use.
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
//import menu and menu item

const CustomMaterialMenu = ({isIcon, menuText, textStyle, route, navigation}) => {
  const [user, setUser] = useState({})
  useEffect(() => {
    const fetchUser = async () => {
      console.log('====================================');
      console.log('caled == ');
      console.log('====================================');
      const user = await AsyncStorage.getItem('user')
      setUser(JSON.parse(user))
      console.log(user)
    }
    fetchUser()
  }, [])

  const logout = () => {
    Alert.alert(
      'Logout',
      'Are you sure? You want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            return null;
          },
        },
        {
          text: 'Confirm',
          onPress: () => {
            // return null
            AsyncStorage.clear();
            navigation.replace('Auth');
          },
        },
      ],
      {cancelable: false},
    );
  }

  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  return (
    <View>
      <Menu
        visible={visible}
        anchor={isIcon ? (
          <TouchableOpacity onPress={showMenu}>
            <Image
              source={require('../../../assets/menu.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        ) : (
          <Text
            onPress={showMenu}
            style={textStyle}>
            {menuText}
          </Text>
        )}
        onRequestClose={hideMenu}
      >
        <MenuItem disabled style={styles.menuName}>Name: {user ? user.name : '...loading'}</MenuItem>
        <MenuItem disabled>Username: {user ? user.username : '...loading'}</MenuItem>
        <MenuDivider />
        <MenuItem onPress={logout} style={styles.menuLogout} >
          Logout
        </MenuItem>
        {/* <MenuItem onPress={hideMenu}>
          Option After Divider
        </MenuItem> */}
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  menuName: {
    fontWeight: 'bold',
  },
  menuLogout: {
    backgroundColor: '#d6d5d2',
    borderRadius: 10,
  }
})

export default CustomMaterialMenu;
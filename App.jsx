/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
// import type {PropsWithChildren} from 'react';
import {Alert, PermissionsAndroid, Platform, Text} from 'react-native';
// import Radar from 'react-native-radar';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {NavigationContainer, Na} from '@react-navigation/native';
import {ThemeProvider, createTheme} from '@rneui/themed';
import {Icon} from 'react-native-elements';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import Home from './components/home';
import Product from './components/product';
import Login from './components/login';
import Menu from './components/menu';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';

import {createStackNavigator} from '@react-navigation/stack';
import {store} from './redux/store';
import Geolocation from '@react-native-community/geolocation';
import firebase, {firebaseConfig} from './components/database/firebase';
import Subscription from './components/Subscription';
import Notification from './components/Notification';
import KitechenPage from './components/KitechenPage';
import Cart from './components/Cart';
import Account from './components/Account';
import SubscriptionOrder from './components/SubscriptionOrder';
import MyOrder from './components/MyOrder';
import CategoryKitechen from './components/CategoryKitechen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
    background: '#fff',
  },
  darkColors: {
    primary: '#000',
    background: '#fff',
    black: '#000',
  },
  mode: 'dark',
});
function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Notification') {
            iconName = focused
              ? 'notifications-circle'
              : 'notifications-circle-outline';
          } else if (route.name === 'subscription') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Refer') {
            iconName = focused ? 'person-add' : 'person-add-outline';
          } else if (route.name === 'More') {
            iconName = focused
              ? 'ellipsis-vertical'
              : 'ellipsis-vertical-outline';
          }

          // You can return any component that you like here!
          return (
            <Icon name={iconName} type="ionicon" size={size} color={color} />
          );
        },
        tabBarActiveTintColor: '#4ea437',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />

      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />

      {/* <Tab.Screen name="Member" component={() => <Text>Member</Text>} />
      <Tab.Screen name="Refer" component={() => <Text>refer</Text>} />
      <Tab.Screen name="More" component={() => <Text>More</Text>} /> */}
    </Tab.Navigator>
  );
}

function App() {
  const auth = firebase.auth();
  const [token, setToken] = useState();
  useEffect(() => {
    async function CheckPermission() {
      const token = await AsyncStorage.getItem('usertoken');
      setToken(token);
      console.log(token, 'tokennn');
      // Radar.setUserId(auth.currentUser.uid);
      // Platform.OS == 'android'
      //   ? Radar.getPermissionsStatus().then(status => {
      //       // do something with status
      //       console.log(status, 'status');
      //       if (status == 'NOT_DETERMINED' || status == 'DENIED') {
      //         Radar.requestPermissions(false).then(status => {
      //           if (
      //             status === 'GRANTED_BACKGROUND' ||
      //             status === 'GRANTED_FOREGROUND'
      //           ) {
      //             console.log('hello');
      //             Radar.trackOnce()
      //               .then(async result => {
      //                 console.log(result, 'location');
      //                 await AsyncStorage.setItem(
      //                   'coordinates',
      //                   JSON.stringify({
      //                     lat:
      //                       Platform.OS == 'ios'
      //                         ? result?.latitude
      //                         : result?.location?.latitude,
      //                     long:
      //                       Platform.OS == 'ios'
      //                         ? result.longitude
      //                         : result.location.longitude,
      //                   }),
      //                 );
      //                 Radar.reverseGeocode({
      //                   latitude:
      //                     Platform.OS == 'ios'
      //                       ? result?.latitude
      //                       : result?.location?.latitude,
      //                   longitude:
      //                     Platform.OS == 'ios'
      //                       ? result?.longitude
      //                       : result?.location?.longitude,
      //                 })
      //                   .then(async result2 => {
      //                     await AsyncStorage.setItem(
      //                       'locationname',
      //                       result2?.addresses[0]?.formattedAddress,
      //                     );

      //                     // do something with result.addresses
      //                   })
      //                   .catch(err => {
      //                     // optionally, do something with err
      //                   });
      //                 // do something with result.location, result.events, result.user
      //               })
      //               .catch(err => {
      //                 console.log('radar err', err);
      //                 // optionally, do something with err
      //               });
      //           }
      //         });
      //       } else {
      //         Radar.trackOnce()
      //           .then(async result => {
      //             await AsyncStorage.setItem(
      //               'coordinates',
      //               JSON.stringify({
      //                 lat:
      //                   Platform.OS == 'ios'
      //                     ? result?.latitude
      //                     : result?.location?.latitude,
      //                 long:
      //                   Platform.OS == 'ios'
      //                     ? result?.longitude
      //                     : result?.location?.longitude,
      //               }),
      //             );
      //             Radar.reverseGeocode({
      //               latitude:
      //                 Platform.OS == 'ios'
      //                   ? result?.latitude
      //                   : result?.location?.latitude,
      //               longitude:
      //                 Platform.OS == 'ios'
      //                   ? result?.longitude
      //                   : result?.location?.longitude,
      //             })
      //               .then(async result2 => {
      //                 // do something with result.addresses
      //                 await AsyncStorage.setItem(
      //                   'locationname',
      //                   result2.addresses[0].formattedAddress,
      //                 );
      //                 console.log(
      //                   await AsyncStorage.getItem('locationname'),
      //                   'locationanme',
      //                 );
      //               })
      //               .catch(err => {
      //                 return err;
      //                 // optionally, do something with err
      //               });
      //           })
      //           .catch(err => {
      //             console.log('radar err', err);
      //             // optionally, do something with err
      //           });
      //       }
      //     })
      //   : '';
    }
    CheckPermission();
  }, []);

  console.log(token, 'token');
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="login"
              component={token ? TabNavigation : Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="menu"
              component={Menu}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="kitchen"
              component={KitechenPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="cart"
              component={Cart}
              options={{headerShown: true}}
            />

            <Stack.Screen
              name="subscription"
              component={Subscription}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="subscriptionorder"
              component={SubscriptionOrder}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="myorder"
              component={MyOrder}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="categorykitechen"
              component={CategoryKitechen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Tab"
              component={TabNavigation}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;

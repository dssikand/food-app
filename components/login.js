/* eslint-disable react-native/no-inline-styles */
import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slick from 'react-native-slick';
import firebase, {firebaseConfig} from './database/firebase';
import FastImage from 'react-native-fast-image';

var styles = StyleSheet.create({
  wrapper: {
    height: responsiveHeight(70),
  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

    borderRadius: 7,
  },
  slide2: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  slide3: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  slide4: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: '#ccc',
    backgroundColor: '#F3F7F6',
    color: '#000',
  },
  inputplaceholder: {
    color: '#ccc',
  },
  continue: {
    backgroundColor: '#4ea437',
    margin: 10,
    borderRadius: 13,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

const Slicslider = ({navigation}) => {
  const [verify, setVerify] = useState(false);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationid] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function Initalize() {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
    }
    Initalize();
  }, []);
  const Handlelogin = () => {
    setIsLoading(true);

    firebase
      .auth()
      .signInWithPhoneNumber(`+91${phone}`)

      .then(res => {
        setVerificationid(res);
        setIsLoading(false);
        setVerify(true);
      })
      .catch(e => console.log(e));
  };
  const VerifyOtp = () => {
    setIsLoading(true);

    verificationId.confirm(otp).then(res =>
      firebase.auth().onAuthStateChanged(async user => {
        if (user) {
          const usertoken = await user.getIdToken();
          await AsyncStorage.setItem('usertoken', usertoken);
          navigation.navigate('Tab', {screen: 'Home'});
        }
      }),
    );
  };
  return (
    <View style={{backgroundColor: 'white', height: responsiveHeight(100)}}>
      <View style={{backgroundColor: 'white', height: responsiveHeight(88)}}>
        <Slick
          style={styles.wrapper}
          autoplay={true}
          showsPagination={false}
          height={responsiveHeight(45)}>
          <View style={styles.slide1}>
            <FastImage
              style={{
                // alignSelf: 'center',
                width: responsiveWidth(80),
                height: responsiveHeight(40),
              }}
              source={{
                uri: 'https://mobile-assetss.s3.ap-south-1.amazonaws.com/Copy+of+DMV+(800+%C3%97+400px)+(600+%C3%97+600px)+(8).gif',
                priority: FastImage.priority.normal,
              }}
            />
          </View>
          <View style={styles.slide2}>
            <FastImage
              style={{
                // alignSelf: 'center',
                width: responsiveWidth(80),
                height: responsiveHeight(40),
              }}
              objectfit={'contain'}
              source={{
                uri: 'https://mobile-assetss.s3.ap-south-1.amazonaws.com/Copy+of+DMV+(800+%C3%97+400px)+(600+%C3%97+600px)+(7).gif',
                priority: FastImage.priority.normal,
              }}
            />
          </View>
          <View style={styles.slide3}>
            <FastImage
              style={{
                // alignSelf: 'center',
                width: responsiveWidth(80),
                height: responsiveHeight(40),
              }}
              objectfit={'contain'}
              source={{
                uri: 'https://mobile-assetss.s3.ap-south-1.amazonaws.com/3rdslide.png',
                priority: FastImage.priority.normal,
              }}
            />
          </View>
          <View style={styles.slide4}>
            <FastImage
              style={{
                // alignSelf: 'center',
                width: responsiveWidth(80),
                height: responsiveHeight(40),
              }}
              objectfit={'contain'}
              source={{
                uri: 'https://mobile-assetss.s3.ap-south-1.amazonaws.com/Copy+of+DMV+(800+%C3%97+400px)+(600+%C3%97+600px)+(9).gif',
                priority: FastImage.priority.normal,
              }}
            />
          </View>
        </Slick>
        <KeyboardAvoidingView behavior="padding">
          {verify ? (
            <View
              style={{
                backgroundColor: '#fff',
                margin: 20,
                // marginTop: 0,
                padding: 12,
                borderRadius: 12,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 0},
                shadowOpacity: 0.2,
                shadowRadius: 10,
                elevation: 8,
              }}>
              <Text
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  padding: 6,
                  fontSize: 20,
                  // fontFamily: 'Poppins',
                }}>
                Verify
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  padding: 12,
                  paddingVertical: 10,
                  fontSize: 10,
                  // fontFamily: 'Poppins',
                }}>
                Enter Your Otp
              </Text>
              <TextInput
                style={styles.input}
                value={otp}
                onChangeText={e => setOtp(e)}
              />
              <TouchableOpacity
                style={styles.continue}
                onPress={() => VerifyOtp()}>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#fff',
                    textAlign: 'center',
                    padding: 16,
                    fontWeight: 600,
                  }}>
                  {isLoading ? 'Verifying' : 'Verify'}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                backgroundColor: '#fff',
                margin: 20,
                // marginTop: 0,
                padding: 12,
                borderRadius: 12,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 0},
                shadowOpacity: 0.2,
                shadowRadius: 10,
                elevation: 8,
              }}>
              <Text
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  padding: 6,
                  fontSize: 20,
                  // fontFamily: 'Poppins',
                }}>
                Login
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontWeight: 'bold',
                  padding: 12,
                  paddingVertical: 10,
                  fontSize: 10,
                  // fontFamily: 'Poppins',
                }}>
                Enter Your Phone Number
              </Text>
              <TextInput
                style={styles.input}
                maxLength={10}
                textContentType="telephoneNumber"
                keyboardType="number-pad"
                placeholder="+91 XXXX XXXXXX"
                onChangeText={e => setPhone(e)}
                placeholderTextColor={'#ccc'}
              />
              <TouchableOpacity
                style={styles.continue}
                onPress={() => {
                  // navigation.navigate('Tab', {screen: 'Home'})
                  Handlelogin();
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#fff',
                    textAlign: 'center',
                    padding: 16,
                    fontWeight: 600,
                  }}>
                  {isLoading ? 'Signing In' : 'Continue'}
                </Text>
              </TouchableOpacity>
              <Text style={{textAlign: 'center', color: '#000', fontSize: 12}}>
                By Signing up you agree to{'\n'} tnc and privacy policy
              </Text>
            </View>
          )}
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};
export default Slicslider;

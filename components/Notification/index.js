/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
export default function Notification() {
  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.notificationContainer}>
          <View style={style.badge}>
            <Text style={{color: '#fff'}}>Order Delivered</Text>
          </View>
          <View style={style.containertext}>
            <Text style={{color: '#000'}}>
              Notification Text for Your Order
            </Text>
          </View>
          <View style={style.datecontainer}>
            <Text style={{color: '#000'}}>Date</Text>
          </View>
        </View>
        <View style={style.notificationContainer}>
          <View style={style.badge}>
            <Text style={{color: '#fff'}}>Order Delivered</Text>
          </View>
          <View style={style.containertext}>
            <Text style={{color: '#000'}}>
              Notification Text for Your Order
            </Text>
          </View>
          <View style={style.datecontainer}>
            <Text style={{color: '#000'}}>Date</Text>
          </View>
        </View>
        <View style={style.notificationContainer}>
          <View style={style.badge}>
            <Text style={{color: '#fff'}}>Order Delivered</Text>
          </View>
          <View style={style.containertext}>
            <Text style={{color: '#000'}}>
              Notification Text for Your Order
            </Text>
          </View>
          <View style={style.datecontainer}>
            <Text style={{color: '#000'}}>Date</Text>
          </View>
        </View>
        <View style={style.notificationContainer}>
          <View style={style.badge}>
            <Text style={{color: '#fff'}}>Order Delivered</Text>
          </View>
          <View style={style.containertext}>
            <Text style={{color: '#000'}}>
              Notification Text for Your Order
            </Text>
          </View>
          <View style={style.datecontainer}>
            <Text style={{color: '#000'}}>Date</Text>
          </View>
        </View>
        <View style={style.notificationContainer}>
          <View style={style.badge}>
            <Text style={{color: '#fff'}}>Order Delivered</Text>
          </View>
          <View style={style.containertext}>
            <Text style={{color: '#000'}}>
              Notification Text for Your Order
            </Text>
          </View>
          <View style={style.datecontainer}>
            <Text style={{color: '#000'}}>Date</Text>
          </View>
        </View>
        <View style={style.notificationContainer}>
          <View style={style.badge}>
            <Text style={{color: '#fff'}}>Order Delivered</Text>
          </View>
          <View style={style.containertext}>
            <Text style={{color: '#000'}}>
              Notification Text for Your Order
            </Text>
          </View>
          <View style={style.datecontainer}>
            <Text style={{color: '#000'}}>Date</Text>
          </View>
        </View>
        <View style={style.notificationContainer}>
          <View style={style.badge}>
            <Text style={{color: '#fff'}}>Order Delivered</Text>
          </View>
          <View style={style.containertext}>
            <Text style={{color: '#000'}}>
              Notification Text for Your Order
            </Text>
          </View>
          <View style={style.datecontainer}>
            <Text style={{color: '#000'}}>Date</Text>
          </View>
        </View>
        <View style={style.notificationContainer}>
          <View style={style.badge}>
            <Text style={{color: '#fff'}}>Order Delivered</Text>
          </View>
          <View style={style.containertext}>
            <Text style={{color: '#000'}}>
              Notification Text for Your Order
            </Text>
          </View>
          <View style={style.datecontainer}>
            <Text style={{color: '#000'}}>Date</Text>
          </View>
        </View>
        <View style={style.notificationContainer}>
          <View style={style.badge}>
            <Text style={{color: '#fff'}}>Order Delivered</Text>
          </View>
          <View style={style.containertext}>
            <Text style={{color: '#000'}}>
              Notification Text for Your Order
            </Text>
          </View>
          <View style={style.datecontainer}>
            <Text style={{color: '#000'}}>Date</Text>
          </View>
        </View>
        <View style={style.notificationContainer}>
          <View style={style.badge}>
            <Text style={{color: '#fff'}}>Order Delivered</Text>
          </View>
          <View style={style.containertext}>
            <Text style={{color: '#000'}}>
              Notification Text for Your Order
            </Text>
          </View>
          <View style={style.datecontainer}>
            <Text style={{color: '#000'}}>Date</Text>
          </View>
        </View>
        <View style={style.notificationContainer}>
          <View style={style.badge}>
            <Text style={{color: '#fff'}}>Order Delivered</Text>
          </View>
          <View style={style.containertext}>
            <Text style={{color: '#000'}}>
              Notification Text for Your Order
            </Text>
          </View>
          <View style={style.datecontainer}>
            <Text style={{color: '#000'}}>Date</Text>
          </View>
        </View>
        <View style={style.notificationContainer}>
          <View style={style.badge}>
            <Text style={{color: '#fff'}}>Order Delivered</Text>
          </View>
          <View style={style.containertext}>
            <Text style={{color: '#000'}}>
              Notification Text for Your Order
            </Text>
          </View>
          <View style={style.datecontainer}>
            <Text style={{color: '#000'}}>Date</Text>
          </View>
        </View>
        <View style={style.notificationContainer}>
          <View style={style.badge}>
            <Text style={{color: '#fff'}}>Order Delivered</Text>
          </View>
          <View style={style.containertext}>
            <Text style={{color: '#000'}}>
              Notification Text for Your Order
            </Text>
          </View>
          <View style={style.datecontainer}>
            <Text style={{color: '#000'}}>Date</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  notificationContainer: {
    position: 'relative',
    elevation: 10,
    backgroundColor: '#fff',
    height: responsiveHeight(15),
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0, .2)', // IOS
    shadowOffset: {width: 1, height: -1},
    shadowOpacity: 0.5, // IOS
    shadowRadius: 10, //IOS,
    marginVertical: 10,
  },
  badge: {
    position: 'absolute',
    left: 1,
    top: 1,
    backgroundColor: '#4ea437',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15,
  },
  containertext: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  datecontainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginVertical: -10,
  },
});

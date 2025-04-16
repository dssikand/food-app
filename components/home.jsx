/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {SearchBar} from '@rneui/themed';
import {View, TextInput, Platform} from 'react-native';
import {Text} from '@rneui/base';
import {Button} from '@rneui/themed';
import {StyleSheet, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import {Image} from '@rneui/themed';
import {Icon} from 'react-native-elements';
import { getAllKitchens,getAllCatagories } from '../redux/kitchens/kitchenSlice';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Food from './common/food';
import GridCommon from './common/gridcommon';

import Slick from 'react-native-slick';
import {Card} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ContentListing from './common/FlatList';
import FastImage from 'react-native-fast-image';
import { useDispatch ,useSelector} from 'react-redux';

const BASE_URI =
  'https://mobile-assetss.s3.ap-south-1.amazonaws.com/Copy+of+DMV+(800+%C3%97+400px)+(600+%C3%97+600px).png';

const SwitchComponent = props => {
  //   const [search, setSearch] = useState('');
  const [loc, setLoc] = useState('');
  //   const updateSearch = (search: any) => {
  //     setSearch(search);
  //   };

  const dispatch = useDispatch()
  const {kitchens,Catagories} = useSelector(state => state.kitechen)


  useEffect(() => {
    (async () => {
      const location = await AsyncStorage.getItem('locationname');
      setLoc(location);
    })();

    const kitchens = async(data)=>{
    await dispatch(getAllKitchens(data))
      
    }
    const catagories = async(data)=>{
     const data1= await dispatch(getAllCatagories(data))
      }
    kitchens()
    catagories()
  }, [loc]);

  

  const food = Catagories.slice(0,4);
  const food2 = Catagories.slice(4,7);

  console.log(food,food2,"home.jsx")
  const BottFlat = ({item}) => (
    <GridCommon
      title={item.name}
      image={item.image}
      navigation={props.navigation}
    />
  );
  const FoodFlat = item => <Food title={item} />;
  const numColumns = Math.ceil(food.length / 2);
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        nestedScrollEnabled={true}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <View
            style={{
              marginTop: Platform.OS == 'ios' ? 40 : 'auto',
              marginLeft: 20,
              flexDirection: 'row',
            }}>
            <Icon
              name={'location-outline'}
              type="ionicon"
              size={20}
              style={{paddingTop: 5}}
              color={'#4ea437'}
            />
            <Text
              style={{
                fontWeight: '700',
                paddingVertical: Platform.OS == 'ios' ? 8 : 0.5,
                fontSize: 12,
                color: '#000',
                flexWrap: 'wrap',
                paddingLeft: 5,
                width: responsiveWidth(50),
              }}>
              {loc}
            </Text>
          </View>
          <View
            style={{
              marginTop: Platform.OS == 'ios' ? 40 : 'auto',
              marginRight: 20,
            }}>
            <Icon
              name="person-outline"
              style={{
                borderWidth: 1,
                borderRadius: 50,
                borderColor: '#4ea437',
                padding: 5,
              }}
              size={20}
              color={'#4ea437'}
            />
          </View>
        </View>
        <View style={styles.innercontent}>
          {/* <SearchBar /> */}
          <View
            style={{
              position: 'absolute',
              top: Platform.OS == 'ios' ? 30 : 10,
              left: 20,
              bottom: 20,
            }}>
            <Icon
              name={'search-outline'}
              type="ionicon"
              size={20}
              color={'#4ea437'}
            />
          </View>
          <TextInput
            style={styles.input2}
            placeholderTextColor={'#ccc'}
            // onChangeText={onChangeText}
            placeholder="Search"
          />
        </View>
        <View style={styles.quizbanner}>
          <Slick
            containerStyle={{
              elevation: 8,
            }}
            style={styles.wrapper}
            autoplay={true}
            showsPagination={false}
            width={responsiveWidth(90)}
            height={responsiveHeight(25)}>
            <View style={styles.slide1}>
              <FastImage
                style={{
                  // alignSelf: 'center',
                  width: responsiveWidth(90),
                  height: 200,
                  borderRadius: 20,
                }}
                source={{
                  uri: 'https://mobile-assetss.s3.ap-south-1.amazonaws.com/banner.gif',
                  priority: FastImage.priority.normal,
                }}
                resizeMode={'contain'}
              />
            </View>
            <View style={styles.slide2}>
              <FastImage
                style={{
                  // alignSelf: 'center',
                  width: responsiveWidth(90),
                  height: 200,
                  borderRadius: 20,
                  // resizeMode: 'stretch',
                }}
                resizeMethod="resize"
                resizeMode="contain"
                source={{
                  uri: 'https://mobile-assetss.s3.ap-south-1.amazonaws.com/banner.gif',
                  priority: FastImage.priority.normal,
                }}
              />
            </View>
            <View style={styles.slide3}>
              <FastImage
                style={{
                  // alignSelf: 'center',
                  width: responsiveWidth(90),
                  height: 200,
                  borderRadius: 20,
                }}
                source={{
                  uri: 'https://mobile-assetss.s3.ap-south-1.amazonaws.com/banner.gif',
                  priority: FastImage.priority.normal,
                }}
                resizeMode={'contain'}
              />
            </View>
          </Slick>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', margin: 12}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#ddd'}} />
          <View>
            <Text style={{width: 70, textAlign: 'center'}}>Explore</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#ddd'}} />
        </View>

        <View style={{flexDirection: 'row', height: 160}}>
          {/* <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={false}
            onPanResponderTerminationRequest={() => false}> */}
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={{
                borderRadius: 7,
                marginLeft: 20,
                // padding: 18,
                shadowColor: 'rgba(0,0,0, .2)', // IOS
                shadowOffset: {width: 1, height: -1},
                shadowOpacity: 0.5, // IOS
                shadowRadius: 10, //IOS
                backgroundColor: '#fff',
                elevation: 8, // Android
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                height: 140,
                paddingTop: 30,
                paddingBottom: 30,
              }}>
              <FastImage
                style={{
                  alignSelf: 'center',
                  width: responsiveWidth(30),
                  height: responsiveHeight(10),
                  padding: 0,

                  borderRadius: 50,
                }}
                source={{
                  uri: 'https://mobile-assetss.s3.ap-south-1.amazonaws.com/Blue+Modern+Highlight+Icons+Your+Story+.png',
                  priority: FastImage.priority.normal,
                }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  // marginLeft: 14,
                  fontSize: 14,
                  fontWeight: 700,
                  marginTop: 5,
                }}>
                Offers
              </Text>

              {/* <Text style={{textAlign: 'center', fontSize: 11}}>
                  Selection
                </Text> */}
            </TouchableOpacity>
          </View>

          <View style={{flex: 1}}>
            <TouchableOpacity
              style={{
                borderRadius: 7,
                marginLeft: 20,
                padding: 12,
                shadowColor: 'rgba(0,0,0, .2)', // IOS
                shadowOffset: {width: 1, height: -1},
                shadowOpacity: 0.5, // IOS
                shadowRadius: 10, //IOS
                backgroundColor: '#fff',
                elevation: 8, // Android
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                height: 140,
                paddingTop: 30,
                paddingBottom: 30,
              }}>
              <FastImage
                style={{
                  alignSelf: 'center',
                  width: responsiveWidth(25),
                  height: responsiveHeight(10),
                  padding: 0,

                  borderRadius: 50,
                }}
                source={{
                  uri: 'https://mobile-assetss.s3.ap-south-1.amazonaws.com/Blue+Modern+Highlight+Icons+Your+Story++(3).gif',
                  priority: FastImage.priority.normal,
                }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  // marginLeft: 14,
                  fontSize: 14,
                  fontWeight: 700,
                  marginTop: 5,
                }}>
                Gourmet
              </Text>

              {/* <Text style={{textAlign: 'center', fontSize: 11}}>
                  Selection
                </Text> */}
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={{
                borderRadius: 7,
                marginLeft: 20,
                // padding: 18,
                shadowColor: 'rgba(0,0,0, .2)', // IOS
                shadowOffset: {width: 1, height: -1},
                shadowOpacity: 0.5, // IOS
                shadowRadius: 10, //IOS
                backgroundColor: '#fff',
                elevation: 8, // Android
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                height: 140,
                // paddingTop: 30,
                // paddingBottom: 30,
              }}>
              <FastImage
                style={{
                  alignSelf: 'center',
                  width: responsiveWidth(30),
                  height: responsiveHeight(10),
                  padding: 0,

                  borderRadius: 50,
                }}
                source={{
                  uri: 'https://mobile-assetss.s3.ap-south-1.amazonaws.com/Blue+Modern+Highlight+Icons+Your+Story++(2).gif',
                  priority: FastImage.priority.normal,
                }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  // marginLeft: 14,
                  fontSize: 14,
                  fontWeight: 700,
                  marginTop: 5,
                }}>
                Healthy
              </Text>

              {/* <Text style={{textAlign: 'center', fontSize: 11}}>
                  Selection
                </Text> */}
            </TouchableOpacity>
          </View>
          {/* </ScrollView> */}
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', margin: 12}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#ddd'}} />
          <View>
            <Text style={{width: 160, textAlign: 'center'}}>
              whats on your mind?
            </Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#ddd'}} />
        </View>
        <View style={{}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'column'}}>
              <FlatList
                style={{}}
                data={food}
                numColumns={12}
                renderItem={({item}) => (
                  <Food
                    title={item.catagories}
                    navigation={props.navigation}
                    catid={item.id}
                  />
                )}
                keyExtractor={item => item}
                // horizontal={true}
              />
              <FlatList
                style={{}}
                data={food2}
                numColumns={12}
                renderItem={({item}) => <Food title={item.catagories} />}
                keyExtractor={item => item}
                // horizontal={true}
              />
            </View>
          </ScrollView>
        </View>
        <View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', margin: 12}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#ddd'}} />
            <View>
              <Text style={{width: 160, textAlign: 'center'}}>
                whats on your mind?
              </Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: '#ddd'}} />
          </View>
          {/* <ContentListing
            data={card}
            numColumns={1}
            scrollEnabled={false}
            renderItem={BottFlat}
            keyExtractor={item => item.id}
            // onClick={() => navigation.navigate('Menu')}
          /> */}
          {kitchens.length > 0 &&
            kitchens?.map((ca, key) => (
              <>
                <GridCommon
                  title={ca.name}
                  image={
                    'https://mobile-assetss.s3.ap-south-1.amazonaws.com/Copy+of+DMV+(800+%C3%97+400px)+(600+%C3%97+600px).png'
                  }
                  navigation={props.navigation}
                />
              </>
            ))}
        </View>

        {/* Some Other Data */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: Platform.OS == 'ios' ? 10 : 5,
    flexDirection: 'column',
  },
  input2: {
    height: 39,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    paddingLeft: 30,
    marginTop: Platform.OS == 'ios' ? 20 : 'auto',
    width: responsiveWidth(94),
    borderColor: '#ccc',
    color: '#000',
    fontWeight: '500',
    borderRadius: 10,
  },
  innercontent: {
    position: 'relative',
    flexDirection: 'row',

    padding: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  search: {
    width: responsiveWidth(80),
  },
  viewText: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#F3F7F6',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: 12,
  },
  schedule: {
    width: responsiveWidth(70),
  },
  item: {
    height: responsiveHeight(25),
    marginTop: 6,
    borderRadius: 25,
  },
  quizbanner: {
    margin: 14,
  },
  scrollview: {
    height: responsiveHeight(100),
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: responsiveHeight(100),
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  headerText: {
    textAlign: 'left',
    fontSize: 19,
  },
  imgHeaderContainer: {
    width: 71,
    height: 95,
    backgroundColor: '#fff000',
  },
  servicesContainer: {
    margin: 20,
  },
  servicesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 27,
  },
  headerTitle: {
    fontSize: 23,
    color: '#262626',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceImgContainer: {
    width: 70,
    height: 70,
    borderRadius: 25,
    backgroundColor: '#fff000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  serviceImg: {
    width: 40,
    height: 40,
  },
  columnWrapperStyle: {
    flex: 1,
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  separator: {
    height: 20,
  },
  button: {
    backgroundColor: '#4ea437',
    borderRadius: 4,
    paddingLeft: 12,
    paddingRight: 12,
  },
  wallet: {
    borderColor: '#4ea437',
    borderWidth: 2,
    width: responsiveWidth(16),
    height: responsiveHeight(4.8),
    marginTop: 12,
    borderRadius: 5,
  },
  wrapper: {
    height: responsiveHeight(70),
  },
  slide1: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // flex: 1,

    borderRadius: 20,
  },
  slide2: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // flex: 1,
    borderRadius: 40,

    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  slide3: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    borderRadius: 40,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flex: 1,
  },
  slide4: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // flex: 1,
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    borderRadius: 40,
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
export default SwitchComponent;

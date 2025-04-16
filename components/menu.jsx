import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  useWindowDimensions,
  Platform,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import DinnerMenu from './menu/dinnermenu';
import LunchMenu from './menu/lunchmenu';
import BreakfastMenu from './menu/btreakfastmenu';
import SnacksMenu from './menu/snacksmenu';
import {Card} from 'react-native-elements';
import {CardDivider} from '@rneui/base/dist/Card/Card.Divider';
import Slick from 'react-native-slick';
import FastImage from 'react-native-fast-image';
import { useDispatch, useSelector } from 'react-redux';
import { getKitchenM } from '../redux/kitchens/kitchenSlice';

// const Tab1 = () => <FirstRoute />;

// const Tab2 = () => <SecondRoute />;
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#fec502'}}
    style={{backgroundColor: 'none'}}
    labelStyle={{fontSize: 12}}
    activeColor={'#4ea437'}
    inactiveColor={'black'}
  />
);
const Menu = ({route,navigation}) => {
  const {addcart, setAdd} = useState(false);
  const {quanity, setQuanity} = useState(0);
  const dispatch = useDispatch()
  const {kitchenmenu} = useSelector(state => state.kitechen)
  console.log(route.params.kitechenid,"kitechenid")
  useEffect(() => {
    async function getMenus(){
      dispatch(getKitchenM(route.params.kitechenid))
    }
    getMenus()
  },[])
  console.log(kitchenmenu,"kitchenmenu")
  const FirstRoute = () => {
    return (
      <LunchMenu
        add={addcart}
        menu={kitchenmenu && kitchenmenu.filter((kit) => kit.type == "BreakFast")}
        quanity={quanity}
        setAdd={setAdd}
        setQuanity={setQuanity}
      />
    );
  };
  const SecondRoute = () => {
    return (
      <LunchMenu
        add={addcart}
        menu={kitchenmenu && kitchenmenu.filter((kit) => kit.type == "Lunch")}
        quanity={quanity}
        setAdd={setAdd}
        setQuanity={setQuanity}
      />
    );
  };
  const ThridRoute = () => {
    return (
      <LunchMenu
        add={addcart}
        menu={kitchenmenu && kitchenmenu.filter((kit) => kit.type == "Dinner")}
        quanity={quanity}
        setAdd={setAdd}
        setQuanity={setQuanity}
      />
    );
  };
  const FourthRoute = () => {
    return (
      <LunchMenu
        add={addcart}
        menu={kitchenmenu && kitchenmenu.filter((kit) => kit.type == "BreakFast")}
        quanity={quanity}
        setAdd={setAdd}
        setQuanity={setQuanity}
      />
    );
  };
  const renderScene = SceneMap({
    first: () => <FirstRoute />,
    second: () => <SecondRoute />,
    third: () => <ThridRoute />,
    fourth: () => <FourthRoute />,
  });
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Breakfast'},
    {key: 'second', title: 'Lunch'},
    {key: 'third', title: 'Snacks'},
    {key: 'fourth', title: 'Dinner'},
  ]);
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            color: '#000',
            width: responsiveWidth(100),
            height: responsiveHeight(39),
          }}>
          <FastImage
            style={{
              flex: 1,
              width: responsiveWidth(100),
              height: responsiveHeight(40),
              padding: 0,
              borderTopLeftRadius: 17,
              borderTopRightRadius: 17,
              opacity: 0.6,
              backgroundColor: '#000',
            }}
            //   objectFit={'cover'}
            source={{
              uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/3d/36/a0/fresh-hand-stretched.jpg',
              priority: FastImage.priority.normal,
              priority: FastImage.priority.normal,
            }}
          />

          <View style={{marginBottom: 20, marginTop: 10}}>
            <Card
              containerStyle={{
                borderRadius: 25,
                position: 'absolute',
                bottom: 20,
                // top: 0,
                left: Platform.OS == 'ios' ? 20 : 30,
                paddingBottom: 2,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#4ea437', fontWeight: 700}}>
                  Taste of india Tiffin Services{' '}
                </Text>
              </View>
              <View style={{flexDirection: 'row', columnGap: 20}}>
                <Text>4.00</Text>
                <Text>30min</Text>
                <Text>14.36km</Text>
              </View>
              <View>
                <Text style={{color: '#000', paddingBottom: 4}}>
                  Gatala anagra
                </Text>
              </View>
              <CardDivider color="#4ea437" />
              <Text style={{color: '#000', paddingBottom: 6}}>
                American fastfoodinnercircle, cannaught place
              </Text>
              <CardDivider color="#4ea437" />

              <View
                style={{
                  marginTop: 0,
                  width: responsiveWidth(70),
                  height: responsiveHeight(10),
                  flexDirection: 'row',
                  columnGap: 8,
                }}>
                <FastImage
                  style={{
                    flex: 1,
                    width: responsiveWidth(12),
                    height: responsiveHeight(8),
                    padding: 0,
                    borderRadius: 12,
                  }}
                  //   objectFit={'cover'}
                  source={{
                    uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/3d/36/a0/fresh-hand-stretched.jpg',
                    priority: FastImage.priority.normal,
                  }}
                />
                <FastImage
                  style={{
                    flex: 1,
                    width: responsiveWidth(12),
                    height: responsiveHeight(8),
                    padding: 0,
                    borderRadius: 12,
                  }}
                  //   objectFit={'cover'}
                  source={{
                    uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/3d/36/a0/fresh-hand-stretched.jpg',
                    priority: FastImage.priority.normal,
                  }}
                />
                <FastImage
                  style={{
                    flex: 1,
                    width: responsiveWidth(12),
                    height: responsiveHeight(8),
                    padding: 0,
                    borderRadius: 12,
                  }}
                  //   objectFit={'cover'}
                  source={{
                    uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/3d/36/a0/fresh-hand-stretched.jpg',
                    priority: FastImage.priority.normal,
                  }}
                />
                <FastImage
                  style={{
                    flex: 1,
                    width: responsiveWidth(12),
                    height: responsiveHeight(8),
                    padding: 0,
                    borderRadius: 12,
                  }}
                  //   objectFit={'cover'}
                  source={{
                    uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/3d/36/a0/fresh-hand-stretched.jpg',
                    priority: FastImage.priority.normal,
                  }}
                />
              </View>
            </Card>
          </View>
        </View>
        <View
          style={{height: responsiveHeight(14), padding: 6, marginBottom: 20}}>
          <Slick
            containerStyle={{height: responsiveHeight(10), marginTop: 40}}
            style={styles.wrapper}
            autoplay={true}
            showsPagination={false}
            width={responsiveWidth(95)}>
            <View style={styles.slide1}>
              <Text style={styles.header2text}>20% off upto $100</Text>
              <Text style={styles.headtext}>
                <Text style={{color: '#4ea437'}}>use kitchenwala</Text> | above
                100
              </Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.header2text}>20% off upto $100</Text>
              <Text style={styles.headtext}>
                <Text style={{color: '#4ea437'}}>use kitchenwala</Text> | above
                100
              </Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.header2text}>20% off upto $100</Text>
              <Text style={styles.headtext}>
                <Text style={{color: '#4ea437'}}>use kitchenwala</Text> | above
                100
              </Text>
            </View>
          </Slick>
          <View
            style={{
              position: 'absolute',
              bottom: 70,
              right: 10,
              marginBottom: 30,
              // marginVertical: 20,
            }}>
            <TouchableOpacity
              style={{
                paddingHorizontal: 20,
                padding: 8,
                marginTop: 3,
                // width: '50%',
                backgroundColor: '#4ea437',
                alignItems: 'center',
                borderRadius: 10,
              }}
              onPress={() => navigation.navigate('subscription')}>
              <Text style={{color: '#fff'}}>Subscribe Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 1,
            width: 100,
            left: 19,
            zIndex: 1,
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              width: 370,
              backgroundColor: '#4ea437',
              color: '#fff',
              borderRadius: 7,
              padding: 10,
            }}
            onPress={() => navigation.navigate('cart')}>
            <Text style={{color: '#fff'}}>1 item</Text>

            <Text style={{color: '#fff'}}>View Cart</Text>
          </TouchableOpacity>
        </View>

        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
    // height: responsiveHeight(100),
    resizeMode: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  slide1: {
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#4ea437',
    padding: 6,
  },
  slide2: {
    borderRadius: 7,
    borderWidth: 1,
    padding: 6,
    borderColor: '#4ea437',
  },
  slide3: {
    borderRadius: 7,
    borderWidth: 1,
    padding: 6,
    borderColor: '#4ea437',
  },
  header2text: {
    fontWeight: 700,
    fontSize: 18,
    color: '#000',
  },
  headtext: {textTransform: 'uppercase', color: '#000'},
  wrapper: {
    height: responsiveHeight(20),
  },
});
export default Menu;

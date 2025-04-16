import React, {useState} from 'react';
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
import DinnerMenu from '../menu/dinnermenu';
import LunchMenu from '../menu/lunchmenu';
import BreakfastMenu from '../menu/btreakfastmenu';
import SnacksMenu from '../menu/snacksmenu';
import {Card} from 'react-native-elements';
import {CardDivider} from '@rneui/base/dist/Card/Card.Divider';
import Slick from 'react-native-slick';
import FastImage from 'react-native-fast-image';
import NewOrder from '../common/neworder';

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
const SubscriptionOrder = ({navigation}) => {
  const renderScene = SceneMap({
    first: NewOrder,
    second: NewOrder,
    third: NewOrder,
    fourth: NewOrder,
  });
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'New'},
    {key: 'second', title: 'Ongoing'},
    {key: 'third', title: 'Pending'},
    {key: 'fourth', title: 'All'},
  ]);
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text>Subscription Order</Text>
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
    padding: 12,
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
export default SubscriptionOrder;

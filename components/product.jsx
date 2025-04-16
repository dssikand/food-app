import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import FirstRoute from './firstroute';
import SecondRoute from './secondroute';
const Tab1 = () => <FirstRoute />;

const Tab2 = () => <SecondRoute />;
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'black'}}
    style={{backgroundColor: 'none'}}
    activeColor={'green'}
    inactiveColor={'black'}
  />
);
const renderScene = SceneMap({
  first: Tab1,
  second: Tab2,
});
const Product = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Product'},
    {key: 'second', title: 'My Subscriptions'},
  ]);
  return (
    <>
      <View style={styles.container}>
        <View>
          {/* <SearchBar /> */}
          <TextInput style={styles.input} value="search" />
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
    height: responsiveHeight(100),
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default Product;

/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import {View, Text, Platform, StyleSheet, ScrollView} from 'react-native';
import GridCommon from '../common/gridcommon';
import { useDispatch, useSelector } from 'react-redux';
import { getKitchensFromCatagories } from '../../redux/kitchens/kitchenSlice';
export default function CategoryKitechen(props) {
  //   console.log(props.route.params, 'rpiteee');
  const dispatch = useDispatch()
  const {catkitchens} = useSelector(state=>state.kitechen)

  const {categoryname, categoryid} = props.route.params;
  useEffect(() =>{
    async function getKiteches(){
      dispatch(getKitchensFromCatagories(categoryid))
    }
    getKiteches()
  },[])
  console.log(catkitchens,"catkitchens")
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, marginTop: 50}}
        nestedScrollEnabled={true}>
        <View style={{flexDirection: 'row', alignItems: 'center', margin: 12}}>
          <View>
            <Text
              style={{textAlign: 'center', color: '#000', fontWeight: 'bold'}}>
              {categoryname}
            </Text>
          </View>
        </View>

        {catkitchens && catkitchens.length > 0 &&
        catkitchens?.map((ca, key) => (

        <GridCommon
          title={ca.name}
          id={ca.id}
          image={
            'https://mobile-assetss.s3.ap-south-1.amazonaws.com/Copy+of+DMV+(800+%C3%97+400px)+(600+%C3%97+600px).png'
          }
          navigation={props.navigation}
        />
        ))} 
      </ScrollView>
       
    </View>
  );
}
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
    // width: responsiveWidth(94),
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
    // width: responsiveWidth(80),
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
    // width: responsiveWidth(70),
  },
  item: {
    // height: responsiveHeight(25),
    marginTop: 6,
    borderRadius: 25,
  },
  quizbanner: {
    margin: 14,
  },
  scrollview: {
    // height: responsiveHeight(100),
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // height: responsiveHeight(100),
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
    // width: responsiveWidth(16),
    // height: responsiveHeight(4.8),
    marginTop: 12,
    borderRadius: 5,
  },
  wrapper: {
    // height: responsiveHeight(70),
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

    // width: responsiveWidth(100),
    // height: responsiveHeight(100),
  },
  slide3: {
    // width: responsiveWidth(100),
    // height: responsiveHeight(100),
    borderRadius: 40,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flex: 1,
  },
  slide4: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // flex: 1,
    // width: responsiveWidth(100),
    // height: responsiveHeight(100),
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

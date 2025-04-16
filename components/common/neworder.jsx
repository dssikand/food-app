import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
function NewOrder() {
  return (
    <View style={styles.container}>
      <View
        style={{
          // flex: 1,
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <FastImage
          style={{
            width: responsiveWidth(20),
            height: responsiveHeight(10),
            padding: 0,
            borderRadius: 17,
          }}
          source={{
            uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/3d/36/a0/fresh-hand-stretched.jpg',
          }}
        />
        <View style={{}}>
          <Text style={{color: '#000',fontWeight:600}}>Taste of indi atiffin services</Text>
          <Text>Gotala Nagar</Text>
        </View>
        <View>
          <Text style={{color: '#4ea437'}}>Days 30</Text>
          <Text>rs199</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 10,
        }}>
        <Text>ORDERID 2443</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              color: '#fff',
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderRadius: 7,
            }}>
            <Text style={{color: '#fff'}}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#4ea437',
              marginLeft: 6,
              color: '#fff',
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderRadius: 7,
            }}>
            <Text style={{color: '#fff'}}>Pending</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default NewOrder;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 4,
  },
});

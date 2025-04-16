import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Divider, Image} from 'react-native-elements';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Icon} from 'react-native-elements';
export default function Cart() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text styles={{color: '#000'}}>My Cart</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
          <Image
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
          <View style={{marginLeft: 12}}>
            <Text>tate of indi atiffin services</Text>
            <Text>Gotala Nagar</Text>
          </View>
        </View>
        <View style={{backgroundColor: '#fff', marginTop: 20}}>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              borderRadius: 8,
              padding: 26,
            }}>
            <Text>medium Lunch</Text>
            <TouchableOpacity></TouchableOpacity>
            <Text>90.0</Text>
          </View>
          <Divider />
          <View>
            <Text style={{padding: 20}}>Addition note</Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 8,
            padding: 20,
            marginTop: 20,
          }}>
          <Text>Apply Coupon</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderRadius: 8,
            padding: 20,
            marginTop: 20,
          }}>
          <Text>Wallet</Text>
          <Text>764823</Text>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 8,
            padding: 20,
            marginTop: 20,
          }}>
          <View>
            <Text style={{color: '#000', fontWeight: 'bold'}}>
              Bill Details
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 4,
            }}>
            <Text>item total</Text>
            <Text>353453</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 1,
            }}>
            <Text>delivery fee</Text>
            <Text>353453</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 1,
            }}>
            <Text>store charge</Text>
            <Text>353453</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 1,
            }}>
            <Text>To Pay</Text>
            <Text>353453</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 12,
          borderRadius: 25,
          marginTop: 10,
        }}>
        <View
          style={{
            // marginTop: Platform.OS == 'ios' ? 18 : 'auto',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                fontWeight: '700',
                paddingVertical: Platform.OS == 'ios' ? 8 : 10,
                fontSize: 12,
                color: '#000',
                flexWrap: 'wrap',
              }}>
              {/* {loc} */}
              Office
            </Text>
            <Text style={{color: '#000'}}>
              129,kb,131 AMBIKA PRINNACLE,Satelite Road
            </Text>
            <Text>129,kb,131 AMBIKA PRINNACLE,Satelite Road</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setSlide3(true);
              if (slide3 == true) {
                slideup3.current.show();
                slideup.current.hide();
              }
            }}>
            <Icon
              name={'location-outline'}
              type="ionicon"
              size={20}
              style={{marginTop: 10}}
              color={'#4ea437'}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            paddingRight: 20,

            marginTop: 14,
          }}>
          <View>
            <Text>380rs</Text>
            <Text style={{color: '#4ea437'}}>View All</Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                setSlide2(true);
                if (slide2 == true) {
                  slideup2.current.show();
                  slideup.current.hide();
                }
              }}>
              <Text
                style={{
                  backgroundColor: '#4ea437',
                  color: '#fff',
                  padding: 10,
                  paddingHorizontal: 26,
                  borderRadius: 7,
                  fontSize: 12,
                }}>
                PROCEED TO PAY
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 12,
  },
});

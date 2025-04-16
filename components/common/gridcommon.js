/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
];
const GridCommon = ({title, image, key, navigation,id}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('menu',{
      kitechenid: id
    })} key={key}>
      <View style={{flex: 1}}>
        <Card
          containerStyle={{
            borderRadius: 17,
            width: '93%',
            borderColor: '#fff',
            elevation: 12,
            shadowColor: 'rgba(0,0,0, .3)',
            shadowOffset: {width: 1, height: -1},
            shadowOpacity: 0.2,
            shadowRadius: 10,
            padding: 8,
            paddingTop: 0,
          }}>
          <View style={{objectFit: 'cover', padding: 0}}>
            <Image
              style={{
                flex: 1,
                alignSelf: 'center',
                width: responsiveWidth(93),
                height: responsiveHeight(24),
                padding: 0,
                borderTopLeftRadius: 17,
                borderTopRightRadius: 17,
                opacity: 0.7,
                backgroundColor: '#000',
              }}
              objectFit={'cover'}
              source={{
                uri: image,
              }}
            />
            <View
              style={{
                justifyContent: 'space-between',
                position: 'absolute',
                flexDirection: 'row',
                color: '#fff',
                flex: 1,
                width: responsiveWidth(88),
                top: 12,
              }}>
              <View
                style={{
                  backgroundColor: '#000',
                  opacity: 0.6,
                  padding: 3,
                  borderRadius: 5,
                }}>
                <Text style={{color: '#fff', fontSize: 11}}>{title}</Text>
              </View>
              <View>
                <Text>icon like</Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                position: 'absolute',
                flexDirection: 'row',
                alignItems: 'center',
                color: '#fff',
                width: responsiveWidth(88),
                bottom: 10,
              }}>
              <View style={{}}>
                <Text style={{color: '#fff', fontSize: 22, fontWeight: 'bold'}}>
                  {title}
                </Text>
                <Text style={{color: '#fff', fontSize: 11, fontWeight: 'bold'}}>
                  Chinese,StreetFood,Sandwich
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  style={{backgroundColor: '#4ea437', borderRadius: 5}}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 11,
                      padding: 4,
                    }}>
                    3.5
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
            }}>
            <Text
              style={{marginBottom: 5, fontWeight: '600', color: '#fec502'}}>
              Free delivery with gold
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{marginBottom: 10, fontSize: 12, color: '#000'}}>
              40-45 min 6km
            </Text>
            <Text style={{marginBottom: 10, fontSize: 12, color: '#4ea437'}}>
              Rs. 250 for one
            </Text>
          </View>
        </Card>
      </View>
    </TouchableOpacity>
  );
};
export default GridCommon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'white',
    marginTop: 100,
  },
  button: {
    backgroundColor: '#4ea437',
    borderRadius: 6,
    paddingLeft: 20,
    paddingRight: 20,
    width: responsiveWidth(16),
  },
});

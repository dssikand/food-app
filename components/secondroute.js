/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
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
const SecondRoute = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <Card
          style={{
            borderRadius: 12,
            border: 0,
            boxShadow:
              'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
          }}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <View style={{objectFit: 'cover'}}>
              <Image
                style={{
                  flex: 1,
                  alignSelf: 'center',
                  width: responsiveWidth(20),
                  height: responsiveHeight(10),
                }}
                objectFit={'cover'}
                source={{
                  uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/3d/36/a0/fresh-hand-stretched.jpg',
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  marginBottom: 4,
                  marginTop: 20,
                  fontWeight: '600',
                }}>
                No Subscription
              </Text>
              <Text
                style={{marginBottom: 10, fontSize: 12, }}>
                Pick from a variety healthy and fesh {"\n"}home directly home to home
              </Text>
            </View>
          </View>
        </Card>
      </View>
    </>
  );
};
export default SecondRoute;

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

  card: {
    borderRadius: 12,
    border: 0,
    boxShadow:
      'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
  },
});

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
const card = [1, 2, 3, 4, 5, 6,7,8,9,10];
const FirstRoute = () => {
  return (
    <FlatList
      style={{}}
      data={card}
      numColumns={2}
      renderItem={({item}) => (
        <View style={{flex: 1}}>
          <Card
            style={{
              borderRadius: 12,
              border: 0,
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
            }}>
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

            <Text
              style={{
                marginBottom: 4,
                marginTop: 20,
                fontWeight: '600',
                textAlign: 'center',
              }}>
              Country Special
            </Text>
            <Text style={{marginBottom: 10, fontSize: 12, textAlign: 'center'}}>
              13 items
            </Text>
          </Card>
        </View>
      )}
      keyExtractor={item => item}
    />
  );
};
export default FirstRoute;

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

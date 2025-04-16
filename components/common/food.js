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
const Food = ({title, navigation, catid}) => {
  return (
    <View style={{flex: 1, padding: 8}}>
      <TouchableOpacity
        style={{
          objectFit: 'cover',
          padding: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() =>
          navigation.navigate('categorykitechen', {
            categoryid: catid,
            categoryname: title,
          })
        }>
        <Image
          style={{
            flex: 1,
            alignSelf: 'center',
            width: responsiveWidth(20),
            height: responsiveHeight(10),
            padding: 0,
            borderRadius: 50,
          }}
          objectFit={'cover'}
          source={{
            uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/3d/36/a0/fresh-hand-stretched.jpg',
          }}
        />
        <Text style={{marginTop: 10, fontSize: 12, color: '#000'}}>
          {title}
        </Text>
      </TouchableOpacity>
      {/* <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 10,
        }}></View> */}
    </View>
  );
};
export default Food;

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

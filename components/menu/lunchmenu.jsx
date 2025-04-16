import {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Icon} from 'react-native-elements';
const LunchMenu = ({menu}) => {
  console.log(menu,"menu")
  const [add, setAdd] = useState(false);
  const [quantity, setQuantity] = useState(0);
  return (
    <>
      <View style={{flex: 1}}>
        {menu?.map((ma) =>  <View style={{padding: 12}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderWidth: 1,
              borderRadius: 12,
              borderColor: '#4ea437',
              padding: 12,
              marginTop: 10,
              color: '#000',
            }}>
            <View style={{color: '#000'}}>
              <Text
                style={{fontWeight: 'bold', color: '#4ea437', fontSize: 20}}>
                {ma.name}
              </Text>
              <Text style={{paddingTop: 10, color: '#000'}}>150.3</Text>
              <Text style={{paddingTop: 10, color: '#fec502'}}>
                {ma.itemsIncluded}
              </Text>
            </View>

            <View
              style={{
                width: responsiveWidth(20),
                height: responsiveHeight(10),
              }}>
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
              {add == true && quantity > 0 ? (
                <View style={{position: 'absolute', bottom: -8, left: 6}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flex: 1,
                      borderColor: '#4ea437',
                      borderWidth: 1,
                      textAlign: 'center',
                      borderRadius: 7,
                      backgroundColor: '#FFF',
                      width: 70,
                      color: '#4ea437',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        setQuantity(quantity + 1);
                      }}>
                      <Icon
                        name={'add-outline'}
                        type="ionicon"
                        size={18}
                        style={{marginRight: 2}}
                        color={'#4ea437'}
                      />
                    </TouchableOpacity>
                    <Text>{quantity}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        if (quantity == 0) {
                          setAdd(false);
                        } else {
                          setQuantity(quantity - 1);
                        }
                      }}>
                      <Icon
                        name={'remove-outline'}
                        type="ionicon"
                        size={18}
                        style={{marginLeft: 2}}
                        color={'#4ea437'}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <TouchableOpacity
                  style={{position: 'absolute', bottom: -8, left: 8}}
                  onPress={() => {
                    setAdd(true);
                    setQuantity(quantity + 1);
                  }}>
                  <Text
                    style={{
                      borderColor: '#4ea437',
                      borderWidth: 1,
                      textAlign: 'center',
                      borderRadius: 7,
                      backgroundColor: '#FFF',
                      width: 70,
                      color: '#4ea437',
                    }}>
                    ADD
                  </Text>
                </TouchableOpacity>
              )}
              {add == true && quantity > 0 ? <></> : ''}
            </View>
          </View>
        </View>)}
       
       
      </View>
    </>
  );
};
export default LunchMenu;

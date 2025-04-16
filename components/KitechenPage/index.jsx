import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Image} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {Divider} from 'react-native-paper';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Icon} from 'react-native-elements';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { getAllKitchens } from '../../redux/kitchens/kitchenSlice';
import {DatePickerModal} from 'react-native-paper-dates';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function KitechenPage() {
  const [calendar, setCalendar] = useState(false);
  const [dates, setDates] = useState([]);
  const {height} = Dimensions.get('window');

  const [loc, setLoc] = useState('');
  const slideup = useRef(null);
  const slideup2 = useRef(null);
  const slideup3 = useRef(null);

  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);

  useEffect(
    () => {
      (async () => {
        const location = await AsyncStorage.getItem('locationname');
        setLoc(location);
      })();
      function SLide() {
        if (slideup.current !== null) {
          slideup.current.show();
        }
        if (slideup3.current !== null) {
          slideup3.current.hide();
        }
        if (slideup2.current !== null) {
          slideup2.current.hide();
        }
      }
      SLide();
    },
    [loc],
    slideup,
    slideup2,
    slideup3,
  );
  return (
    <>
      <ScrollView>
        <View style={styles.KitechenContainer}>
          <View style={styles.headContainer}>
            <Text>Subscribe your Meal</Text>
          </View>
          <View style={styles.kitechenDetailContainer}>
            <View
              style={{
                height: responsiveHeight(10),
                width: responsiveWidth(20),
              }}>
              <FastImage
                style={{
                  flex: 1,
                  width: responsiveWidth(20),
                  height: responsiveHeight(20),
                  padding: 0,
                  borderRadius: 12,
                }}
                //   objectFit={'cover'}
                source={{
                  uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/3d/36/a0/fresh-hand-stretched.jpg',
                  priority: FastImage.priority.normal,
                }}
              />
            </View>
            <View style={styles.detail}>
              <Text style={{color: '#000', fontWeight: 'bold'}}>
                Taste of india Tiffin Services
              </Text>
              <Text style={{color: 'grey', paddingVertical: 2}}>
                Gotla Nagar
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginVertical: 10,
                }}>
                <FastImage
                  style={{
                    // flex: 1,
                    width: responsiveWidth(5),
                    height: responsiveHeight(2),
                    marginHorizontal: 2,
                    // backgroundColor: '#000',
                  }}
                  source={{
                    uri: 'https://mobile-assetss.s3.ap-south-1.amazonaws.com/icons8-starburst-shape-24.png',
                    priority: FastImage.priority.normal,
                    priority: FastImage.priority.normal,
                  }}
                />
                <Text style={{color: '#000', paddingVertical: 2}}>4.00</Text>
              </View>
            </View>
          </View>
          <Divider />
          <View>
            <View style={styles.dataes}>
              <TouchableOpacity
                style={{
                  borderColor: '#e3e3e3',
                  borderWidth: 1,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  paddingVertical: 10,
                }}
                onPress={() => setCalendar(true)}>
                <Text style={{color: '#000', fontWeight: 'bold'}}>
                  Start Date
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: 'bold',
                    paddingVertical: 5,
                  }}>
                  dd/mm/yyyy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderColor: '#e3e3e3',
                  borderWidth: 1,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  paddingVertical: 5,
                }}>
                <Text style={{color: '#000', fontWeight: 'bold'}}>
                  End Date
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: 'bold',
                    paddingVertical: 5,
                  }}>
                  dd/mm/yyyy
                </Text>
              </TouchableOpacity>
            </View>
            <DatePickerModal
              visible={calendar}
              dates={dates}
              locale="en"
              onChange={e => console.log(e, 'date elemtnt')}
              mode="range"
              // locale="en"
              onConfirm={() => {}}
              onDismiss={() => setCalendar(false)}
            />
            <View style={styles.subscribeContainer}>
              <Text>Select subscription Days</Text>
            </View>
            <View
              style={{
                backgroundColor: '#f5f5f5',
                marginLeft: 20,
                marginTop: 20,
                padding: 8,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Maharastian
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={{flexDirection: 'row', marginTop: 20, columnGap: 20}}>
                  <TouchableOpacity
                    style={{
                      borderColor: '#4ea437',
                      borderWidth: 1,
                      color: '#4ea437',
                      borderRadius: 7,
                      padding: 8,
                    }}>
                    <Text>Mon</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderColor: '#4ea437',
                      borderWidth: 1,
                      color: '#4ea437',
                      borderRadius: 7,
                      padding: 8,
                    }}>
                    <Text>Tue</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderColor: '#4ea437',
                      borderWidth: 1,
                      color: '#4ea437',
                      borderRadius: 7,
                      padding: 8,
                    }}>
                    <Text>Wed</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderColor: '#4ea437',
                      borderWidth: 1,
                      color: '#4ea437',
                      borderRadius: 7,
                      padding: 8,
                    }}>
                    <Text>Thu</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderColor: '#4ea437',
                      borderWidth: 1,
                      color: '#4ea437',
                      borderRadius: 7,
                      padding: 8,
                    }}>
                    <Text>Fri</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderColor: '#4ea437',
                      borderWidth: 1,
                      color: '#4ea437',
                      borderRadius: 7,
                      padding: 8,
                    }}>
                    <Text>Sat</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderColor: '#4ea437',
                      borderWidth: 1,
                      color: '#4ea437',
                      borderRadius: 7,
                      padding: 8,
                    }}>
                    <Text>Sun</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#f5f5f5',
              marginLeft: 20,
              marginTop: 20,
              padding: 8,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Gujarati</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={{flexDirection: 'row', marginTop: 20, columnGap: 20}}>
                <TouchableOpacity
                  style={{
                    borderColor: '#4ea437',
                    borderWidth: 1,
                    color: '#4ea437',
                    borderRadius: 7,
                    padding: 8,
                  }}>
                  <Text>Mon</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderColor: '#4ea437',
                    borderWidth: 1,
                    color: '#4ea437',
                    borderRadius: 7,
                    padding: 8,
                  }}>
                  <Text>Tue</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderColor: '#4ea437',
                    borderWidth: 1,
                    color: '#4ea437',
                    borderRadius: 7,
                    padding: 8,
                  }}>
                  <Text>Wed</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderColor: '#4ea437',
                    borderWidth: 1,
                    color: '#4ea437',
                    borderRadius: 7,
                    padding: 8,
                  }}>
                  <Text>Thu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderColor: '#4ea437',
                    borderWidth: 1,
                    color: '#4ea437',
                    borderRadius: 7,
                    padding: 8,
                  }}>
                  <Text>Fri</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderColor: '#4ea437',
                    borderWidth: 1,
                    color: '#4ea437',
                    borderRadius: 7,
                    padding: 8,
                  }}>
                  <Text>Sat</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderColor: '#4ea437',
                    borderWidth: 1,
                    color: '#4ea437',
                    borderRadius: 7,
                    padding: 8,
                  }}>
                  <Text>Sun</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              backgroundColor: '#f5f5f5',
              marginLeft: 20,
              marginTop: 20,
              padding: 8,
              marginBottom: 100,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Punjabi</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={{flexDirection: 'row', marginTop: 20, columnGap: 20}}>
                <TouchableOpacity
                  style={{
                    borderColor: '#4ea437',
                    borderWidth: 1,
                    color: '#4ea437',
                    borderRadius: 7,
                    padding: 8,
                  }}>
                  <Text>Mon</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderColor: '#4ea437',
                    borderWidth: 1,
                    color: '#4ea437',
                    borderRadius: 7,
                    padding: 8,
                  }}>
                  <Text>Tue</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderColor: '#4ea437',
                    borderWidth: 1,
                    color: '#4ea437',
                    borderRadius: 7,
                    padding: 8,
                  }}>
                  <Text>Wed</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderColor: '#4ea437',
                    borderWidth: 1,
                    color: '#4ea437',
                    borderRadius: 7,
                    padding: 8,
                  }}>
                  <Text>Thu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderColor: '#4ea437',
                    borderWidth: 1,
                    color: '#4ea437',
                    borderRadius: 7,
                    padding: 8,
                  }}>
                  <Text>Fri</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderColor: '#4ea437',
                    borderWidth: 1,
                    color: '#4ea437',
                    borderRadius: 7,
                    padding: 8,
                  }}>
                  <Text>Sat</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderColor: '#4ea437',
                    borderWidth: 1,
                    color: '#4ea437',
                    borderRadius: 7,
                    padding: 8,
                  }}>
                  <Text>Sun</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          {!slide2 && !slide3 && (
            <SlidingUpPanel
              draggableRange={{top: height / 4.75, bottom: -10}}
              // animatedValue={this._draggedValue}
              showBackdrop={false}
              ref={c => (slideup.current = c)}
              height={responsiveHeight(20)}
              containerStyle={{
                backgroundColor: '#fff',
              }}>
              {/* <View> */}
              <View
                style={{
                  marginTop: Platform.OS == 'ios' ? 12 : 'auto',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 24,
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

                  marginBottom: 10,
                }}>
                <Text>Selected plan</Text>
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
                        borderRadius: 17,
                      }}>
                      Subscribe Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* </View> */}
            </SlidingUpPanel>
          )}
          {slide2 && (
            <SlidingUpPanel
              draggableRange={{top: height / 2.85, bottom: 120}}
              // animatedValue={this._draggedValue}
              // showBackdrop={false}
              ref={c => (slideup2.current = c)}
              height={responsiveHeight(100)}
              containerStyle={{
                backgroundColor: '#fff',
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,

                // height: responsiveHeight(100),
                // padding: 20,
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 12,
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                }}>
                <View>
                  <Text style={{color: '#4ea437', fontWeight: 600}}>
                    Select payment method
                  </Text>
                  <Text style={{color: '#000', fontWeight: 600}}>
                    item total $900
                  </Text>
                </View>
                <View style={styles.paymentmethod}>
                  <Text style={{color: '#000', fontWeight: 600}}>Razorpay</Text>
                  <Text>Card, Upi,netbankin,WalletPhoinepe,AmazonPay</Text>
                </View>
                <View style={styles.paymentmethod}>
                  <Text style={{color: '#000', fontWeight: 600}}>Paypal</Text>
                  <Text>Card, Upi,netbankin,WalletPhoinepe,AmazonPay</Text>
                </View>
                <View style={styles.paymentmethod}>
                  <Text style={{color: '#000', fontWeight: 600}}>Stripe</Text>
                  <Text>Card, Upi,netbankin,WalletPhoinepe,AmazonPay</Text>
                </View>
              </View>
            </SlidingUpPanel>
          )}
          {slide3 && (
            <SlidingUpPanel
              draggableRange={{top: height / 2.85, bottom: 120}}
              // animatedValue={this._draggedValue}
              // showBackdrop={false}
              ref={c => (slideup3current = c)}
              height={responsiveHeight(100)}
              containerStyle={{
                backgroundColor: '#fff',
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,

                // height: responsiveHeight(100),
                // padding: 20,
              }}>
              <View style={{padding: 16}}>
                <Text style={{fontWeight: 700, fontSize: 14}}>
                  Choose a delivery address
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderRadius: 9,
                    padding: 12,
                    marginTop: 8,
                    bordercolor: '#ccc',
                  }}>
                  <Text style={{color: '#000'}}>Office</Text>
                  <Text>129,kb,131 AMBIKA PRINNACLE,Satelite Road</Text>
                  <Text>129,kb,131 AMBIKA PRINNACLE,Satelite Road</Text>
                </View>
                <View>
                  <Text style={{color: '#4ea437',marginTop: 12,fontWeight:700}}>ADD NEW ADDRESS</Text>
                </View>
              </View>
            </SlidingUpPanel>
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  KitechenContainer: {
    flex: 1,
  },
  dataes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
    alignItems: 'center',
  },
  headContainer: {
    marginTop: 40,
    marginLeft: 20,
  },
  subscribeContainer: {
    marginLeft: 20,
    marginTop: 10,
  },
  kitechenDetailContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  detail: {
    paddingHorizontal: 10,
  },
  paymentmethod: {
    padding: 18,
  },
});

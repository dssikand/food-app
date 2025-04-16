/* eslint-disable react-native/no-inline-styles */
import React, {Component, createRef, useRef, useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import SlidingUpPanel from 'rn-sliding-up-panel';
import {DatePickerModal} from 'react-native-paper-dates';
const {height} = Dimensions.get('window');
export default class Subscription extends Component {
  state = {
    selected: '1',
    dateModal: false,
    dates: [],
  };
  slideup = createRef();
  componentDidMount() {
    this.slideup.hide();
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            marginVertical: Platform.OS == 'ios' ? 50 : 20,
          }}>
          <Text style={{color: '#000', fontSize: 16, marginLeft: 12}}>
            Subscription Plan
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <View>
            <View
              style={{
                ...styles.yearly,
                backgroundColor:
                  this.state.selected === '1' || this.state.selected === '2'
                    ? ''
                    : 'transparent',
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor:
                    this.state.selected == '1' ? '#45a93733' : 'white',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',

                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  borderRadius: 15,
                  marginVertical: 10,
                }}
                onPress={() => this.setState({selected: '1'})}>
                <View style={{}}>
                  <Text style={{color: '#000', fontSize: 16, fontWeight: 600}}>
                    15 Day Medium Lunch or Dinner
                  </Text>

                  <Text
                    style={{
                      paddingVertical: 5,
                      color: '#000',
                    }}>
                    Lunch time 1pm to 2pm delivered-dinner
                  </Text>
                  <Text style={{color: '#4ea437'}}>Know More</Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      paddingVertical: 5,
                      color: '#000',
                      fontSize: 16,
                    }}>
                    Rs.649
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor:
                    this.state.selected == '2' ? '#45a93733' : 'white',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  borderRadius: 15,
                  marginVertical: 10,
                }}
                onPress={() => this.setState({selected: '2'})}>
                <View style={{}}>
                  <Text style={{color: '#000', fontSize: 16, fontWeight: 600}}>
                    30 Day Super Delicious
                  </Text>
                  <Text
                    style={{
                      paddingVertical: 5,
                      color: '#000',
                    }}>
                    Lunch time 1pm to 2pm delivered-dinner
                  </Text>
                  <Text style={{color: '#4ea437'}}>Know More</Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      paddingVertical: 5,
                      color: '#000',
                    }}>
                    Rs.649
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor:
                    this.state.selected == '3' ? '#45a93733' : 'white',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  borderRadius: 15,
                  marginVertical: 10,
                }}
                onPress={() => this.setState({selected: '3'})}>
                <View style={{}}>
                  <Text style={{color: '#000', fontSize: 16, fontWeight: 600}}>
                    30 Day Super Delicious
                  </Text>
                  <Text
                    style={{
                      paddingVertical: 5,
                      color: '#000',
                    }}>
                    Lunch time 1pm to 2pm delivered-dinner
                  </Text>
                  <Text style={{color: '#4ea437'}}>Know More</Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      paddingVertical: 5,
                      color: '#000',
                    }}>
                    Rs.649
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor:
                    this.state.selected == '4' ? '#45a93733' : 'white',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  borderRadius: 15,
                  marginVertical: 10,
                }}
                onPress={() => this.setState({selected: '4'})}>
                <View style={{}}>
                  <Text style={{color: '#000', fontSize: 16, fontWeight: 600}}>
                    30 Day Super Delicious
                  </Text>
                  <Text
                    style={{
                      paddingVertical: 5,
                      color: '#000',
                    }}>
                    Lunch time 1pm to 2pm delivered-dinner
                  </Text>
                  <Text style={{color: '#4ea437'}}>Know More</Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      paddingVertical: 5,
                      color: '#000',
                    }}>
                    Rs.649
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => this.slideup.show()}>
              <Text style={{paddingVertical: 10, color: '#4ea437'}}>
                Have a Coupon Code?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#4ea437',
                width: responsiveWidth(80),
                alignItems: 'center',
                justifyContent: 'center',
                height: responsiveHeight(5),
                marginVertical: 20,
                borderRadius: 10,
              }}
              onPress={() => this.setState({dateModal: true})}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('kitchen')}>
                <Text style={{color: '#fff', fontSize: 18}}>Subscribe</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            // flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SlidingUpPanel
            draggableRange={{top: height / 3.75, bottom: -10}}
            // animatedValue={this._draggedValue}
            // showBackdrop={false}
            ref={c => (this.slideup = c)}
            height={responsiveHeight(100)}
            containerStyle={{
              backgroundColor: '#fff',
              // height: responsiveHeight(100),
              // padding: 20,
            }}>
            <View
              style={{
                // flex: 1,
                backgroundColor: 'white',
                paddingVertical: 20,
                // alignItems: 'center',
                // justifyContent: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  // alignItems: 'center',
                  paddingVertical: 10,
                  paddingHorizontal: 16,
                }}>
                <Text
                  style={{fontSize: 18, color: '#4ea437', fontWeight: 'bold'}}>
                  Apply Coupon
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 20,
                }}>
                <TextInput
                  style={{
                    borderColor: '#e3e3e3',
                    borderRadius: 10,
                    borderWidth: 1,
                    height: responsiveHeight(5),
                    paddingHorizontal: 10,
                  }}
                  placeholder="Coupon Code"
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  marginVertical: 10,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#4ea437',
                    width: responsiveWidth(40),
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: responsiveHeight(5),
                    marginVertical: 20,
                    borderRadius: 10,
                  }}
                  onPress={() => this.slideup.hide()}>
                  <Text style={{color: '#fff'}}>Apply</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#fff',
                    width: responsiveWidth(40),
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: responsiveHeight(5),
                    marginVertical: 20,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#4ea437',
                  }}
                  onPress={() => this.slideup.hide()}>
                  <Text style={{color: '#4ea437'}}> Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SlidingUpPanel>
          <DatePickerModal
            locale="en"
            mode="multiple"
            visible={this.state.dateModal}
            onDismiss={() => this.setState({dateModal: false})}
            dates={this.state.dates}
            moreLabel={'...'}
            // onConfirm={onConfirm}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  yearly: {
    margin: 10,
    borderRadius: 10,
    // height: responsiveHeight(20),
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

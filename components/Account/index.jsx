import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Divider, Icon} from 'react-native-elements';
export default function Account(props) {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text>My Account</Text>
          </View>
          <View style={styles.account}>
            <View>
              <Text>cscode tech</Text>
              <Text>csdodech@gmail.com</Text>
              <Text>+91 34567876</Text>
            </View>
            <View>
              <Text style={{color: '#4ea437'}}>Edit</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('subscriptionorder')}>
            <View style={styles.accountmethod}>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name={'calendar-outline'}
                  type="ionicon"
                  size={20}
                  style={{marginRight: 12}}
                  color={'#4ea437'}
                />
                <Text style={{color: '#000', fontWeight: 600}}>
                  My subscription Order
                </Text>
              </View>

              <View>
                <Icon
                  name={'chevron-forward-outline'}
                  type="ionicon"
                  size={20}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('myorder')}>
            <View style={styles.accountmethod}>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name={'calendar-outline'}
                  type="ionicon"
                  size={20}
                  style={{marginRight: 12}}
                  color={'#4ea437'}
                />
                <Text style={{color: '#000', fontWeight: 600}}>My Order</Text>
              </View>

              <View>
                <Icon
                  name={'chevron-forward-outline'}
                  type="ionicon"
                  size={20}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.accountmethod}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name={'location-outline'}
                type="ionicon"
                size={20}
                style={{marginRight: 12}}
                color={'#4ea437'}
              />
              <Text style={{color: '#000', fontWeight: 600}}>My Address</Text>
            </View>

            <View>
              <Icon name={'chevron-forward-outline'} type="ionicon" size={20} />
            </View>
          </View>
          <View style={styles.accountmethod}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name={'wallet-outline'}
                type="ionicon"
                size={20}
                style={{marginRight: 12}}
                color={'#4ea437'}
              />
              <Text style={{color: '#000', fontWeight: 600}}>Wallet</Text>
            </View>

            <View>
              <Icon name={'chevron-forward-outline'} type="ionicon" size={20} />
            </View>
          </View>
          <View style={styles.accountmethod}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name={'people-outline'}
                type="ionicon"
                size={20}
                style={{marginRight: 12}}
                color={'#4ea437'}
              />
              <Text style={{color: '#000', fontWeight: 600}}>
                Invite freinds and Earn
              </Text>
            </View>

            <View>
              <Icon name={'chevron-forward-outline'} type="ionicon" size={20} />
            </View>
          </View>
          <View style={styles.accountmethod}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name={'heart-outline'}
                type="ionicon"
                size={20}
                style={{marginRight: 12}}
                color={'#4ea437'}
              />
              <Text style={{color: '#000', fontWeight: 600}}>Favourites</Text>
            </View>

            <View>
              <Icon name={'chevron-forward-outline'} type="ionicon" size={20} />
            </View>
          </View>
          <View style={styles.accountmethod}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name={'planet-outline'}
                type="ionicon"
                size={20}
                style={{marginRight: 12}}
                color={'#4ea437'}
              />
              <Text style={{color: '#000', fontWeight: 600}}>Language</Text>
            </View>

            <View>
              <Icon name={'chevron-forward-outline'} type="ionicon" size={20} />
            </View>
          </View>
          <View style={styles.accountmethod}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name={'alert-circle-outline'}
                type="ionicon"
                size={20}
                style={{marginRight: 12}}
                color={'#4ea437'}
              />
              <Text style={{color: '#000', fontWeight: 600}}>
                Help & Support
              </Text>
            </View>

            <View>
              <Icon name={'chevron-forward-outline'} type="ionicon" size={20} />
            </View>
          </View>
          <View style={styles.accountmethod}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name={'warning-outline'}
                type="ionicon"
                size={20}
                style={{marginRight: 12}}
                color={'#4ea437'}
              />
              <Text style={{color: '#000', fontWeight: 600}}>FAQ's</Text>
            </View>

            <View>
              <Icon name={'chevron-forward-outline'} type="ionicon" size={20} />
            </View>
          </View>
          <Divider />
          <View style={styles.accountmethod}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#000', fontWeight: 600}}>LOGOUT</Text>
            </View>

            <View>
              <Icon name={'log-out-outline'} type="ionicon" size={20} />
            </View>
          </View>
        </View>
        <View>
          <Text style={{textAlign: 'center', marginBottom: 40}}>
            app version 1.01
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 12,
  },
  account: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#dfdfdf',
    padding: 10,
    marginTop: 20,
  },
  accountmethod: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
});

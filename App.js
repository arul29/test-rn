import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: 100}}>
          <Image
            source={{
              uri: 'https://cdn0.iconfinder.com/data/icons/phosphor-duotone-vol-3/256/user-circle-duotone-256.png',
            }}
            style={{height: 150, width: 150}}
          />
          <Text style={{fontSize: 35, fontWeight: 'bold', color: 'black'}}>
            Welcome Back
          </Text>
          <Text style={{fontSize: 17, color: 'gray'}}>Sign to continue</Text>
        </View>
        {/* FORM INPUT */}
        <View
          style={{
            paddingVertical: 40,
            paddingHorizontal: 30,
          }}>
          {/* EMAIL  */}
          <View
            style={{
              backgroundColor: 'white',
              elevation: 5,
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}>
            <Text style={{fontSize: 15, color: 'gray', marginLeft: 40}}>
              Email
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{height: 30, width: 30}}
                source={{
                  uri: 'https://cdn4.iconfinder.com/data/icons/essentials-74/24/001_-_Envelope-128.png',
                }}
              />
              <TextInput
                style={{
                  height: 40,
                  fontSize: 15,
                  width: '85%',
                  marginLeft: 10,
                  borderBottomWidth: 0.5,
                }}
              />
            </View>
          </View>
          {/* EMAIL  */}
          {/* PASSWORD  */}
          <View
            style={{
              backgroundColor: 'white',
              elevation: 5,
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginTop: 10,
            }}>
            <Text style={{fontSize: 15, color: 'gray', marginLeft: 40}}>
              Password
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{height: 30, width: 30}}
                source={{
                  uri: 'https://cdn1.iconfinder.com/data/icons/security-law/500/law_iconsArtboard_1_copy_13-256.png',
                }}
              />
              <TextInput
                secureTextEntry={true}
                style={{
                  height: 40,
                  fontSize: 15,
                  width: '85%',
                  marginLeft: 10,
                  borderBottomWidth: 0.5,
                }}
              />
            </View>
          </View>
          {/* PASSWORD  */}
          {/* LOGIN BUTTON */}
          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: '#1e7898',
              marginTop: 20,
              borderRadius: 10,
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              Login
            </Text>
          </TouchableOpacity>
          {/* LOGIN BUTTON */}
        </View>
        {/* FORM INPUT */}
      </ScrollView>
    </View>
  );
}

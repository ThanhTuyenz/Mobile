import * as React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ManHinh1() {
  return (
    <View style={{
      flex: 1,
      paddingLeft:20,
      paddingBottom:10,
    }}>
      <View style={{
        flex: 24,
      }}>
        <Image source={require('./assets/vs_blue.png')} />
      </View>
      <View style={{
        flex: 1,
        justifyContent:'center',
      }}>
        <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>
      <View style={{
        flex: 1,
        flexDirection:'row',
        marginTop:10,
      }}>
        <Image source={require('./assets/star.png')}/>
        <Image source={require('./assets/star.png')}/>
        <Image source={require('./assets/star.png')}/>
        <Image source={require('./assets/star.png')}/>
        <Image source={require('./assets/star.png')}/>
        <Text style={{
          marginLeft: 20,
        }}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={{
        flex: 1,
        flexDirection:'row',
        marginTop:10,
      }}>
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
        }}>1.790.000 đ</Text>
        <Text style={{
          color:'#00000094',
          marginLeft: 30,
          fontSize: 15,
          fontWeight: 'bold',
          textDecorationLine:'line-through',
          lineHeight:25,
        }}>1.790.000 đ</Text>
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        marginTop:10,
      }}>
        <Text style={{
          color:'red',
          fontSize: 12,
          fontWeight: 'bold',
        }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Pressable style={{
            backgroundColor:'yellow',
            marginLeft: 10,
            borderRadius: 10,
            width: 20,
            height:20,
            justifyContent:'center',
            alignItems: 'center',
        }}>
          <Text style={{
            color: 'gray',
          }}>?</Text>
        </Pressable>
      </View>
      <View style={{
        flex:2,
        backgroundColor:'yellow',
        marginTop:10,
        borderRadius: 5,
        width: 300,
        justifyContent:'center',
            alignItems: 'center',
      }}>
        <Text style={{
          fontSize: 15,
        }}>4 MÀU-CHỌN MÀU</Text>
      </View>
      <View style={{
        flex:2.5,
        backgroundColor: 'red',
        marginTop:25,   
        borderRadius: 5,
        width: 300,
        justifyContent:'center',
        alignItems: 'center',
      }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color:'white'
        }}>CHỌN MUA</Text>

      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ManHinh1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

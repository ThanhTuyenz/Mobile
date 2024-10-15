import * as React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type ItemProps = { job: string, id: string, navigation: any, isDeleteMode: boolean, handleDelete: (id: string) => void};
const Item = ({ job, id, navigation, isDeleteMode, handleDelete }: ItemProps) => (
  <View style={{
    flexDirection:'row', 
    backgroundColor:'#DEE1E678', 
    borderRadius:25, 
    padding:10, 
    margin:10, 
    alignItems:'center', 
    justifyContent:'space-between'
  }}>
    <View style={{
      flexDirection:'row', 
      alignItems:'center'
    }}>
    <Image source={require('./assets/Frame2.png')} style={{margin:5}}/>
    <Text style={{fontStyle:'Inter', fontWeight:'bold'}}>{job}</Text>
    </View>
    <View>
     {isDeleteMode ? (
      <TouchableOpacity onPress={() => handleDelete(id)}>
        <Image source={require('./assets/delete.png')} style={{height:20, width:20}}/>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={() => navigation.navigate('ScreenEdit', { job, id })}>
        <Image source={require('./assets/Frame1.png')} />
      </TouchableOpacity>
    )}
    </View>
  </View>
);

function ManHinh1({navigation}) {
  return (
    <View style={{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: 'white' 
    }}>
      <View style={{ flex: 3 }}>
        <Image source={require('./assets/Image95.png')} />
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Epilogue', fontSize: 24, color: '#8353E2', fontWeight: 'bold' }}>MANAGE YOUR</Text>
        <Text style={{ fontFamily: 'Epilogue', fontWeight: 'bold', fontSize: 24, color: '#8353E2' }}>TASK</Text>
      </View>
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder="Enter your name"
          style={{ width: 300, height: 43, borderWidth: 1, borderColor: '#9095A0', paddingLeft: 40, borderRadius: 10, color: '#9095A0' }}
        />
        <Pressable style={{ position: 'absolute', left: 15, top: 15 }}>
          <Fontisto name="email" size={15} />
        </Pressable>
      </View>
      <View style={{ flex: 1, width: 150, height: 50 }}>
        <TouchableOpacity
          style={{ borderWidth: 1, width: 150, height: 40, borderRadius: 12, backgroundColor: '#00BDD6', borderColor: '#00BDD6', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => { navigation.navigate('List'); }}
        >
          <Text style={{ color: 'white' }}>GET STARTED -></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ManHinh2({ navigation, route }) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [text, onChangeText] = React.useState("Search");
  const [isDeleteMode, setIsDeleteMode] = React.useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://66fcc665c3a184a84d17f003.mockapi.io/App`);
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`https://66fcc665c3a184a84d17f003.mockapi.io/App/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Deleted successfully!');
        fetchData();
      } else {
        console.error('Failed to delete job.');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );

  if (loading) {
    return <Text>Loading...</Text>; 
  }

  if (error) {
    return <Text>Error: {error}</Text>; 
}

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder="Search"
          style={{ width: 300, height: 45, borderWidth: 1, borderColor: '#9095A0', paddingLeft: 40, borderRadius: 5 }}
        />
        <Pressable style={{ position: 'absolute', left: 10, top: 10 }}>
          <Fontisto name="search" size={24} />
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center' }}>
          <FlatList
            style={{ minWidth: '95%' }}
            data={data}
            renderItem={({ item }) => <Item job={item.job} id={item.id} navigation={navigation} isDeleteMode={isDeleteMode} handleDelete={handleDelete} />}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}> 
          <TouchableOpacity onPress={() => { navigation.navigate('Input'); }}>
            <Image source={require('./assets/Group13.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsDeleteMode(!isDeleteMode)}>
            <Image source={require('./assets/delete.png')} style={{ width: 40, height: 40, marginLeft: 20 }} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function ManHinh3({ navigation, route }) {
  const [text, onChangeText] = React.useState('input your job');
  const createUserAPI = 'https://66fcc665c3a184a84d17f003.mockapi.io/App';
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleInput = (event) => {
    onChangeText(event);
  };

  const handleSubmit = async (event) => {
    try {
      setIsLoading(true);
      const response = await fetch(createUserAPI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ job: text }),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        onChangeText('Input your job');
        navigation.navigate('ScreenList');
      } else {
        console.error('Form submission failed!');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{ 
      backgroundColor: 'white', 
      height: '100%' 
    }}>
      <View style={{ 
        alignItems: 'center', 
        padding: 20 
      }}>
        <Text style={{ 
          fontStyle: 'roboto', 
          fontWeight: 'bold', 
          fontSize: 20 
        }}>ADD YOUR JOB</Text>
      </View>
      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        borderWidth: 1, 
        borderRadius: 5, 
        borderColor: '#9095A0', 
        width: '90%', 
        alignSelf: 'center' 
      }}>
        <Image source={require('./assets/Input.png')} />
        <TextInput
          style={{ flex: 1, height: 40, paddingLeft: 10 }}
          onChangeText={onChangeText}
          value={text}
          onChange={handleInput}
        />
      </View>
      <View>
        <TouchableOpacity style={{ 
          margin: 10, 
          padding: 10, 
          borderRadius: 10, 
          backgroundColor: '#00BDD6', 
          width: 150, 
          alignSelf: 'center' 
          }} 
          onPress={handleSubmit}
        >
          <Text style={{ 
            fontStyle: 'roboto', 
            alignSelf: 'center', 
            color: 'white', 
            fontSize: 20 
          }}>Finish -></Text>
        </TouchableOpacity>
      </View>
      <View style={{ 
        flex: 1, 
        marginTop: 20 
      }}>
        <Image source={require('./assets/Image96.png')} />
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
        <Stack.Screen name="List" component={ManHinh2} />
        <Stack.Screen name="Input" component={ManHinh3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

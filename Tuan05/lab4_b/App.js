import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

type ItemData = {
  id: String;
  title: String;
  image: String;
  gia: String;
};

const DATA: ItemData[] = [
  {
    id: 'it1',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/giacchuyen1.png'),
    gia: '69.900 đ',
  },
  {
    id: 'it2',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/daynguon1.png'),
    gia: '69.900 đ',
  },
  {
    id: 'it3',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/dauchuyendoipsps21.png'),
    gia: '69.900 đ',
  },
  {
    id: 'it4',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/dauchuyendoi1.png'),
    gia: '69.900 đ',
  },
  {
    id: 'it5',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/carbusbtops21.png'),
    gia: '69.900 đ',
  },
  {
    id: 'it6',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/daucam1.png'),
    gia: '69.900 đ',
  },
];

type ItemProps = { title: string; image: String; gia: String };

const Item = ({ title, image, gia }: ItemProps) => (
  <View style={styles.item}>
    <Image style={styles.image} source={image} />
    <View style={{ marginLeft: 10, width: 120,}}>
      <Text style={{fontSize: 12, fontFamily:'Roboto', marginTop: 5,}}>{title}</Text>
      <View style={{
        flexDirection:'row',
        marginTop: 2,
        width: 13,
        height: 13,
      }}>
        <Image source={require('./assets/Star1.png')} />
        <Image source={require('./assets/Star1.png')} style={{marginLeft:2,}}/>
        <Image source={require('./assets/Star1.png')} style={{marginLeft:2,}}/>
        <Image source={require('./assets/Star1.png')} style={{marginLeft:2,}}/>
        <Image source={require('./assets/Star5.png')} style={{marginLeft:2,}}/>
        <Text style={{fontSize: 10, marginLeft: 5,}}>(15)</Text>
      </View>
      <Text style={{
        fontSize:12, 
        fontFamily:'Roboto', 
        fontWeight:'bold',
        marginTop: 2,
      }}>
        {gia}
        <Text style={{
          color:'#969DAA',
          fontWeight:'normal',
          marginLeft:10,
        }}>
          -39%
        </Text>
      </Text>
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: screenWidth,
          height: 42,
          backgroundColor: '#1BA9FF',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
        }}
      >
        <Image source={require('./assets/ant-design_arrow-left-outlined.png')} />
        <View
          style={{
            flexDirection: 'row',
            fontFamily: 'Roboto',
            width: 192,
            height: 30,
            backgroundColor: 'white',
            alignItems: 'center',
            padding: 10,
          }}
        >
          <Image source={require('./assets/whh_magnifier.png')} />
          <Text style={{ marginLeft: 10, color: '#7D5B5B', fontSize: 13 }}>
            Dây cáp usb
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('./assets/Group.png')} />
          <Image source={require('./assets/Ellipse4.png')} style={styles.overlayImage} />
        </View>
        <Image source={require('./assets/Group2.png')} />
      </View>

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} image={item.image} gia={item.gia} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />

      <View
        style={{
          flexDirection: 'row',
          width: screenWidth,
          height: 42,
          backgroundColor: '#1BA9FF',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
        }}
      >
        <Image source={require('./assets/Group_10.png')} />
        <Image source={require('./assets/Vector.png')} />
        <Image source={require('./assets/Vector1.png')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    width: 155,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    width: 155,
    height: 90,
  },
  imageContainer: {
    position: 'relative', 
  },
  overlayImage: {
    position: 'absolute', 
    top: -5, 
    right: -8, 
    width: 17, 
    height: 17,
  },
});
export default App;
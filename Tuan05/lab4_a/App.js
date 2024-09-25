import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
type ItemData={
  id: String,
  title: String,
  image: String,
  shop: String,

};
const DATA: ItemData[] = [
  {
    id: 'it1',
    title: 'Ca nấu lẩu, nấu mì mini...',
    image: require('./assets/ca_nau_lau.png'),
    shop: 'Devang',
  },
  {
    id: 'it2',
    title: '1KG KHÔ GÀ BƠ TỎI ...',
    image: require('./assets/ga_bo_toi.png'),
    shop: 'LTD Food',
  },
  {
    id: 'it3',
    title: 'Xe cần cẩu đa năng',
    image: require('./assets/xe_can_cau.png'),
    shop: 'Thế giới đồ chơi'
  },
  {
    id: 'it4',
    title: 'Đồ chơi dạng mô hình',
    image: require('./assets/do_choi_dang_mo_hinh.png'),
    shop: 'Thế giới đồ chơi'
  },
  {
    id: 'it5',
    title: 'Lãnh đạo giản đơn',
    image: require('./assets/lanh_dao_gian_don.png'),
    shop: 'Minh Long Book'
  },
  {
    id: 'it6',
    title: 'Hiểu lòng con trẻ',
    image: require('./assets/hieu_long_con_tre.png'),
    shop: 'Minh Long Book'
  },
];

type ItemProps = {title: string, image: String, shop: String,};

const Item = ({title, image, shop}: ItemProps) => (
  <View style={styles.item}>
    <Image style={styles.image} source={image}/>
    <View style={{marginLeft: 10, width: 170,}}>
      <Text style={{fontWeight: 'bold',}}>{title}</Text>
      <Text>
        <Text style={{color: '#7D5B5B', marginRight: 5,}}>Shop
        </Text>
        {shop}
      </Text>
    </View>
    <View style={{
      borderWidth: 1,
      width: 88,
      height: 38,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginLeft: 10,
      backgroundColor: '#F31111',
      borderColor: '#F31111',
    }}>
      <Text style={{color:'white',}}>Chat</Text>
      </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flexDirection: 'row',
        width: 360,
        height: 42,
        backgroundColor: '#1BA9FF',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
      }}>
        <Image source={require('./assets/ant-design_arrow-left-outlined.png')}/>
        <Text style={{
          color: 'white',
          fontSize: 20,
        }}>Chat</Text>
        <Image source={require('./assets/bi_cart-check.png')} />
      </View>
      <View style={{
        width: 360,
        height: 70,
        padding: 15,
        paddingLeft:30,
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
      }}>
        <Text>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} image={item.image} shop={item.shop} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      <View style={{
        flexDirection: 'row',
        width: 360,
        height: 42,
        backgroundColor: '#1BA9FF',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
      }}>
        <Image source={require('./assets/Group_10.png')}/>
        <Image source={require('./assets/Vector.png')}/>
        <Image source={require('./assets/Vector1(Stroke).png')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: 360,
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    flexDirection: 'row',
  },
  image: {
    width: 74,
    height: 74,
  },
});

export default App;
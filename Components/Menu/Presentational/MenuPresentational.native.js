import React from 'react';
import { View, Text,ScrollView,StyleSheet,Image,TouchableOpacity,ActivityIndicator,Dimensions } from 'react-native';
import {Link} from 'react-router-native'
const {width,height} = Dimensions.get('window')
import { Heading, HeadingStyle, Cover,WholeMenu, SingleCard, MenuItem, Cart } from './MenuStyled';

const MenuPresentational = (props) => {
    return (
        <ScrollView >
        {props.loading ?
         <View style={{display:"flex",flex:1,justifyContent:"center",alignItems:"center",height:height}}>
        <ActivityIndicator size="large" color="#0000ff" /> 
        </View> 
        :
        <View>
            <Heading>
            <HeadingStyle>Menu</HeadingStyle>
            <TouchableOpacity onPress={()=>{props.history.push('/cart')}}><Cart source={{uri: 'asset:/shopping-cart.png'}}/></TouchableOpacity>
            </Heading>
            <WholeMenu>
                {Object.keys(props.menu).map(single_menu => (
                  <Link to={'/'+single_menu} style={styles.Link}>
                    <SingleCard key={single_menu}>
                    <MenuItem>{single_menu}</MenuItem>
                    <Cover  source={{uri:props.menu[single_menu].Cover}}/>
                    </SingleCard>
                  </Link>
                ))}
            </WholeMenu>
        </View>
        }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    Link: {
        width:'40%',
        margin:10,   
        display:"flex",     
        alignItems:"center",
        justifyContent:'center'
    },
    
  });
  
export default MenuPresentational
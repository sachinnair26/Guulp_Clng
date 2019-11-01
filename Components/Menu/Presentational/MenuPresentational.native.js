import React from 'react';
import { View, Text,ScrollView,StyleSheet,Image,TouchableOpacity } from 'react-native';
import {Link} from 'react-router-native'
import { Heading, HeadingStyle, Cover,WholeMenu, SingleCard, MenuItem, Cart } from './MenuStyled';

const MenuPresentational = (props) => {
    return (
        <ScrollView>
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
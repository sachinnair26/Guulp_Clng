import React from 'react'
import { View,Text,FlatList} from 'react-native'
import {Link} from 'react-router-native'
import { Price,Cost,Name,NameAndDescription,Description,SingleElement,Heading,HeadingStyle,Icon} from './DishesStyled';
const DishesPresentational = (props) =>{
   
    
    return(
      <View>
      <Heading><HeadingStyle>Dishes</HeadingStyle></Heading>
        <FlatList
        data={props.Dishes}
        renderItem={({ item }) =>
        <Link to={`${props.param}/${item.name}`}><SingleElement>
        <Icon  source={{uri:item.image}}></Icon>
        <NameAndDescription>
        <Name>{item.name}</Name>
        <Description ellipsizeMode='tail' textBreakStrategy='balanced' numberOfLines={1}>{item.description}</Description>
        </NameAndDescription>
        <Cost>
          <Price>
          ${item.price}
          </Price>
        </Cost>
        </SingleElement></Link>
        }
        keyExtractor={item => item.id}
      />
      </View>
    )
}
export default DishesPresentational;
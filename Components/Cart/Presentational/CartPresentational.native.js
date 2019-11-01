import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { Price, Cost, Name, Cart, Cross, NameAndDescription, Description, SingleElement, Heading, HeadingStyle, Icon } from './CartStyled';

const CartPresentational = (props) => {
  return (
    <View>
      <Heading><HeadingStyle>Cart</HeadingStyle></Heading>
      <FlatList
        data={props.cart}
        renderItem={({ item,index }) =>
          <SingleElement>
            <Icon source={{ uri: item.image }}></Icon>
            <NameAndDescription>
              <Name>{item.name}</Name>
              <Description ellipsizeMode='tail' textBreakStrategy='balanced' numberOfLines={1}>{item.description}</Description>
            </NameAndDescription>
            <Cost>
              <Price>
                ${item.price}
              </Price>
            </Cost>
            <TouchableOpacity onPress={()=>{props.RemoveFromCartAction(index)}}><Cross source={{ uri: 'asset:/cross.png' }} /></TouchableOpacity>
          </SingleElement>
        }
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default CartPresentational;
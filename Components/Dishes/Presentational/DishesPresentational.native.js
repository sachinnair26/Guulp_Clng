import React from 'react'
import { View,Text,FlatList} from 'react-native'
import { Price,Cost,Name,NameAndDescription,Description,SingleElement,Heading,HeadingStyle,Icon} from './DishesStyled';
const DishesPresentational = (props) =>{
    console.log(props);
    
    return(
      <View>
      <Heading><HeadingStyle>Dishes</HeadingStyle></Heading>
        <FlatList
        data={props.Dishes}
        renderItem={({ item }) =>
        <SingleElement>
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
        </SingleElement>
        }
        keyExtractor={item => item.id}
      />
      </View>
    )
}
export default DishesPresentational;
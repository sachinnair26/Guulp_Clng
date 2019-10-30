import React from 'react'
import { View,Text,FlatList} from 'react-native'
import { Description,SingleElement,Heading,HeadingStyle,Icon} from './DishesStyled';
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
        <View>
        <Text>{item.name}</Text>
        <Description ellipsizeMode='tail' textBreakStrategy='balanced' numberOfLines={1}>{item.description}</Description>
        </View>
        </SingleElement>
        }
        keyExtractor={item => item.id}
      />
      </View>
    )
}
export default DishesPresentational;
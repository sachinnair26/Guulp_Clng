import React from 'react'
import { Text, View } from 'react-native';
import { QuantitySelectorButton, QuantitySelectorMain, CountText } from './SelectedDishStyled';

const QuantitySelector = (props) => {
    return (
        <QuantitySelectorMain>
            <QuantitySelectorButton onPress={()=>{props.changeCount('inc')}}>
            <Text style={{textAlign:"center"}}>+</Text>
            </QuantitySelectorButton>
            <CountText>{props.count}</CountText>
            <QuantitySelectorButton onPress={()=>{props.changeCount('dec')}}>
            <Text style={{textAlign:"center"}}>-</Text>
            </QuantitySelectorButton>
            
        </QuantitySelectorMain>
    )
}
export default QuantitySelector;
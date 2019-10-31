import React from 'react'
import {View,Text} from 'react-native';
import CarouselElement from './CarouselElement';
import { SelectorValues, SingleSelectorValue, SelectorPageMain, ExtraHeading, DishName, Description, AddToCartButton } from './SelectedDishStyled';
import DishDetails from './DIshDetails.native';
import QuantitySelector from './QuantitySelector.native';
const SelectedDishPresentational = (props) =>{
    return(
        <SelectorPageMain>
        <CarouselElement image={props.selected_dish['image']}/>
        <DishDetails {...props}/>
        <QuantitySelector count={props.count} changeCount={props.changeCount}/>
        <AddToCartButton><Text style={{textAlign:"center",color:'#fff'}}>Add To Cart</Text></AddToCartButton>
        </SelectorPageMain>
    )
}

export default SelectedDishPresentational;
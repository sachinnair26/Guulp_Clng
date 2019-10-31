import React from 'react'
import {View,Text} from 'react-native';
import CarouselElement from './CarouselElement';
import { SelectorValues, SingleSelectorValue, SelectorPageMain, ExtraHeading, DishName, Description } from './SelectedDishStyled';
import DishDetails from './DIshDetails.native';
const SelectedDishPresentational = (props) =>{
    console.log("here",props);
    
    return(
        <SelectorPageMain>
        <CarouselElement image={props.selected_dish['image']}/>
        <DishDetails {...props}/>
        </SelectorPageMain>
    )
}

export default SelectedDishPresentational;
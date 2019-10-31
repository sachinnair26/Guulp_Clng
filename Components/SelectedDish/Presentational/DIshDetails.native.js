import React from 'react';
import { SelectorValues, SingleSelectorValue, SelectorPageMain, SingleSelectorValueSelected, ExtraHeading, DishName, Description } from './SelectedDishStyled';
import { View, Text } from 'react-native';

const DishDetails = (props) => {
    return (
        <View>
            <DishName>{props.selected_dish.name}</DishName>
            <Description>{props.selected_dish.description}</Description>
            <SelectorValues>
                <ExtraHeading>
                    Size:
        </ExtraHeading>
                {Object.keys(props.selected_dish.size).map(val =>
                    props.size === val ?
                        <SingleSelectorValueSelected onPress={()=>{props.onChangeSize(val)}}>
                            <Text style={{ padding: 5, color: '#fff' }}>
                                {val}
                            </Text>
                        </SingleSelectorValueSelected>
                        :
                        <SingleSelectorValue onPress={()=>{props.onChangeSize(val)}}>
                            <Text style={{ padding: 5, color: '#fff' }}>
                                {val}
                            </Text>
                        </SingleSelectorValue>
                )}
            </SelectorValues>
            <SelectorValues>
                <ExtraHeading>

                    Addons:
        </ExtraHeading>
                {Object.keys(props.selected_dish.addons).map(val =>
                    props.addon === val ?
                        <SingleSelectorValueSelected onPress={()=>{props.onChangeAddon(val)}}>
                            <Text style={{ padding: 5, color: '#fff' }}>
                                {val}
                            </Text>
                        </SingleSelectorValueSelected>
                        :
                        <SingleSelectorValue onPress={()=>{props.onChangeAddon(val)}}>
                            <Text style={{ padding: 5, color: '#fff' }}>
                                {val}
                            </Text>
                        </SingleSelectorValue>
                )}
            </SelectorValues>
        </View>
    )
}
export default DishDetails;
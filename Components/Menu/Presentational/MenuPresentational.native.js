import React from 'react';
import { View, Text,ScrollView } from 'react-native';
import { Heading, HeadingStyle, Cover,WholeMenu, SingleCard, MenuItem } from './MenuStyled';
const MenuPresentational = (props) => {
    return (
        <ScrollView>
            <Heading><HeadingStyle>Menu</HeadingStyle></Heading>
            <WholeMenu>
                {Object.keys(props.menu).map(single_menu => (
                    <SingleCard>
                    <MenuItem>{single_menu}</MenuItem>
                    <Cover  source={{uri:props.menu[single_menu].Cover}}/>
                    </SingleCard>
                ))}
            </WholeMenu>
        </ScrollView>
    )
}

export default MenuPresentational
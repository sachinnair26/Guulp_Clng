import styled from 'styled-components';
import {Text,View,Dimensions} from 'react-native';

const { width,height } = Dimensions.get('window');
export const SelectorPageMain = styled.View `
display:flex;
`
export const Img = styled.Image `
width:${width};
height:200px;
`
export const ExtraHeading = styled.Text `
margin-right:5px;
font-size:15px;
`
export const SelectorValues = styled.View `
display:flex;
flex-direction:row;
width:100%;
margin:10px;
align-items:baseline;
`
export const SingleSelectorValue = styled.TouchableOpacity `
margin:2px;
background-color:green;
border-radius:20px;
`
export const DishName = styled.Text `
font-weight:bold;
margin:10px;
font-size:18px;

`
export const Description = styled.Text `
margin:10px;
font-size:14px;
`
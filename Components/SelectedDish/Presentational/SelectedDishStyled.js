import styled from 'styled-components';
import {Text,View,Dimensions} from 'react-native';

const { width,height } = Dimensions.get('window');
export const SelectorPageMain = styled.View `
display:flex;
justify-content:center;

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
export const QuantitySelectorButton = styled.TouchableOpacity `
background-color:red;
height:30px;
width:30px;
border-radius:100px;
align-items:center;
display:flex;
justify-content:center;
`
export const QuantitySelectorMain = styled.View `
display:flex;
flex-direction:row;
align-self:center;
margin:30px;
`
export const CountText = styled.Text `
width:40px;
margin:2px;
text-align:center;

`
export const AddToCartButton = styled.TouchableOpacity `
width:80%;
align-self:center;
background-color:green;
padding:20px;
margin:30px;
`
export const SingleSelectorValueSelected = styled.TouchableOpacity `
margin:2px;
background-color:pink;
border-radius:20px;
`
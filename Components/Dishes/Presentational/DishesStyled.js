import styled from 'styled-components/native'

export const SingleElement = styled.TouchableOpacity `
width:100%;
background-color:#fffdd0;
padding:6px;
margin-top:1px;
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
`
export const Heading = styled.View `
padding:15px;
width:100%;
background-color:red;
display:flex;
align-items:center;
justify-content:center;
`
export const HeadingStyle = styled.Text `
font-size:20px;
color:#fff;
font-weight:bold;
`
export const Description = styled.Text `
font-size:12px;
margin:2px;

`
export const Name = styled.Text `
font-weight:bold;
margin:2px;
`
export const NameAndDescription = styled.View `
display:flex;
justify-content:center;
margin:2px;
width:60%;
`
export const Icon = styled.Image `
    width:25%;
    height:80px;
    
`
export const Cost = styled.View `
height:100%;
display:flex;
justify-content:center;
`
export const Price = styled.Text `
font-size:18px;
color:grey;
`
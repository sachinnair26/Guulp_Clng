import styled from 'styled-components/native'

export const SingleCard = styled.View `
width:100%;
height:auto;
margin:10px;
display:flex;
align-items:flex-end;
justify-content:flex-end;

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
export const Cover = styled.Image `
    width:100%;
    height:150px;
    border-radius:20px;
    
`
export const WholeMenu = styled.View `
display:flex;
flex-direction:row;
justify-content:space-around;
flex-wrap:wrap;
height:100%;
`
export const MenuItem = styled.Text `
position:absolute;
z-index:2;
color:#fff;
padding:10px;
font-size:18px;
font-weight:bold;
`
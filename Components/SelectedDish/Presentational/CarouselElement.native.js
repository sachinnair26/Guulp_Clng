import React from 'react';
import {Text,View,Dimensions} from 'react-native';
const { width,height } = Dimensions.get('window');
import Carousel,{Pagination} from 'react-native-snap-carousel';
import {Img} from './SelectedDishStyled';
 const CarouselElement = (props) =>{
     
   const ENTRIES1 = [
        {
            title: 'Beautiful and dramatic Antelope Canyon',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: props.image
        }, {
            title: 'Beautiful and dramatic Antelope Canyon',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: 'https://i.kinja-img.com/gawker-media/image/upload/cblnot4z6axpt1xjil4s.jpg'
        },
     
    ];
    
    return(
         <View >
         
             <Carousel
             renderItem={_renderItem}
              data={ENTRIES1}
              sliderWidth={width}
              itemWidth={width}
              firstItem={0}
              loop={true}
                //   loopClonesPerSide={2}
                  autoplay={true}
                 autoplayDelay={100}
                  autoplayInterval={2000}
            />
            
         </View>
     )
 } 
const _renderItem =  ({item, index}) => {
    return (
        <View >
            <Img  source={{uri:item.illustration}}/>
        </View>
    );
}
 export default CarouselElement;
 
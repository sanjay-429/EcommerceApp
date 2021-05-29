import React,{createContext, useState} from 'react';
import dslr from '../assets/dslr.jpg';
import rings from '../assets/rings.jpg';
import headphone from '../assets/headphone.jpg';
import microphone from '../assets/microphone.jpg';
import iphone from '../assets/iphone.jpg';
import shoes from '../assets/shoes.jpg';
import perfume from '../assets/perfume.jpg';
import watch from '../assets/watch.jpg';

export const ProductsContext=createContext();

function ProductsContextProvider(props) {
const [products] = useState([
    {id:1,name:'Dslr', price:300, image:dslr, status:'hot'},
    {id:2,name:'Headphone', price:30, image:headphone, status:'new'},
    {id:3,name:'Iphone', price:400, image:iphone, status:'hot'},
    {id:4,name:'Blue Yetti', price:200, image:microphone,status:'hot'},
    {id:5,name:'Perfume', price:40, image:perfume, status:'new'},
    {id:6,name:'Rings', price:100, image:rings, status:'new'},
    {id:7,name:'Shoes', price:50, image:shoes,status:'hot'},
    {id:8,name:'Watch', price:120, image:watch, status:'new'}
])
    return (
        <ProductsContext.Provider value={{products:[...products]}}>
          {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;

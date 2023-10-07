import React from 'react';
import styles from './Home.module.css';
import Products from '../Products/Products';
import MainSlidder from '../MainSlidder/MainSlidder';
import CategorySlidder from '../CategorySlidder/CategorySlidder';


export default function Home() {
  return <>
    <MainSlidder/>
    <CategorySlidder/>
    <Products/>
  </>
}

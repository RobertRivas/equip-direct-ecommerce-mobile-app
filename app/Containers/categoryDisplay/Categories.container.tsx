import React, { useEffect, useState } from 'react';
import { Action } from 'redux';
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import Categories from './Categories.component';
import { NavigationParams, routes } from '../../Navigations';
import WooCommerce from '../../Services/WooCommerce';

import {Category} from '../../Components/CategoriesCategory/CategoriesDisplayCategory.component';

interface Props {
    navigation: StackNavigationProp<NavigationParams>;
}

const CategoriesContainer = ({navigation}: Props): JSX.Element => {

     const [ categories, setCategories ] = useState<Array<Category>>([]);
      // const dispatch = useDispatch();

     const handlers = {
         handleCategoryPress: (id: number): void =>
             navigation.navigate('Categories'),

     };

     // useEffect(() => {
     //
     //    WooCommerce.get('/products/categories').then(({ data }) => {
     //      setCategories(data);
     //        console.log(setCategories)
     //        console.log(categories)
     //        console.log(data);
     //    });
     //  }, []);

      return <Categories {...handlers} categories={categories} />;

    };




export default CategoriesContainer;

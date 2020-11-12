import React, { useEffect, useState } from 'react';
import { Action } from 'redux';
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import Search   from "../Search/Search.component";
import { NavigationParams, routes } from '../../Navigations';
import WooCommerce from '../../Services/WooCommerce';
import { Product } from '../../Components/ProductItem/ProductItem.component';
import { actions } from '../../Reducers/Cart.reducer';
import {ScrollView, View} from "react-native";
import {SearchBar} from "react-native-elements";

interface Props {
    navigation: StackNavigationProp<NavigationParams>;
}

const SearchContainer = ({ navigation }: Props): JSX.Element => {
    const [products, setProducts] = useState<Array<Product>>([]);
/// sets user query for item search
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();

    const handlers = {
        handleProductPress: (id: number): void =>
            navigation.navigate('Detail', { id }),




        addToCart: (product: Product): Action => {
            navigation.navigate('Orders', { screen: routes.Cart });

            return dispatch(actions.addToCart(product));
        },

        removeFromCart: (productId: number): Action =>
            dispatch(actions.removeFromCart(productId)),
        addQuantity: (productId: number): Action =>
            dispatch(actions.addQuantity(productId)),
        subQuantity: (productId: number): Action =>
            dispatch(actions.subQuantity(productId))
    };


    useEffect(() => {



        WooCommerce.get(`/products?search=${searchQuery}&post_type=product&`).then(({ data }) => {
            setProducts(data);
        });
    //    by adding to this array fires this useEffect everytime user inputs a in search bar, invoking state change: const [searchQuery, setSearchQuery] = useState('')
    }, [searchQuery]);



    return (
        <ScrollView>

        <View>
            <SearchBar placeholder={"What are you looking for?"} onChangeText={(value) => setSearchQuery(value)} value={searchQuery}/>

        </View>

        <Search {...handlers} products={products} />
            {console.log(products)}
        </ScrollView>

        );

};


export default SearchContainer;
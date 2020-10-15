import React, { useEffect, useState } from 'react';
import { Action } from 'redux';
import { useDispatch } from 'react-redux';
import { StackNavigationProp} from "@react-navigation/stack";

import SafetyGlasses from './SafetyGlasses.component';
import { NavigationParams, routes } from '../../Navigations';

import WooCommerce from '../../Services/WooCommerce';
import { Product } from '../../Components/ProductItem/ProductItem.component';
import { actions } from '../../Reducers/Cart.reducer';


interface Props {
    navigation: StackNavigationProp<NavigationParams>;
}

const SafetyGlassesContainer = ({ navigation }: Props): JSX.Element => {
    const [products, setProducts] = useState<Array<Product>>([]);
    const dispatch = useDispatch();

    const handlers = {
        handleProductPress: (id: number): void =>
            navigation.navigate('Detail', { id }),


        // this is how categories will work need to incorporate taxonomy



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
        console.log(setProducts)
        console.log(products)
        WooCommerce.get('/products?category=93&').then(({ data }) => {
            setProducts(data);
        });
    }, []);

    return <SafetyGlasses{...handlers} products={products} />;

};

export default SafetyGlassesContainer;

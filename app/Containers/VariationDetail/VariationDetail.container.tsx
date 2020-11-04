import React, { useEffect, useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { Action } from 'redux';

import VariationDetailComponent from './VariationDetail.component';
import { Variation } from '../../Components/VariationItem/VariationItem.component';
import WooCommerce from '../../Services/WooCommerce';
import { NavigationParams, routes } from '../../Navigations';
import { actions } from '../../Reducers/Cart.reducer';
// import {Product} from "../../Components/ProductItem/ProductItem.component";
import DetailComponent from "../Detail/Detail.component";

interface Props {
    navigation: StackNavigationProp<NavigationParams>;
}

const VariationDetailContainer = ({ navigation }: Props): JSX.Element => {
    const initialVariation = {
        id: 1,
        name: '',
        price: 0,
        description: '',
        average_rating: '',
        sku: '',
        images: [],
        variations:[],
        attributes: [{id:0, name:'', position:0, visible:false, variation:false, options:[]}],
    };

    const [variation, setVariation] = useState<Variation>(initialVariation);
    const [imagesShown, showImages] = useState(false);
    const route = useRoute<RouteProp<NavigationParams, 'VariationDetail'>>();
    const dispatch = useDispatch();

    const handlers = {
        handleShowImages: (): void =>
            showImages((prevState: boolean) => !prevState),
        handleVariationPress: (id: number): void =>
            navigation.navigate('VariationDetail', { id }),
        addToCart: (variation: Variation): Action => {
            navigation.navigate('Orders', { screen: routes.Cart });

            return dispatch(actions.addToCart(variation));
        }
    };

    useEffect(() => {
        WooCommerce.get(`/products/${route.params.id}?`).then(({ data }) => {
            setVariation(data);
        });
    }, [route.params.id]);

    return (
        <VariationDetailComponent
            {...handlers}
            imagesShown={imagesShown}
            variation={variation}
        />
    );
};

export default VariationDetailContainer;
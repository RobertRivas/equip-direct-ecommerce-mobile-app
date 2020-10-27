import React, { useEffect, useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { Action } from 'redux';

import DetailComponent from './Detail.component';
import { Product } from '../../Components/ProductItem/ProductItem.component';
import WooCommerce from '../../Services/WooCommerce';
import { NavigationParams, routes } from '../../Navigations';
import { actions } from '../../Reducers/Cart.reducer';

interface Props {
  navigation: StackNavigationProp<NavigationParams>;
}

const DetailContainer = ({ navigation }: Props): JSX.Element => {
  const initialProduct = {
    id: 1,
    name: '',
    price: 0,
    description: '',
    average_rating: '',
    images: [],
    variations:[],
  };
  const [product, setProduct] = useState<Product>(initialProduct);
  const [imagesShown, showImages] = useState(false);

  // detail screen pops up first then api call is made for data.
  const route = useRoute<RouteProp<NavigationParams, 'Detail'>>();
  const dispatch = useDispatch();

  const handlers = {
    handleShowImages: (): void =>
      showImages((prevState: boolean) => !prevState),

    // need
    // handleVariationPress: (): void => navigation.navigate('Detail', { id }),
    addToCart: (product: Product): Action => {
      navigation.navigate('Orders', { screen: routes.Cart });

      return dispatch(actions.addToCart(product));
    }
  };
  // this is api call for product detail data on detail screen.
  useEffect(() => {
    WooCommerce.get(`/products/${route.params.id}?`).then(({ data }) => {
      setProduct(data);
    });
  }, [route.params.id]);

  return (
    <DetailComponent
      {...handlers}
      imagesShown={imagesShown}
      product={product}
    />
  );
};

export default DetailContainer;

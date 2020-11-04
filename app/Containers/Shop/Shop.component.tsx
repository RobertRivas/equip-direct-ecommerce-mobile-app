import React from 'react';
import { FlatList, StyleSheet, Text, TextStyle, ViewStyle, Button } from 'react-native';

// import { createDrawerNavigator } from '@react-navigation/drawer';
//
// const Drawer = createDrawerNavigator();

import ProductItem, {
  Product
} from '../../Components/ProductItem/ProductItem.component';

interface Props {
  products: Array<Product>;
  handleProductPress: (id: number) => void;
  // variations: Array<Variation>;
}



const _renderProduct = (props: Props) => ({
  item
}: {
  item: Product;

}):

    JSX.Element => <ProductItem {...props} product={item} isInCart={false} />;
console.log(ProductItem)
const _renderEmpty = (): JSX.Element => (
  <Text style={styles.textEmpty}>Please wait while products load :) </Text>

);




const Shop = (props: Props): JSX.Element => {
  const { products } = props;

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={products}
      renderItem={_renderProduct(props)}
      keyExtractor={(item): string => `${item.id}`}
      numColumns={2}
      ListEmptyComponent={_renderEmpty()}
    />
  );
};
console.log(Shop)
interface Styles {
  container: ViewStyle;
  textEmpty: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: 'center'
  },
  textEmpty: {
    textAlign: 'center',
    marginTop: 16
  }
});

export default Shop;

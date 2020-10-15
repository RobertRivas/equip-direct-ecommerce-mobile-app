import React from 'react';
import {
    Dimensions,
    StyleSheet,
     Text,
    TouchableOpacity,
     View,
    ViewStyle
} from 'react-native';
import { Button, Card, Icon, Rating } from 'react-native-elements';
import HTML from 'react-native-render-html';

const { width: screenWidth } = Dimensions.get('window');

interface Props {
    category: Category;
    handleCategoryPress: (id: number) => void;
  }

export interface Image {
    src:string;
}

export interface Category {
    id: number;
    name: string;
    images: Array<Image>;
    description: string;

}

interface Props {
    category: Category;
    handleCategoryPress: (id: number) => void;
}


// const noop = () => {};
// const _renderCategoriesDetail = ({
//     category,
//
// }: Props):JSX.Element => (
//     <>
//         <HTML
//             html={category.description}
//             textSelectable
//             renderers = {{
//                 p: (_: never, children: Array<string>): JSX.Element => (
//                     <Text numberOfLines={2}>{children}</Text>
//                 )
//             }}
//         />
//         </>
//
// )

const CategoriesDisplayCategory = (props: Props): JSX.Element => {
    console.log(props)
    const {
      category: {
        id,
        name,
        images: [image],
      },
      handleCategoryPress
    } = props;
    return (
      <TouchableOpacity onPress={(): void => handleCategoryPress(id)}>
        <Card
          title={name}
          // @ts-ignore
          titleNumberOfLines={2}
          image={{uri: image.src}}
          containerStyle={styles.card}>

          </Card>
      </TouchableOpacity>
    )
}

interface Styles {
  card: ViewStyle;
  actionView: ViewStyle;
  // rating: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  card: {
    width: screenWidth / 2 - 20,
    margin: 10
  },
  actionView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5
  }

});

export default CategoriesDisplayCategory;

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

import { toAmount } from '../../Utils';
import {Attributes} from "../ProductItem/ProductItem.component";
// import ProductItem, {Product} from "../ProductItem/ProductItem.component";

const { width: screenWidth } = Dimensions.get('window');

interface Props {

    variation: Variation;
    handleVariationPress: (id: number) => void;
};

export interface VariationImage {
    src: string;
}

export interface Variation {
    id: number;
    name: string;
    price: number;
    images: Array<VariationImage>;
    description: string;
    average_rating: string;
    variations: Array<number>;
    attributes: Array<Attributes>;
    sku: string;
}

export interface CartItem extends Variation {
    quantity: number;
}


interface Props {
    variation: Variation;
    handleVariationPress: (id: number) => void;
    isInCart: boolean;
    addToCart?: (variation: Variation) => void;
    removeFromCart?: (id: number) => void;
    addQuantity?: (id: number) => void;
    subQuantity?: (id: number) => void;
    quantity?: number;
}

const noop = () => {};


const _renderCartDetail = ({
                               variation,
                               quantity = 0,
                               subQuantity = noop,
                               addQuantity = noop,
                               removeFromCart = noop
                           }: Props): JSX.Element => (
    <>
        <View style={styles.actionView}>
            <Icon
                name="minus"
                type="font-awesome-5"
                onPress={(): void => subQuantity(variation.id)}
            />
            <Text>Quantity: {quantity}</Text>
            <Icon
                name="plus"
                type="font-awesome-5"
                onPress={(): void => addQuantity(variation.id)}
            />
        </View>
        <Button title="Remove" onPress={(): void => removeFromCart(variation.id)} />
    </>
);


const _renderBrowseDetail = ({
                                 variation,
                                 addToCart = noop
                             }: Props): JSX.Element => (
    <>
        <HTML
            html={variation.description}
            textSelectable
            renderers={{
                p: (_: never, children: Array<string>): JSX.Element => (
                    <Text numberOfLines={2}>{children}</Text>
                )
            }}
        />
        <View style={styles.actionView}>
            <Rating
                readonly
                imageSize={14}
                startingValue={Number(variation.average_rating)}
                // @ts-ignore
                style={styles.rating}
            />
            {/*<Button*/}
            {/*  icon={{*/}
            {/*    name: 'cart-plus',*/}
            {/*    type: 'font-awesome-5',*/}
            {/*    color: 'white',*/}
            {/*    size: 16*/}
            {/*  }}*/}
            {/*  onPress={(): void => addToCart(product)}*/}
            {/*/>*/}
        </View>
    </>
);

const VariationItem = (props: Props): JSX.Element => {
    console.log(props)

    const {
        variation: {
            id,
            name,
            images: [image],
            price
        },
        handleVariationPress,
        isInCart = false
    } = props;
    console.log(price)
    return (
        <TouchableOpacity onPress={(): void => handleVariationPress(id)}>
            {/* need to update this card prop to newer syntax */}

            <Card
                title={name}
                // @ts-ignore
                titleNumberOfLines={2}
                image={{ uri: image.src }}
                containerStyle={styles.card}>
                <Text>{toAmount(price)}</Text>
                {isInCart ? _renderCartDetail(props) : _renderBrowseDetail(props)}
            </Card>
        </TouchableOpacity>
    );
};

interface Styles {
    card: ViewStyle;
    actionView: ViewStyle;
    rating: ViewStyle;
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
    },
    rating: {
        paddingVertical: 5
    }
});

export default VariationItem;




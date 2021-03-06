import React, { PureComponent } from 'react';
import {
    Dimensions,
    ImageStyle,
    Modal,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle
} from 'react-native';

import {Picker} from '@react-native-community/picker';
import ImageViewer from 'react-native-image-zoom-viewer';
import Carousel, {
    CarouselStatic,
    ParallaxImage,
    ParallaxImageProps
} from 'react-native-snap-carousel';
import HTML from 'react-native-render-html';
import { Rating, Button } from 'react-native-elements';

import {
    VariationImage,
    Variation
} from '../../Components/VariationItem/VariationItem.component';
import { toAmount } from '../../Utils';


const { width: screenWidth } = Dimensions.get('window');

interface Props {
    variation: Variation;
    handleShowVariationImages: () => void;
    imagesShown: boolean;
    addToCart?: (variation: Variation) => void;

}

class VariationDetailComponent extends PureComponent<Props> {
    private carousel: CarouselStatic<object> | null;

    constructor(props: Props) {
        super(props);
        this.carousel = null;
    }

    _setCarousel = (carousel: null): void => {
        this.carousel = carousel;
    };

    _mapImages = (images: Array<VariationImage>) =>
        images.map((image: VariationImage) => ({ url: image.src }));

    _renderImageItem = (handleShowVariationImages: () => void) => (
        { item }: { item: { url: string } },
        parallaxProps: ParallaxImageProps
    ): JSX.Element => (
        <TouchableOpacity style={styles.item} onPress={handleShowVariationImages}>
            <ParallaxImage
                {...parallaxProps}
                source={{ uri: item.url }}
                containerStyle={styles.imageContainer}
                style={styles.image}
            />
        </TouchableOpacity>
    );

    _renderImages = (
        images: Array<VariationImage>,
        handleShowVariationImages: () => void
    ): JSX.Element => (
        <ImageViewer
            imageUrls={this._mapImages(images)}
            enableSwipeDown
            onSwipeDown={handleShowVariationImages}
            index={this.carousel?.currentIndex}
        />
    );

    render(): JSX.Element {
        const {
            variation,
            imagesShown,
            handleShowVariationImages,
            addToCart = () => {}
        } = this.props;
        const {
            name,
            images,
            description,
            price,
            average_rating: rating
        } = variation;

        return (
            <ScrollView style={styles.wrapper}>
                <Carousel
                    ref={this._setCarousel}
                    sliderWidth={screenWidth}
                    sliderHeight={screenWidth}
                    itemWidth={screenWidth - 60}
                    data={this._mapImages(images)}
                    renderItem={this._renderImageItem(handleShowVariationImages)}
                    hasParallaxImages
                />
                <View style={styles.detail}>
                    <Text style={styles.textTitle}>{name}</Text>
                    <Text style={styles.textPrice}>{toAmount(price)}</Text>

                    <HTML html={description} textSelectable />
                    <View style={styles.rating}>
                        <Text style={styles.textSubHeading}>Rating:</Text>
                        <Text style={styles.textRating}>{rating}</Text>
                        <Rating readonly imageSize={20} startingValue={Number(rating)} />
                    </View>
                    <Button
                        icon={{
                            name: 'cart-plus',
                            type: 'font-awesome-5',
                            color: 'white',
                            size: 16
                        }}
                        title="Add to cart"
                        onPress={(): void => addToCart(variation)}
                    />
                </View>
                <Modal visible={imagesShown} transparent>
                    {this._renderImages(images, handleShowVariationImages)}
                </Modal>
            </ScrollView>
        );
    }
}

interface Styles {
    wrapper: ViewStyle;
    detail: ViewStyle;
    textTitle: ViewStyle;
    rating: ViewStyle;
    textPrice: ViewStyle;
    textSubHeading: ViewStyle;
    textRating: ViewStyle;
    item: ViewStyle;
    imageContainer: ViewStyle;
    image: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
    wrapper: {
        paddingTop: 5
    },
    detail: {
        marginTop: 10,
        marginHorizontal: 5
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    rating: { flexDirection: 'row', alignItems: 'center' },
    textPrice: { fontSize: 18, fontWeight: 'bold', color: '#006db3' },
    textSubHeading: { fontSize: 18, fontWeight: 'bold', margin: 5 },
    textRating: { fontSize: 18, margin: 5 },
    item: {
        width: screenWidth - 60,
        height: screenWidth - 60
    },
    imageContainer: {
        height: screenWidth - 60,
        marginBottom: Platform.select({ ios: 0, android: 1 }),
        backgroundColor: 'white',
        borderRadius: 5
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover'
    }
});

export default VariationDetailComponent;
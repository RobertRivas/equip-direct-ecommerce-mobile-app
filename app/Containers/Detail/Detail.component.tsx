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

import ProductItem, {
  Image,
  Product,
    Attributes
} from '../../Components/ProductItem/ProductItem.component';

import VariationItem, {VariationImage, Variation} from "../../Components/VariationItem/VariationItem.component";
import { toAmount } from '../../Utils';

const { width: screenWidth } = Dimensions.get('window');

interface Props {
  product: Product;
  // variation: Variation;
  handleShowImages: () => void;
  imagesShown: boolean;
  addToCart?: (product: Product) => void;
  handleProductPress: (id: number) => void;
  handleVariationPress: (id: number) => void;

}



class DetailComponent extends PureComponent<Props> {
  private carousel: CarouselStatic<object> | null;

  constructor(props: Props) {
    super(props);
    this.carousel = null;
  }

  _setCarousel = (carousel: null): void => {
    this.carousel = carousel;
  };

  _mapImages = (images: Array<Image>) =>
      images.map((image: Image) => ({ url: image.src }));

  _renderImageItem = (handleShowImages: () => void) => (
      { item }: { item: { url: string } },
      parallaxProps: ParallaxImageProps
  ): JSX.Element => (
      <TouchableOpacity style={styles.item} onPress={handleShowImages}>
        <ParallaxImage
            {...parallaxProps}
            source={{ uri: item.url }}
            containerStyle={styles.imageContainer}
            style={styles.image}
        />
      </TouchableOpacity>
  );

  _renderImages = (
      images: Array<Image>,
      handleShowImages: () => void
  ): JSX.Element => (
      <ImageViewer
          imageUrls={this._mapImages(images)}
          enableSwipeDown
          onSwipeDown={handleShowImages}
          index={this.carousel?.currentIndex}
      />
  );

  render(): JSX.Element {
    const {
      product,
      imagesShown,
      handleProductPress,
      handleShowImages,
      handleVariationPress,



      addToCart = () => {}
    } = this.props;

    // list of variations instantiated here
    const {
      name,
      images,
      description,
      price,
      average_rating: rating,
        variations,
        attributes,
        sku
    } = product;
      if(product.variations.length != 0) {
        return (
            <ScrollView style={styles.wrapper}>
              <Carousel
                  ref={this._setCarousel}
                  sliderWidth={screenWidth}
                  sliderHeight={screenWidth}
                  itemWidth={screenWidth - 60}
                  data={this._mapImages(images)}
                  renderItem={this._renderImageItem(handleShowImages)}
                  hasParallaxImages
              />
              <View style={styles.detail}>
                <Text style={styles.textTitle}>{name}</Text>
                <Text style={styles.textPrice}>{toAmount(price)}</Text>
                <Text style={styles.textSku}>{sku}</Text>

                {/*need to  call handle product press to navigate to detail of variation the variation json object is same as product json object. */}

                <Picker style={{width: 250}} mode={"dropdown"}
                        onValueChange={(itemValue): void => handleVariationPress(parseFloat(itemValue.toString()))}>

                  {/*  <Picker style={{width:250}} mode={"dropdown"} onValueChange={(itemValue,itemIndex): void => handleProductPress(parseInt(itemValue.toString()))}>*/}

                  {console.log(product.attributes[0].name)}
                  {/*<Picker style={{width:250}} mode={"dropdown"} selectedValue={(): void => handleProductPress("103211")}>*/}
                  <Picker.Item color={"blue"} label={attributes[0].name.toString()} value={""}/>


                  {
                    product.variations.map((item, index) => {


                          return (

                              <Picker.Item label={attributes[0].options[index].toString()} value={item} key={index}/>

                          )
                        }
                    )
                  }

                </Picker>
                <HTML html={description} textSelectable/>
                <View style={styles.rating}>
                  <Text style={styles.textSubHeading}>Rating:</Text>
                  <Text style={styles.textRating}>{rating}</Text>
                  <Rating readonly imageSize={20} startingValue={Number(rating)}/>
                </View>
              </View>
              <Modal visible={imagesShown} transparent>
                {this._renderImages(images, handleShowImages)}
              </Modal>
            </ScrollView>
        );
      } else {
        return (
            <ScrollView style={styles.wrapper}>
              <Carousel
                  ref={this._setCarousel}
                  sliderWidth={screenWidth}
                  sliderHeight={screenWidth}
                  itemWidth={screenWidth - 60}
                  data={this._mapImages(images)}
                  renderItem={this._renderImageItem(handleShowImages)}
                  hasParallaxImages
              />
              <View style={styles.detail}>
                <Text style={styles.textTitle}>{name}</Text>
                <Text style={styles.textPrice}>{toAmount(price)}</Text>
                <Text style={styles.textSku}>{sku}</Text>
                <HTML html={description} textSelectable/>
                <View style={styles.rating}>
                  <Text style={styles.textSubHeading}>Rating:</Text>
                  <Text style={styles.textRating}>{rating}</Text>
                  <Rating readonly imageSize={20} startingValue={Number(rating)}/>
                </View>
                <Button
                    icon={{
                      name: 'cart-plus',
                      type: 'font-awesome-5',
                      color: 'white',
                      size: 16
                    }}
                    title="Add to cart"
                    onPress={(): void => addToCart(product)}
                />
              </View>
              <Modal visible={imagesShown} transparent>
                {this._renderImages(images, handleShowImages)}
              </Modal>
            </ScrollView>
        );
      }
  }
}

interface Styles {
  wrapper: ViewStyle;
  detail: ViewStyle;
  textTitle: ViewStyle;
  rating: ViewStyle;
  textPrice: ViewStyle;
  textSku: ViewStyle;
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
  textSku: { fontSize: 24, fontWeight: 'bold', color: '#000000' },
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

export default DetailComponent;

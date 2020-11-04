import React from 'react';
import { Icon, Button } from 'react-native-elements';
import {createStackNavigator, StackNavigationProp, HeaderBackButton } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { View, Text} from 'react-native';

import { NavigationContainer, DrawerActions } from '@react-navigation/native';

import {

    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';



import ShopContainer from '../Containers/Shop/Shop.container';
// import CategoriesContainer from '../Containers/categoryDisplay/Categories.container';
import LibertyGlovesContainer from '../Containers/LibertyGloves/LibertyGloves.container';
import SafetyGlassesContainer from '../Containers/SafetyGlasses/SafetyGlasses.container';
import SafetyVestsContainer from "../Containers/SafetyVests/SafetyVests.container";
import FallProtectionContainer from "../Containers/FallProtection/FallProtection.container";
import HearingProtectionContainer from "../Containers/HearingProtection/HearingProtection.container";
import HardHatsContainer from '../Containers/HardHats/HardHats.container';
import CartContainer from '../Containers/Cart/Cart.container';
import DetailContainer from '../Containers/Detail/Detail.container';
import VariationDetailContainer from "../Containers/VariationDetail/VariationDetail.container";
import CheckoutContainer from '../Containers/Checkout/Checkout.container';

import {Picker} from '@react-native-community/picker';

interface Props {
    navigation: StackNavigationProp<NavigationParams>;
}

export const routes = {
  Browse: 'Browse',
  Shop: 'Shop',
  // Categories: 'Categories',
    LibertyGloves: 'Liberty Gloves',
    SafetyGlasses: 'Safety Glasses',
    SafetyVests: 'Safety Vests',
    FallProtection: 'Fall Protection',
    HearingProtection: 'Hearing Protection',
    HardHats: 'Hard Hats',
  Detail: 'Detail',
    VariationDetail: 'VariationDetail',
  Orders: 'Orders',
  Cart: 'Cart',
  Checkout: 'Checkout'
};

export type NavigationParams = {
  Browse: undefined;
  Shop: undefined;
  Categories: undefined;
  LibertyGloves: undefined;
  SafetyGlasses: undefined;
  SafetyVests: undefined;
  FallProtection: undefined;
  HearingProtection: undefined;
  HardHats: undefined;
  Detail: {
    id: number;
  };
  VariationDetail:{
    id: number;
  };
  Orders: {
    screen: string;
  };
  Cart: undefined;
  Checkout: undefined;


};





const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


{/*need to make an icon to open drawer*/}
const Browse = ({ navigation }:Props): JSX.Element => (
  <Stack.Navigator initialRouteName={routes.Shop}>
    <Stack.Screen name={routes.Shop} component={ShopContainer} options={{

        headerLeft: () => (
            <Button title={""}
                    type={"clear"}
                onPress={ () => navigation.dispatch(DrawerActions.openDrawer())}
                icon={
                    <Icon name={'bars'}
                    size={35}
                          type="font-awesome-5"
                          color={"black"}
                    />

                }





            />
        ),
    }} />
    <Stack.Screen name={routes.Detail} component={DetailContainer}/>
      <Stack.Screen name={routes.VariationDetail} component={VariationDetailContainer} />

  </Stack.Navigator>
);

// const Detail =({ navigation }:Props): JSX.Element => (
//     <Stack.Navigator initialRouteName={routes.Detail} >
//         <Stack.Screen name={routes.Detail} component={DetailContainer}/>
//         <Stack.Screen name={routes.VariationDetail} component={VariationDetailContainer}/>
//
//         </Stack.Navigator>
// );
//
// const VariationDetail =({ navigation }:Props): JSX.Element => (
//     <Stack.Navigator initialRouteName={routes.Detail} >
//         {/*<Stack.Screen name={routes.Detail} component={DetailContainer}/>*/}
//         <Stack.Screen name={routes.VariationDetail} component={VariationDetailContainer}
//                       options={{headerLeft:()=>(<HeaderBackButton onPress={()=>navigation.goBack()}/>)}}/>
//
//     </Stack.Navigator>
// );


const LibertyGloves = ({ navigation }:Props): JSX.Element => (
  <Stack.Navigator initialRouteName={routes.LibertyGloves}>
      {/*<Stack.Screen name={routes.Categories} component={CategoriesContainer} />*/}
      <Stack.Screen name={routes.LibertyGloves} component={LibertyGlovesContainer}
                    options={{

                        headerLeft: () => (
                            <Button title={""}
                                    type={"clear"}
                                    onPress={ () => navigation.dispatch(DrawerActions.openDrawer())}
                                    icon={
                                        <Icon name={'bars'}
                                              size={35}
                                              type="font-awesome-5"
                                              color={"black"}
                                        />

                                    }





                            />
                        ),
                    }}
      />
      <Stack.Screen name={routes.Detail} component={DetailContainer} />
      <Stack.Screen name={routes.VariationDetail} component={VariationDetailContainer} />
  </Stack.Navigator>
);

const SafetyGlasses = ({ navigation }:Props): JSX.Element => (
    <Stack.Navigator initialRouteName={routes.SafetyGlasses}>
        <Stack.Screen name={routes.SafetyGlasses} component={SafetyGlassesContainer}
                      options={{

                          headerLeft: () => (
                              <Button title={""}
                                      type={"clear"}
                                      onPress={ () => navigation.dispatch(DrawerActions.openDrawer())}
                                      icon={
                                          <Icon name={'bars'}
                                                size={35}
                                                type="font-awesome-5"
                                                color={"black"}
                                          />

                                      }





                              />
                          ),
                      }}
        />
        <Stack.Screen name={routes.Detail} component={DetailContainer} />
        <Stack.Screen name={routes.VariationDetail} component={VariationDetailContainer} />

    </Stack.Navigator>
);

const SafetyVests = ({ navigation }:Props): JSX.Element => (
    <Stack.Navigator initialRouteName={routes.SafetyVests}>
        <Stack.Screen name={routes.SafetyVests} component={SafetyVestsContainer}
                      options={{

                          headerLeft: () => (
                              <Button title={""}
                                      type={"clear"}
                                      onPress={ () => navigation.dispatch(DrawerActions.openDrawer())}
                                      icon={
                                          <Icon name={'bars'}
                                                size={35}
                                                type="font-awesome-5"
                                                color={"black"}
                                          />

                                      }





                              />
                          ),
                      }}
        />
        <Stack.Screen name={routes.Detail} component={DetailContainer} />
        <Stack.Screen name={routes.VariationDetail} component={VariationDetailContainer} />

    </Stack.Navigator>
);

const FallProtection = ({ navigation }:Props): JSX.Element => (
  <Stack.Navigator initialRouteName={routes.FallProtection} >
      <Stack.Screen name={routes.FallProtection} component={FallProtectionContainer}

                    options={{

                        headerLeft: () => (
                            <Button title={""}
                                    type={"clear"}
                                    onPress={ () => navigation.dispatch(DrawerActions.openDrawer())}
                                    icon={
                                        <Icon name={'bars'}
                                              size={35}
                                              type="font-awesome-5"
                                              color={"black"}
                                        />

                                    }





                            />
                        ),
                    }} />
      <Stack.Screen name={routes.Detail} component={DetailContainer} />
      <Stack.Screen name={routes.VariationDetail} component={VariationDetailContainer} />

  </Stack.Navigator>
);

const HearingProtection = ({ navigation }:Props): JSX.Element => (
  <Stack.Navigator initialRouteName={routes.HearingProtection} >
      <Stack.Screen name={routes.HearingProtection} component={HearingProtectionContainer}
                    options={{

                        headerLeft: () => (
                            <Button title={""}
                                    type={"clear"}
                                    onPress={ () => navigation.dispatch(DrawerActions.openDrawer())}
                                    icon={
                                        <Icon name={'bars'}
                                              size={35}
                                              type="font-awesome-5"
                                              color={"black"}
                                        />

                                    }





                            />
                        ),
                    }}
      />
      <Stack.Screen name={routes.Detail} component={DetailContainer} />
      <Stack.Screen name={routes.VariationDetail} component={VariationDetailContainer} />
  </Stack.Navigator>
);

const HardHats = ({ navigation }:Props): JSX.Element => (
  <Stack.Navigator initialRouteName={routes.HardHats}  >
      <Stack.Screen name={routes.HardHats} component={HardHatsContainer}
                    options={{

                        headerLeft: () => (
                            <Button title={""}
                                    type={"clear"}
                                    onPress={ () => navigation.dispatch(DrawerActions.openDrawer())}
                                    icon={
                                        <Icon name={'bars'}
                                              size={35}
                                              type="font-awesome-5"
                                              color={"black"}
                                        />

                                    }





                            />
                        ),
                    }}
      />
      <Stack.Screen name={routes.Detail} component={DetailContainer} />
      <Stack.Screen name={routes.VariationDetail} component={VariationDetailContainer} />

  </Stack.Navigator>
);

const Orders = ({ navigation }:Props): JSX.Element => (
  <Stack.Navigator initialRouteName={routes.Cart}>
    <Stack.Screen name={routes.Cart} component={CartContainer}
                  options={{

                      headerLeft: () => (
                          <Button title={""}
                                  type={"clear"}
                                  onPress={ () => navigation.dispatch(DrawerActions.openDrawer())}
                                  icon={
                                      <Icon name={'bars'}
                                            size={35}
                                            type="font-awesome-5"
                                            color={"black"}
                                      />

                                  }





                          />
                      ),
                  }}
    />
    <Stack.Screen name={routes.Checkout} component={CheckoutContainer} />
  </Stack.Navigator>
);

const tabIcons = {
  // [routes.Browse]: 'shopping-bag',
  [routes.Orders]: 'shopping-cart',
  [routes.Browse]: 'bars'
};

const Navigation = (): JSX.Element => (
    // <Drawer.Navigator initialRouteName="Shop">
    <Drawer.Navigator  >
        <Drawer.Screen name={routes.Browse} component={Browse}  />
        <Drawer.Screen name={routes.Orders} component={Orders} />

        {/*i want to use taxonomy to display categories later on down the road*/}
        {/*<Drawer.Screen name={routes.Categories} component={Categories} />*/}
        <Drawer.Screen name={routes.LibertyGloves} component={LibertyGloves} />
        <Drawer.Screen name={routes.SafetyGlasses} component={SafetyGlasses} />
        <Drawer.Screen name={routes.SafetyVests} component={SafetyVests} />
        <Drawer.Screen name={routes.FallProtection} component={FallProtection} />
        <Drawer.Screen name={routes.HearingProtection} component={HearingProtection} />
        <Drawer.Screen name={routes.HardHats} component={HardHats} />
    </Drawer.Navigator>);

//   <Tab.Navigator
//     screenOptions={({ route }): object => ({
//       tabBarIcon: ({
//         color,
//         size
//       }: {
//         color: string;
//         size: number;
//       }): JSX.Element => (
//         <Icon
//           name={tabIcons[route.name]}
//           type="font-awesome-5"
//           size={size}
//           color={color}
//         />
//       )
//     })}>
//     <Tab.Screen name={routes.Browse} component={Browse} />
//     <Tab.Screen name={routes.Orders} component={Orders} />
//     <Tab.Screen name={routes.Categories} component={Categories} />
//       <Tab.Screen name={routes.LibertyGloves} component={LibertyGloves} />
//   </Tab.Navigator>
// );

export default Navigation;

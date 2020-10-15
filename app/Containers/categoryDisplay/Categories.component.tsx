import React from 'react';
import { FlatList, StyleSheet, Text, TextStyle, ViewStyle, Button, View } from 'react-native';
import { NavigationParams, routes } from '../../Navigations';
import { NavigationContainer } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import LibertyGloves from "../LibertyGloves/LibertyGloves.component";
import { Icon } from 'react-native-elements';

// interface Props {
//     navigation: StackNavigationProp<NavigationParams>;
// }
//
// function Categories({ navigation }: Props){
//     return(
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Button
//                 title="Liberty Gloves"
//                 onPress={() => navigation.navigate('LibertyGloves')}
//             />
//         </View>
//
//     )
// }

const Stack = createStackNavigator();


const Navigation = (): JSX.Element => (
    <Stack.Navigator screenOptions={({route}): object => ({
        
    })}>
        <Stack.Screen name={routes.LibertyGloves} component={LibertyGloves} />
    </Stack.Navigator>

);




    export default Navigation;

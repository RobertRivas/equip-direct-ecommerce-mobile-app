import React from 'react';


import { StackNavigationProp } from '@react-navigation/stack';

import Contact from "./Contact.component";
import { NavigationParams } from '../../Navigations';


interface Props {
    navigation: StackNavigationProp<NavigationParams>;
}

const ContactContainer = ({ navigation }: Props): JSX.Element => {


    return(
        <Contact />
    );
};

export default ContactContainer;
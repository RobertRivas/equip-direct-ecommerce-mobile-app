import React, { useEffect, useState } from 'react';


import { StackNavigationProp } from '@react-navigation/stack';

import About from "./About.component";
import { NavigationParams } from '../../Navigations';


interface Props {
    navigation: StackNavigationProp<NavigationParams>;
}

const AboutContainer = ({ navigation }: Props): JSX.Element => {


    return(
        <About />
    );
};

export default AboutContainer;
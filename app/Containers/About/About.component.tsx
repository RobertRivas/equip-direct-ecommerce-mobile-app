import React from 'react';

import {StyleSheet, Text, TextStyle, ViewStyle, ScrollView, View} from 'react-native';

const About = (): JSX.Element => {


    return (
        <ScrollView>
        <View>

        <Text style={styles.textEmpty}>Where Safety Comes First – Products plus Knowledge</Text>

            <Text style={styles.textEmpty}>We offer you a single source for all of your safety equipment needs. Our comprehensive line of products include those items you will need to keep your employees safe and your facility in compliance. Being your complete source means more than just offering you a full line of safety equipment – it also means we will provide you with knowledge and “know-how” to select the right product for the right application at the right price. It is our goal to be your complete source for safety equipment.</Text>

            <Text style={styles.textEmpty}>Distributor of safety, ergonomic products, first aid supplies & fall protection equipment for compliance with OSHA laws. Supplier of safety glasses, back support belts, protective gloves, knee supports, hard hats, rainsuits, boots, dust masks, respirators & eyewash stations. Also first aid supplies consisting of various bandages, applicators, & medicines such as aspirin. Fall protection equipment includes a complete personal fall arrest system.</Text>

            <Text style={styles.textEmpty}>Safety Glasses</Text>
            <Text style={styles.textEmpty}>Back Support Belts</Text>
            <Text style={styles.textEmpty}>Gloves</Text>
            <Text style={styles.textEmpty}>Hard Hats</Text>
            <Text style={styles.textEmpty}>Rainsuits, Boots, Protective Clothing</Text>
            <Text style={styles.textEmpty}>Eyewash Station</Text>
            <Text style={styles.textEmpty}>Dusk Mask/Respirators</Text>
            <Text style={styles.textEmpty}>Hearing Protection</Text>
            <Text style={styles.textEmpty}>Fall Protection</Text>
            <Text style={styles.textEmpty}>First Aid, Medical Products, Bloodborne Pathogens,</Text>
            <Text style={styles.textEmpty}>Emergency Preparedness Supplies,</Text>
            <Text style={styles.textEmpty}>Misc. Medical Equipment & Suplies</Text>
        </View>
        </ScrollView>

    );

}

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
        marginTop: 16,
        fontSize: 18,
        marginLeft: 16,
        marginRight: 16
    }
});

export default About
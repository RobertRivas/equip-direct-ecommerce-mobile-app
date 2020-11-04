import React from "react";

import {StyleSheet, Text, TextStyle, ViewStyle, ScrollView, View} from 'react-native';

const Contact = (): JSX.Element => {


    return (
        <ScrollView>
    <View style={styles.container}>
        <Text style={styles.textEmpty}> Call with any questions on our safety and medical products. </Text>

        <Text style={styles.textEmpty}>Don’t see it on our website, we can find it for you! Contact us today! </Text>

        <Text style={styles.textEmpty}>Toll Free: 1800-424-4410</Text>

        <Text style={styles.textEmpty}>Fax: 1800-842-2412</Text>
        <Text style={styles.textEmpty}>E-mail: orders@equipdirect.com</Text>

        <Text style={styles.textEmpty}>Address: 2861 Saturn Street Unit D, Brea, CA 92821</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>

        <Text style={styles.textEmpty}>Indio Location – Phone: 1-760-902-0407 Fax: 1-800-842-2412 Email: chuckkrk@yahoo.com</Text>
        <Text style={styles.textEmpty}>Address: 42925 Madison St, Indio, CA. 92201</Text>

    </View>
        </ScrollView>

    );

};

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
        fontSize: 24,
        marginLeft: 16,
        marginRight: 16

    }
});

export default Contact
import React from "react";

import {View, Text, Button} from 'react-native'

export default function About(props){

    const{navigation} = props;
    return(
        <View>
            <Text>Estamos en about</Text>

            <Button title="Ir a Home" onPress={() => navigation.navigate('home')}/>
            <Button title="Ir a contact" onPress={() => navigation.navigate('contact')}/>
        </View>
    )
}
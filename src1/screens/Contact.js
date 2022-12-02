import React from "react";

import {View, Text, Button} from 'react-native'

export default function Contact(props){

    const {navigation} = props;
    return(
        <View>
            <Text>Estamos en contact</Text>


            <Button title="Ir a Home" onPress={() => navigation.navigate('home')}/>
            <Button title="Ir a About" onPress={() => navigation.navigate('about')}/>
        </View>
    )
}
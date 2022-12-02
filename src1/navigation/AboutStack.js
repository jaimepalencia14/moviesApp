import React from 'react'
import {createNativeStackNavigator} from'@react-navigation/native-stack'
import About from '../screens/About'
const Stack = createNativeStackNavigator();



export default function AboutStack(){
        return(
            <Stack.Navigator >
                <Stack.Screen name='about' component={About} options={{title: 'About'}} />
               

            </Stack.Navigator>
        )
}
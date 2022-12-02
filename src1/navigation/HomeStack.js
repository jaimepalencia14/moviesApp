import React from 'react'
import {createNativeStackNavigator} from'@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
import Home from '../screens/Home';


export default function HomeStack(){
        return(
            <Stack.Navigator >
                <Stack.Screen name='home' component={Home} options={{title: 'Home'}} />
               

            </Stack.Navigator>
        )
}
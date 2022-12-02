import React from 'react'
import {createNativeStackNavigator} from'@react-navigation/native-stack'
import Contact from '../screens/Contact'

const Stack = createNativeStackNavigator();



export default function ContactStack(){
        return(
            <Stack.Navigator >
                <Stack.Screen name='contact' component={Contact} options={{title: 'Contact'}} />
               
                <Stack.Screen name='courses' component={Courses} options={{title: 'Cursos'}} />
            </Stack.Navigator>
        )
}
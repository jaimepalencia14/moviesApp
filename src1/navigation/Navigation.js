import React from "react";

import {createDrawerNavigator} from '@react-navigation/drawer'

import Home from "../screens/Home";
import Contact from "../screens/Contact";
const Drawer = createDrawerNavigator();
export default function Navigation() {
    return(
        <Drawer.Navigator>
            
            <Drawer.Screen name="home" component={Home} options={{title: 'home'}} />
            <Drawer.Screen name="contact" component={Contact} options={{title: 'Contact'}} />
        </Drawer.Navigator>
    )
}

   /* return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="home" component={HomeStack} options={{ title: 'Home' }} />
            <Tab.Screen name="contact"  component={ContactStack} options={{ title: 'Contact' }} />
            <Tab.Screen name="about"  component={AboutStack} options={{ title: 'About' }} />

        </Tab.Navigator>
    )*/






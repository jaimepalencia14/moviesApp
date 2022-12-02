import React from "react";


import ContactStack from "./ContactStack";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="home" component={HomeStack} options={{ title: 'Home' }} />
            <Tab.Screen name="contact"  component={ContactStack} options={{ title: 'Contact' }} />
            <Tab.Screen name="about"  component={AboutStack} options={{ title: 'About' }} />

        </Tab.Navigator>
    )

}





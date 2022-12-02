import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { IconButton } from 'react-native-paper'

import Home from "../screens/Home";
import Movie from "../screens/Movie";
import Popular from "../screens/Popular";
import News from "../screens/News";
import Search from "../screens/Search";
import { StyleSheet } from 'react-native'

const Stack = createNativeStackNavigator();

export default function StackNavigation(props) {

    const { navigation } = props;

    const buttonLeft = (screen) => {

        switch (screen) {
            case "search":
                return (
                    <IconButton icon='arrow-left' style={{marginLeft: -10, paddingBottom: 10}} onPress={() => navigation.goBack()} />
                )
            case "movie": 
                return (
                    <IconButton icon='arrow-left'  onPress={() => navigation.goBack()} />
                )
            default:
                return (
                    <IconButton icon='menu' style={{marginLeft: -8.56}} onPress={() => navigation.openDrawer()} />
                );
        }


    }


    const buttonRight = () => {
        return (
            <IconButton icon='magnify' onPress={() => navigation.navigate('search')} />
        )
    }
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{ title: 'App Movies', headerLeft: () => buttonLeft("home"), headerRight: () => buttonRight() }} />
            <Stack.Screen name="movie" component={Movie} options={{ headerTransparent: true ,title: '', headerLeft: () => buttonLeft("movie"), headerRight: () => buttonRight() }} />
            <Stack.Screen name="news" component={News} options={{ title: 'Nuevas Peliculas', headerLeft: () => buttonLeft("news"), headerRight: () => buttonRight() }} />
            <Stack.Screen name="popular" component={Popular} options={{ title: 'Peliculas Populares', headerLeft: () => buttonLeft("popular"), headerRight: () => buttonRight() }} />
            <Stack.Screen name="search" component={Search} options={{ title: ' ', headerLeft: () => buttonLeft("search"), headerTransparent: true }} />
        </Stack.Navigator>
    )
}


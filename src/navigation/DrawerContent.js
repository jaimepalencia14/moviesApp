import { StyleSheet, View } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { Drawer, Switch, TouchableRipple, Text } from 'react-native-paper'
import React, { useState } from 'react'
import usePreferences from '../hooks/usePreferences'

export default function DrawerContent(props) {

    const { navigation } = props
    const [active, setActive] = useState("home")
    const {theme, toggleTheme} = usePreferences();

    

    const onChangeScreen = (screen) => {

        setActive(screen);
        navigation.navigate(screen);
        
    }
    return (
        <DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item  label='Inicio' active={active === "home"} onPress={() => onChangeScreen('home')} />
                <Drawer.Item  label='Peliculas Populares' active={active === "popular"} onPress={() => onChangeScreen('popular')} />
                <Drawer.Item  label='Nuevas Peliculas' active={active === "news"} onPress={() => onChangeScreen('news')} />
            </Drawer.Section>
            
            <Drawer.Section title='Opciones'>
                <TouchableRipple>
                    <View style={styles.preference}>
                        <Text>Tema oscuro</Text>
                        <Switch  value={theme === "dark"} onValueChange={toggleTheme} />
                    </View>
                </TouchableRipple>
            </Drawer.Section>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
        backgroundColor: 'lightblue',
        
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    
})
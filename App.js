import React, {useState,useMemo} from 'react';
import { StatusBar, LogBox } from 'react-native'
import { Provider as PaperProvider, DarkTheme as DarkThemePaper, DefaultTheme as DefaultThemePaper } from 'react-native-paper'
import { NavigationContainer, DarkTheme as DarkThemeNavigation, DefaultTheme as DefaultThemeNavigation } from '@react-navigation/native'
import Navigation from './src/navigation/Navigation';
import PreferencesContext from './src/context/PreferencesContext';


LogBox.ignoreLogs(['ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from deprecated-react-native-prop-types']);

export default function App() {

  const [theme, setTheme] = useState("dark")

  DefaultThemePaper.colors.primary = '#1ae1f2'
  DarkThemePaper.colors.primary = '#1ae1f2'
  DarkThemePaper.colors.accent = '#1ae1f2'

  DarkThemeNavigation.colors.background = '#192734'
  DarkThemeNavigation.colors.card = '#15212b'

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark") 
  }
  const preferences = useMemo(
    () => ({
      toggleTheme,
      theme
    }),
    [theme],
  )
    
  
  return (

    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme === "dark" ? DarkThemePaper : DefaultThemePaper}>
        <StatusBar barStyle={theme === "dark" ? "light-content" : "default"} />
        <NavigationContainer theme={theme === "dark" ? DarkThemeNavigation : DefaultThemeNavigation}>
          
          <Navigation />
        </NavigationContainer>


      </PaperProvider>
    </PreferencesContext.Provider>


  )
}




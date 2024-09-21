import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import MealScreen from './screens/MealScreen';
import ShoppingScreen from './screens/ShoppingScreen';
import ProfileScreen from './screens/ProfileScreen';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';


// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      
      try {
        // Pre-load fonts
        await Font.loadAsync({
          'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
          'Ubuntu-Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync(); // Hide the splash screen when app is ready
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null; // Render nothing while the app is not ready
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Tab.Navigator
   
          screenOptions={({ route }) => ({
            tabBarStyle: {
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 10,
              paddingBottom: 10,
            },
            headerShown: false,
            tabBarLabelPosition: 'beside-icon',
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'grey',
            tabBarIcon: ({ size, focused, color }) => {
              
              let icon;
              // Change icons based on the route and focus state
              if (route.name === 'Home') {
                icon = focused 
                  ? require('./assets/home.png') // Focused icon
                  : require('./assets/home-inactive.png'); // Unfocused icon
              } else if (route.name === 'Shopping') {
                icon = require('./assets/shopping.png'); // Same for both states
              } else if (route.name === 'Meal') {
                icon = focused 
                  ? require('./assets/mealactive.png') // Focused icon
                  : require('./assets/meal.png'); // Unfocused icon
              } else if (route.name === 'Profile') {
                icon = require('./assets/profile.png'); // Same for both states
              }

              return <Image style={{ width: size, height: size }} source={icon} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Meal" component={MealScreen} />
          <Tab.Screen name="Shopping" component={ShoppingScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

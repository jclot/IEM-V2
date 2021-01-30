import React from 'react';
import {
    Text,
    View,
    TextInput,
    Platform,
    Modal,
    TouchableHighlight,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home.js';
import FB from '../screens/FB.js'
import Calendars from '../screens/Calendar.js';
import NewInApp from '../screens/NewInApp.js';

const Stack = createStackNavigator();

export default function HomeStack() {

    return(

    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Home",
                    headerStyle: {
                        backgroundColor: '#349beb',
                        shadowColor: 'transparent',
                    },
                    headerTitle: (props) => (
                    <Image
                        source={require('../../assets/images.png')}
                        style={styles.logo_image}

                    />

                    )
                }}
            />

            <Stack.Screen
                name="FB"
                component={FB}
                options={{
                    headerStyle: {
                        backgroundColor: '#fff',
                        shadowColor: 'transparent',
                    },
                    headerTitle: 'Pagina de Facebook'
               }}
            />

            <Stack.Screen
                name="Calendars"
                component={Calendars}
                options={{
                    headerStyle: {
                        backgroundColor: '#349beb',
                        shadowColor: 'transparent',
                    },
                    headerTitle: 'Calendario 2021',
                    headerTintColor: '#fff'
               }}
            />

            <Stack.Screen
                name="AreYouNew"
                component={NewInApp}
                options={{
                    headerStyle: {
                        backgroundColor: '#349beb',
                        shadowColor: 'transparent',
                    },
                    headerTitle: 'Eres Nuevo a la plataforma?',
                    headerTintColor: '#fff'
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>


    )}

const styles = StyleSheet.create({

    logo_image: {

        marginTop: 250,
        height: 180,
        width: 180,
        borderRadius: 25

    }


})

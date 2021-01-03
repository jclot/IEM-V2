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
        </Stack.Navigator>
    </NavigationContainer>


    )}

const styles = StyleSheet.create({

    logo_image: {

        marginTop: 170,
        height: 180,
        width: 180,
        borderRadius: 25

    }


})

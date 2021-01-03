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
import FB from '../screens/FB.js'

const Stack = createStackNavigator();

export default function FbStack() {

    return(

    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="FB"
                component={FB}
                options={{
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

        marginTop: 150,
        height: 150,
        width: 150,
        borderRadius: 50

    }


})

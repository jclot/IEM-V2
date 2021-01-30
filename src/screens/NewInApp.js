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
    Button
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NewInApp() {

  return (

    <ScrollView style={styles.genr_sp}>
        <Text style={styles.title_new_app}> Eres nuevo a esta plataforma? </Text>

            <Button
            title='yes'
            />

            <Button
            title='no'
            />

    </ScrollView>

  )
}


const styles = StyleSheet.create({

    genr_sp: {

        backgroundColor: '#349beb'


    },

    title_new_app: {

        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        marginTop: 150

    }



})

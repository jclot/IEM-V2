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
} from 'react-native';
 import { Ionicons } from '@expo/vector-icons';
 import { WebView } from 'react-native-webview';

export default function FB() {

    return(

            <WebView style={styles.fst_view}
                     startInLoadingState={true}
                     source={{ uri: 'https://es-la.facebook.com/IEM.Bilingual.School' }}
            />

    )
}

const styles = StyleSheet.create({

    fst_view: {

    backgroundColor: '#349beb'

    }


})

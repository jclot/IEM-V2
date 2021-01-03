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


export default function Home({ navigation }) {

    const [modalVisible, setModalVisible] = React.useState(false);

    return(

    <ScrollView style={styles.bg_color_sv} scrollEnabled={false}>

        <View style={styles.buttons_group}>
            <View style={styles.buttons_position}>
               <TouchableOpacity style={styles.buttons_style} onLongPress={() => setModalVisible(!modalVisible) }>
                    <Ionicons name="calendar" size={34} color="#e3e156" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttons_style} onPress={() => navigation.navigate('FB')}>
                    <Ionicons name="logo-facebook" size={34} color="#e3e156" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttons_style}>
                    <Ionicons name="ios-information-circle-sharp" size={38} color="#e3e156" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttons_style}>
                    <Ionicons name="call" size={34} color="#e3e156" />
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>

    )
}


const styles = StyleSheet.create({

    buttons_group: {
        alignSelf: 'center',
        marginTop: 200
    },

    bg_color_sv: {
        backgroundColor: '#349beb'
    },

    buttons_position: {
        margin: 35
    },

    buttons_style: {

       margin: 10,
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:80,
       height:80,
       backgroundColor:'#fff',
       borderRadius:50,
    }


})


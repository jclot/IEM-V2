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
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default function Calendars() {

    return(

    <View style={{backgroundColor: '#349beb'}}>

        <CalendarList

        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
        pastScrollRange={0}
        futureScrollRange={50}
        scrollEnabled={true}
        showScrollIndicator={true}
        theme={{
            backgroundColor: '#349beb',
            calendarBackground: '#349beb',
            todayTextColor: '#e3e156',
            monthTextColor: '#fff',
            dayTextColor: '#fff'
        }}
        style={{
            marginTop: 20,
            backgroundColor: '#349beb'
        }}
        />
    </View>
    )
}

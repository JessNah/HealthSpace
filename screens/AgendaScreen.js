import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import AgendaComponent from "../components/Agenda"

import { MonoText } from '../components/StyledText';

export default function AgendaScreen() {
  return (
    <View style={styles.container}>
      <AgendaComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import AgendaScreen from '../screens/AgendaScreen';
import InsightsScreen from '../screens/InsightsScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} 
        tabBarOptions={{activeTintColor: '#4f5f98', style:{ backgroundColor: '#fff' } }} >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Insights"
        component={InsightsScreen}
        options={{
          title: 'Insights',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-trending-up" />,
        }}
      />
      <BottomTab.Screen
        name="Agenda"
        component={AgendaScreen}
        options={{
          title: 'My Records',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-clipboard" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return <Text style={{color: "#7289DA"}}>Health Glance</Text>;
    case 'Links':
      return <Text style={{color: "#7289DA"}}>Keep yourself updated</Text>;
    case 'Agenda':
      return <Text style={{color: "#7289DA"}}>Report your symptoms</Text>;
    case 'Insights':
      return <Text style={{color: "#7289DA"}}>Insights</Text>;
  }
}

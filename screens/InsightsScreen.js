import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon, Avatar, Badge, withBadge} from 'react-native-elements';
import { Divider, Tooltip, Text as MyText } from 'react-native-elements';

const period = [
  {
     name: 'You started experiencing symptoms on: February 27, 2020',
     avatar: require('../assets/images/bulletpoint.png')
  },
  {
    name: 'Number of days since you started experiencing symptoms: 46',
    avatar: require('../assets/images/bulletpoint.png')
 },
 {
  name: 'Number of days with pain attack levels above 5: 12',
  avatar: require('../assets/images/bulletpoint.png')
},
{
  name: 'Pain-free days: 4',
  avatar: require('../assets/images/bulletpoint.png')
},
 ]


 const pain = [
  {
     name: 'Avg pain level: 4/10',
     avatar: require('../assets/images/bulletpoint.png')
  },
  {
    name: 'Average symptoms rating: [  MODERATE  ]',
    avatar: require('../assets/images/bulletpoint.png')
 },
 {
  name: 'All symptoms experienced: Neck pain, confusion, migraine, sore throat, coughing, fever, Irritiability, Weakness, Achiness, Chills, Nausea',
  avatar: require('../assets/images/bulletpoint.png')
},
 ]


 const affected = [
  {
     name: 'Could not fall asleep, no screen time, slower [ at home ], hard to concentrate, missed family time',
     avatar: require('../assets/images/bulletpoint.png')
  },
 ]


 const medication = [
  {
     name: 'You found tylenol midly helpful on days where you recorded pain levels over 6.',
     avatar: require('../assets/images/bulletpoint.png')
  },
  {
    name: 'No other medications recorded',
    avatar: require('../assets/images/bulletpoint.png')
 },
 ]
 
 const relief = [
  {
     name: 'Helpful - Drinking water, Hot shower, staying indoors, resting in a dark room.',
     avatar: require('../assets/images/bulletpoint.png')
  },
  {
    name: 'Unsure if helpful - yoga, food',
    avatar: require('../assets/images/bulletpoint.png')
 },
 ]

export default function InsightsScreen() {
  return (
    <>
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <OptionButton
        icon="export"
        label="Export your records"
        onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
      />
      <View style={styles.separatorComponent}>
        <Divider style={styles.separator} />
      </View>
      <View style={{ alignItems: 'center', backgroundColor: '#ffc62b'}}>
      <Tooltip backgroundColor={'orange'} height={150} width={200}popover={<MyText>If you are having difficulty breathing or experiencing other severe symptoms, call 911 immediately. Advise them of your symptoms and travel history.</MyText>}>
      <View style={{ alignItems: 'center', width: '100%', flexDirection: 'row', backgroundColor: '#ffc62b'}}><Icon name='warning' /><MyText style={{ textAlign: 'center', border: 'none', backgroundColor: '#ffc62b', padding: 14}}>SEVERE SYMPTONS</MyText>
      </View>
      </Tooltip>
      </View>
      
      <Card containerStyle={{ backgroundColor: '#e3e7fa'}} title="TIMELINE">
        {
          period.map((u, i) => {
            return (
              <>
              <View key={i} style={{
                borderRadius: 5,
                alignItems: 'center',
                flexDirection: 'row',
                flex: 2
              }}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source= {(u.avatar)}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
              </>
            );
          })
        }
      </Card>
      <Card containerStyle={{ backgroundColor: '#e3e7fa'}} title="PAIN">
        {
          pain.map((u, i) => {
            return (
              <>
              <View key={i} style={{
                borderRadius: 5,
                alignItems: 'center',
                flexDirection: 'row',
                flex: 2
              }}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source= {(u.avatar)}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
              </>
            );
          })
        }
      </Card>
      <Card containerStyle={{ backgroundColor: '#e3e7fa'}} title="AFFECTED ACTIVITIES">
        {
          affected.map((u, i) => {
            return (
              <>
              <View key={i} style={{
                borderRadius: 5,
                alignItems: 'center',
                flexDirection: 'row',
                flex: 2
              }}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source= {(u.avatar)}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
              </>
            );
          })
        }
      </Card>
      <Card containerStyle={{ backgroundColor: '#e3e7fa'}} title="MEDICATION">
        {
          medication.map((u, i) => {
            return (
              <>
              <View key={i} style={{
                borderRadius: 5,
                alignItems: 'center',
                flexDirection: 'row',
                flex: 2
              }}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source= {(u.avatar)}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
              </>
            );
          })
        }
      </Card>
      <Card containerStyle={{ backgroundColor: '#e3e7fa'}} title="RELIEF">
        {
          relief.map((u, i) => {
            return (
              <>
              <View key={i} style={{
                borderRadius: 5,
                alignItems: 'center',
                flexDirection: 'row',
                flex: 2
              }}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source= {(u.avatar)}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
              </>
            );
          })
        }
      </Card>
    </ScrollView>
    </>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Entypo name={icon} size={24} color="rgba(0,0,0,1)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.myLink}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  separatorComponent: {
    backgroundColor: 'white',
  },
  separator: {
    marginLeft: 58,
  },
  image:{
    width: 15,
    height: 15,
    marginRight: 10,

  },
  container: {
    backgroundColor: '#fafafa',
  },
  myLink: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 14,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});

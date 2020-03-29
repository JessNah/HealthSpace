import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';
import axios from "axios";
import { WebView } from 'react-native-webview';


export default class LinksScreen extends Component {
  constructor() {
    super();
    this.state = { cases: "Loading...",
                  deaths: "Loading...",
                  recovered: "Loading...",
                  gcases: "Loading...",
                  gdeaths: "Loading...",
                  grecovered: "Loading...",
                  isReady: false,
                  status: null,
                  quality: null,
                  error: null,
                };
  }

  async componentDidMount() {
    axios.get("https://corona.lmao.ninja/countries")
      .then(json => {
          let searchCountry = "Canada";

          var countries = json.data;
          countries.forEach((element, index, array)=> {
            if(element){
              if(element.country === searchCountry){
                this.setState({ cases: element.cases, 
                  deaths: element.deaths, 
                  recovered: element.recovered })
              }
            }
          });         
        }      
      ) .catch(function (error) {
        console.log(error);
      });
    
    axios.get("https://corona.lmao.ninja/all")
    .then(json => {
        var element = json.data;
        this.setState({ gcases: element.cases, 
          gdeaths: element.deaths, 
          grecovered: element.recovered })         
      }      
    ) .catch(function (error) {
      console.log(error);
    });
  }

   OptionButton = ({ icon, label, onPress, isLastOption }) =>{
    return (
      <RectButton style={[this.styles.option, isLastOption && this.styles.lastOption]} onPress={onPress}>
        <View style={{ flexDirection: 'row' }}>
          <View style={this.styles.optionIconContainer}>
            <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
          </View>
          <View style={this.styles.optionTextContainer}>
            <Text style={this.styles.optionText}>{label}</Text>
          </View>
        </View>
      </RectButton>
    );
  }
    
  styles = StyleSheet.create({
    myLink: {
      color: "blue",
      textDecorationLine: "underline",
      fontSize: 14,
      alignSelf: 'flex-start',
      marginTop: 1,
    },
    homeScreenFilename: {
      // marginVertical: 7,
    },
    codeHighlightContainer: {
      paddingTop:12,
      paddingBottom:12,
      marginBottom: 15,
      backgroundColor: 'rgba(0,0,0,0.05)',
      // borderRadius: 3,
      // paddingHorizontal: 4,
    },
    myContainer: {
      paddingLeft: 20,
      fontSize: 13
    },
    myContainerBold: {
      paddingLeft: 20,
      fontSize: 15,
      paddingBottom: 5,
      color: "#47c4a1",
      fontWeight: 'bold'
    },
    myContainerBoldP: {
      fontSize: 16,
      paddingBottom: 5,
      color: "#7289DA",
      fontWeight: 'bold'
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    myContainer2: {
      fontSize: 16,
      backgroundColor: '#fff',
      paddingLeft: 80,
      paddingRight: 80,
      paddingTop: 40,
      marginBottom: -30
    },
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
    },
    contentContainer: {
      paddingTop: 15,
    },
    optionIconContainer: {
      marginRight: 12,
    },
    option: {
      backgroundColor: '#fdfdfd',
      paddingHorizontal: 12,
      paddingVertical: 12,
      borderWidth: StyleSheet.hairlineWidth,
      borderBottomWidth: 0,
      borderColor: '#ededed',
    },
    lastOption: {
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optionText: {
      fontSize: 14,
      alignSelf: 'flex-start',
      marginTop: 1,
    },
    symptoms: {
      marginTop: 10,
      paddingLeft: 20,
      marginBottom: 20,
      paddingRight: 20
    },
    symptomsText: {
      fontSize: 14,
      paddingLeft: 15
    },
    youTContainer: {
      padding:30,
      backgroundColor: "#e1e5f5"
    },
    youTContainer2: {
      paddingLeft:65,
      paddingTop:10,
      paddingBottom:20,
      backgroundColor: "#e1e5f5"
    }, 
    bannerImg: {
      flex: 1,
      width: 350,
      height: 60,
      resizeMode: 'contain',
    },
  });
    


  render() {
    return (
      <ScrollView style={this.styles.container} contentContainerStyle={this.styles.contentContainer}>
          <View style={this.styles.symptoms}>
              <Text style={this.styles.myContainerBoldP}>Know the symptoms</Text>
              <Text>Symptoms have included:</Text>
              <Text style={this.styles.symptomsText}>{'\u2022'} cough</Text>
              <Text style={this.styles.symptomsText}>{'\u2022'} fever</Text>
              <Text style={this.styles.symptomsText}>{'\u2022'} difficulty breathing</Text>
              <Text style={this.styles.symptomsText}>{'\u2022'} pneumonia in both lungs</Text>
            </View>

          {/* <View style={this.styles.getStartedContainer}> */}
            <View style={[this.styles.codeHighlightContainer, this.styles.homeScreenFilename]}>
              <MonoText style={this.styles.myContainerBold}>Global:</MonoText>
              <MonoText style={this.styles.myContainer}>Cases: {this.state.gcases}</MonoText>
              <MonoText style={this.styles.myContainer}>Deaths: {this.state.gdeaths}</MonoText>
              <MonoText style={this.styles.myContainer}>Recoveries: {this.state.grecovered}</MonoText>
            </View>
            <View style={[this.styles.codeHighlightContainer, this.styles.homeScreenFilename]}>
              <MonoText style={this.styles.myContainerBold}>Canada:</MonoText>
              <MonoText style={this.styles.myContainer}>Cases: {this.state.cases}</MonoText>
              <MonoText style={this.styles.myContainer}>Deaths: {this.state.deaths}</MonoText>
              <MonoText style={this.styles.myContainer}>Recoveries: {this.state.recovered}</MonoText>
            </View>     

            <RectButton style={[this.styles.option, false && this.styles.lastOption]} onPress={ () => WebBrowser.openBrowserAsync('https://docs.expo.io')}>
            <View style={{ flexDirection: 'row' }}>
              <View style={this.styles.optionIconContainer}>
                <Ionicons name={"md-school"} size={22} color="rgba(0,0,0,0.35)" />
              </View>
              <View style={this.styles.optionTextContainer}>
                <Text style={this.styles.myLink}>{ "About COVID-19"}</Text>
              </View>
            </View>
          </RectButton>

          <RectButton style={[this.styles.option, false && this.styles.lastOption]} onPress={ () => WebBrowser.openBrowserAsync('https://travel.gc.ca/travelling/advisories')}>
            <View style={{ flexDirection: 'row' }}>
              <View style={this.styles.optionIconContainer}>
                <Ionicons name={"md-compass"} size={22} color="rgba(0,0,0,0.35)" />
              </View>
              <View style={this.styles.optionTextContainer}>
                <Text style={this.styles.myLink}>{ "Official Global Travel Advisory"}</Text>
              </View>
            </View>
          </RectButton>

          <RectButton style={[this.styles.option, false && this.styles.lastOption]} onPress={ () => WebBrowser.openBrowserAsync('https://docs.expo.io')}>
            <View style={{ flexDirection: 'row' }}>
              <View style={this.styles.optionIconContainer}>
                <Ionicons name={"ios-chatboxes"} size={22} color="rgba(0,0,0,0.35)" />
              </View>
              <View style={this.styles.optionTextContainer}>
                <Text style={this.styles.optionText}>{ "Public Health Ontario’s Customer Service Centre at 416-235-6556 / 1-877-604-4567"}</Text>
              </View>
            </View>
          </RectButton>


        <View style={this.styles.youTContainer}>
        <Text style={this.styles.myContainerBoldP}>Learn to wash your hands properly</Text>
          <WebView
            style={{flex:1, width:330, height:165}}
            javaScriptEnabled={true}
            source={{uri: 'https://www.youtube.com/embed/3SfHdSHK-g0?rel=0&autoplay=0&showinfo=0&controls=0'}}
        />
        </View>


        <View style={this.styles.symptoms}>
        <Text style={this.styles.myContainerBoldP}> </Text>
              <Image 
                source={ require('../assets/images/banner.jpg') }
                style={this.styles.bannerImg}
              />

              <Text style={this.styles.symptomsText}>Get the latest information from the Public Health Agency of Canada about COVID-19.
              </Text>
          <RectButton style={[this.styles.option, false && this.styles.lastOption]} onPress={ () => WebBrowser.openBrowserAsync('https://docs.expo.io')}>
            <View style={{ flexDirection: 'row' }}>
              <View style={this.styles.optionIconContainer}>
                <Ionicons name={"md-school"} size={22} color="rgba(0,0,0,0.35)" />
              </View>
              <View style={this.styles.optionTextContainer}>
                <Text style={this.styles.myLink}>{ "PHAC"}</Text>
              </View>
            </View>
          </RectButton>
          </View>


        <View style={this.styles.youTContainer2}>
        <Text style={this.styles.myContainerBoldP}>The Coronavirus Explained</Text>
          <WebView
            style={{flex:1, width:260, height:170}}
            javaScriptEnabled={true}
            source={{uri: 'https://www.youtube.com/embed/BtN-goy9VOY?rel=0&autoplay=0&showinfo=0&controls=0'}}
        />
        </View>

      </ScrollView>
    );
  }
}


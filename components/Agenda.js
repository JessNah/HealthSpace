import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';


export default class AgendaComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {}
    };
  }

  styles = StyleSheet.create({
    container: {
      marginBottom: 100
    },
  });
  

  render() {
    return (
        <Agenda
          // theme={{
          //   'stylesheet.agenda.main':{
          //     'knobContainer': {
          //       bottom: 150
          //     }
          //   }}}
        // style={{ height: 300 }}
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2020-03-27'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#43515c'},
        //    '2017-05-09': {textColor: '#43515c'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        theme={{agendaKnobColor: '#7289da', 
          backgroundColor : "#f5f6fa",
          agendaTodayColor: '#7289da', 
          dotColor : '#72dabd', 
          todayTextColor : '#7289da', 
          selectedDayBackgroundColor: '#7289da' }}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        // hideExtraDays={false}
      />
    );
  }

  loadItems(day) {
    setTimeout(() => {
      let strings =[":\nPain: 8/10, Fever: 38c\nSymptoms: dry cough, headache", ":\nPain: 4/10, Fever: 37c\nSymptoms: No Symtoms", ":\nPain: 9/10, Fever: 39c\nSymptoms: Severe dry cough, headache, diarrhea",]
      let num = 0;
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            num = num + 1;
            this.state.items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j + strings[(Math.floor(Math.random() * 3))],
              height: Math.max(60, Math.floor(Math.random() * 150)) 
            });
          }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  renderItem(item) {
    return (
      <TouchableOpacity 
        style={[styles.item, {height: item.height}]} 
        onPress={() => Alert.alert(item.name)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});
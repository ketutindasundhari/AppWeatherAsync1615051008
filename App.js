import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  Image,
  TextInput,
  View } from 'react-native';

export default class AppWeatherAsync1615051008 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //cari: '',
      city: '',
      forecast: {
      main: '',
      description: '',
      sea_level: '',
      grnd_level: '',
      speed: '',
      pressure: '',
      humidity: '',
      sunrise: '',
      sunset: '',
      temp: ''
       }
    };
  }

  getWeather= () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='
    + this.state.city +
    '&appid=3599c0f6e3f0e7072917fe14471b8404&units=metric';
    fetch (url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp,
          sea_level: responseJson.main.sea_level,
          grnd_level: responseJson.main.grnd_level,
          speed: responseJson.wind.speed,
          pressure: responseJson.main.pressure,
          humidity: responseJson.main.humidity,
          sunrise: responseJson.sys.sunrise,
          sunset: responseJson.sys.sunset,
        }
      });
     }
    );
  }

  render() {
  return (

        <View style={styles.containerMain}>
        <View style={styles.box1}>
            <Text style={{ padding: 15, fontSize: 20, color: 'white', textAlign: 'center' }} >
            Prakiraan Cuaca</Text>
        </View>

        <View style={styles.box2}>
        <Text style={{ fontSize: 16, color: 'black'  }}>Masukkan Nama Kota</Text>
        <TextInput
          style={{
            height: 45,
            width: 250,
            textAlign: 'center',
            backgroundColor: 'white',
            margin: 20 }}
            onChangeText={(city) => this.setState({ city })}
            keyboardType='ascii-capable'
        />
            <Button
              onPress={() => this.getWeather({})}
              title="Lihat"
              color='#42A5F5'
              accessibilityLabel="Lihat"
            />
        </View>
        <View style={styles.box3}>
        <View style={styles.button1}>
           <Image source={require('./src/image/Temp.png')}  style={styles.icon} /></View>
        <View style={styles.button2}><Text>Temp :{this.state.forecast.temp}</Text></View>
        <View style={styles.button1}>
           <Image source={require('./src/image/Speed.png')}  style={styles.icon} /></View>
        <View style={styles.button2}><Text>Wind Speed :{this.state.forecast.speed}  </Text></View>
        </View>

        <View style={styles.box3}>
        <View style={styles.button1}>
          <Image source={require('./src/image/Main.png')}  style={styles.icon} /></View>
        <View style={styles.button2}><Text>Main :{this.state.forecast.main}</Text></View>
        <View style={styles.button1}>
          <Image source={require('./src/image/Description.png')}  style={styles.icon} /></View>
        <View style={styles.button2}><Text>Main Desc : {this.state.forecast.description}</Text></View>
       
        </View>
        <View style={styles.box3}>
        <View style={styles.button1}>
          <Image source={require('./src/image/Sunrise.png')}  style={styles.icon} /></View>
        <View style={styles.button2}><Text>Sunrise :{this.state.forecast.sunrise}  </Text></View>
        <View style={styles.button1}>
          <Image source={require('./src/image/Sunset.png')}  style={styles.icon} /></View>
        <View style={styles.button2}><Text>Sunset :{this.state.forecast.sunset}</Text></View>
        </View>

        <View style={styles.box3}>
        <View style={styles.button1}>
          <Image source={require('./src/image/Pressure.png')}  style={styles.icon} /></View>
        <View style={styles.button2}><Text>Presure :{this.state.forecast.pressure}</Text></View>
        <View style={styles.button1}>
          <Image source={require('./src/image/Humidity.png')}  style={styles.icon} /></View>
        <View style={styles.button2}><Text>Humadity :{this.state.forecast.humidity}</Text></View>
        </View>

        <View style={styles.box3}>
        <View style={styles.button1}>
          <Image source={require('./src/image/Sea_level.png')}  style={styles.icon} /></View>
        <View style={styles.button2}><Text>Sea Level :{this.state.forecast.sea_level}</Text></View>
        <View style={styles.button1}>
          <Image source={require('./src/image/Grn_level.png')}  style={styles.icon} /></View>
        <View style={styles.button2}><Text>Ground Level :{this.state.forecast.grnd_level}</Text></View>
        </View>

        <View style={styles.box4}>
             <Text style={{ padding: 20, fontSize: 15, color: 'white', textAlign: 'center' }} >
              copyright@indasundhari </Text>
        </View>
      </View>
     );
   }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#BBDEFB',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.6,
    marginTop: 23,
    backgroundColor: '#0D47A1',
    alignItems:'center'
  },
  box2: {
    flex: 1.5,
    backgroundColor: '#2962FF',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box3: {
    flex: 0.0,
    backgroundColor: '#BBDEFB',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button1: {
    height: 50,
    width: 51,
    backgroundColor: '#90CAF9',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:11
  
  },
  button2: {
    height: 50,
    width: 100,
    backgroundColor: '#42A5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 0
  },
  box4: {
    flex: 0.6,
    alignItems:'center',
    backgroundColor: '#0D47A1',
    marginTop: 20,
    margin: 0
  },
  text: {
    fontSize: 15
  },
  icon: {
    height: 50,
    width: 50,
  }
});
AppRegistry.registerComponent('AppForm2', () => AppWeatherAsync1615051008);

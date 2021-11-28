import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function WeatherInfo({ currentWeather }) {
    const {
        main: { temp },
        weather: [details],
        coord: {lat,lon}
    } = currentWeather

    const { icon, description } = details 
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

    return(
    <View>
        <Image style = {styles.weatherIcon} source={{ uri: iconUrl}} /> 
        <Text style = {styles.textPrimary}>{temp} °F</Text>
        <Text style = {styles.weatherDescription}>{description}</Text>  
        <Text style={styles.big}>{
                   `Latitude: ${lat}`}
        </Text> 
        <Text style={styles.big}>{
                   `Longitude: ${lon}`}
        </Text>   
    </View>
    )
 }
 const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center',
    },
    weatherDescription: {
        textTransform: 'capitalize',
    },
    weatherIcon: {
        width: 100,
        height: 100,
    },
    textPrimary: {
            fontSize: 30,
            color: 'red',
    },

})
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import * as Location from 'expo-location'
import WeatherInfo from './components/WeatherInfo'



const WEATHER_API_KEY ='5fd537aa3fe69a544ab2e474164a6771'
const WEATHER_URL_BASE ='https://api.openweathermap.org/data/2.5/weather?'

export default function App() {
    const [errorMessage, setErrorMessage] = useState(null)
    const [currentWeather, setCurrentWeather] = useState(null)
    const [unitsSystem, setUnitsSystem] = useState('imperial')


    useEffect(() => {
        load()
    }, [])

    async function load() {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync()

            if (status !== 'granted') {
                setErrorMessage('Access to location is needed to run the app')
                
                
            }
            const location = await Location.getCurrentPositionAsync()

            const { latitude, longitude } = location.coords

            const weatherUrl = `${WEATHER_URL_BASE}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`

            const response = await fetch(weatherUrl)
            const result = await response.json()
      

           alert(`Latitude: ${latitude}, Longitude: ${longitude}`)


           if (response.ok) {
            setCurrentWeather(result)
        } else {
            setErrorMessage(result.message)
          } 
        } catch (error){
          setErrorMessage(error.message)
        }
      }  
         if (currentWeather){
           return (
            <View style={styles.container}>
            <StatusBar style= "auto" />
            <View style={styles.main}>
            <WeatherInfo currentWeather={currentWeather} />
            </View>
        </View>
           )
        }else {
          return(<View style={styles.container}>
            <Text>{errorMessage}</Text>
            <StatusBar style= "auto" />
        </View>
        )
      }
      
    }      
         

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
   
})
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


const Map = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);

  useEffect(() => {
    (async () => {
      const foreGround = await Location.requestForegroundPermissionsAsync();
      const backGround = await Location.requestBackgroundPermissionsAsync();
      if (foreGround !== "granted" && backGround !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      //setLocation(location);

      setMapRegion({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        longitudeDelta: 0.0922,
        latitudeDelta: 0.0421
      });
    })();
  }, []);

    const selectLocationHandler=(par)=>{
      console.log("Select Location handler ");
      //console.log(par);
      console.log("LAT="+par.nativeEvent.coordinate.latitude);
      console.log("LNG="+par.nativeEvent.coordinate.longitude);

      //Getting values of latitude and longitude of par.nativeEvent.coordinate
      var {latitude, longitude}=par.nativeEvent.coordinate;
      //Making a new object: coords:{latitude:theValueOfLatitude, longitude:theValueOfLongitude} which is proper for 
      //text elements in the UI part
      setLocation({coords:par.nativeEvent.coordinate});
      setMapRegion({ latitude: latitude, longitude: longitude, latitudeDelta: 0.1, longitudeDelta: 0 });
    }
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }


  return (
    <View style={styles.container}>
      <Text>MapView</Text>
      <MapView region={mapRegion} style = {styles.map} onLongPress={selectLocationHandler}>
        <Marker coordinate={mapRegion}></Marker>
       </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%'
  }
});

export default Map
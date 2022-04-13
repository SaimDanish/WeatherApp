import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styles from '../Map/styles';

const MapView_class = props => {
  console.log('Props :', props.route.params.data);
  return (
    <View style={styles.container}>
      <View style={styles.Button_Conatiner}>
        <TouchableOpacity
          style={styles.linearGradient}
          onPress={() => {
            console.log('Saim');
          }}>
          <Text style={styles.buttonText}>
            {props.route.params.data.CityName}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Map_container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google MapszoomEnabled={true}
          showsUserLocation={true}
          showsCompass={true}
          zoomControlEnabled={true}
          style={styles.map}
          region={{
            latitude: props.route.params.data.latitude_data,
            longitude: props.route.params.data.longitude_data,
            latitudeDelta: 0.25,
            longitudeDelta: 0.221,
          }}>
          <Marker
            coordinate={{
              latitude: props.route.params.data.latitude_data,
              longitude: props.route.params.data.longitude_data,
            }}
            title={'My location'}
          />
        </MapView>
      </View>
    </View>
  );
};
export default MapView_class;

import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from '../HomeScreen/styles';
import ModalSelector from 'react-native-modal-selector';
import {useNavigation} from '@react-navigation/native';
// import {Weather_api} from '../Api';
import {LineChart} from 'react-native-chart-kit';
import {DarkTheme, DrawerActions} from '@react-navigation/native';
import {Dimensions} from 'react-native';
import axios from 'axios';

const homeScreen = () => {
  const [left, setleft] = useState(0);
  const [right, setright] = useState(2);
  const [SelectedCity, setSelectedCity] = useState('Select City');
  const [weather_list, setweather_list] = useState([]);
  const [long_data, setlong_data] = useState();
  const [lat_data, setlat_data] = useState();

  const screenWidth = Dimensions.get('window').width;
  const [wayepi_center, setwayepi_center] = useState([
    {
      key: 1,
      label: 'Islamabad',
      value: 'Islamabad',
      latitude: 33.738045,
      longitude: 73.084488,
    },
    {
      key: 2,
      label: 'Lahore',
      value: 'Lahore',
      latitude: 31.582045,
      longitude: 74.329376,
    },
    {
      key: 3,
      label: 'Karachi',
      value: 'Karachi',
      latitude: 24.860966,
      longitude: 66.990501,
    },
    {
      key: 4,
      label: 'Rawalpindi',
      value: 'Rawalpindi',
      latitude: 33.626057,
      longitude: 73.071442,
    },
    {
      key: 5,
      label: 'Faisalabad',
      value: 'Faisalabad',
      latitude: 31.418715,
      longitude: 73.079109,
    },
    {
      key: 6,
      label: 'Gujranwala',
      value: 'Gujranwala',
      latitude: 32.166351,
      longitude: 74.1959,
    },
    {
      key: 7,
      label: 'Peshawar',
      value: 'Peshawar',
      latitude: 34.025917,
      longitude: 71.560135,
    },
    {
      key: 8,
      label: 'Multan',
      value: 'Multan',
      latitude: 30.181459,
      longitude: 71.492157,
    },
    {
      key: 9,
      label: 'Hyderabad',
      value: 'Hyderabad',
      latitude: 25.396,
      longitude: 68.3578,
    },
    {
      key: 10,
      label: 'Quetta',
      value: 'Quetta',
      latitude: 30.18327,
      longitude: 66.996452,
    },
    {
      key: 11,
      label: 'Bahawalpur',
      value: 'Bahawalpur',
      latitude: 29.418068,
      longitude: 71.670685,
    },
    {
      key: 12,
      label: 'Sialkot',
      value: 'Sialkot',
      latitude: 32.497223,
      longitude: 74.53611,
    },
  ]);
  const data = {
    labels: ['Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday'],
    datasets: [
      {
        data: [307.03, 306.07, 299.64, 302, 12, 299.72, 180.22],
        // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        // strokeWidth: 2, // optional
      },
    ],
    // legend: ['Rainy Days'], // optional
  };
  const chartConfig = {
    // backgroundGradientFrom: '#1E2923',
    // backgroundGradientFromOpacity: 0,
    // backgroundGradientTo: '#08130D',
    // backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(100, 255, 146, ${opacity})`,
    // strokeWidth: 2, // optional, default 3
    // barPercentage: 0.5,
    // useShadowColorFromDataset: false, // optional
  };

  const Weather_api = (lat, lon) => {
    // return new Promise((resolve, reject) => {
    const config = {
      method: 'get',
      url: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5e8591b6db2cc39a817865bfc31ceb24`,
    };
    console.log('config :', config);
    axios(config)
      .then(response => {
        console.log(JSON.stringify(response.data.list));
        setweather_list(response.data.list);
        // resolve(JSON.stringify(response.data.list));
      })
      .catch(error => {
        console.log(error);
        // reject(error);
      });
    // });
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header_desc}>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 15,
            color: 'black',
            fontFamily: 'Inter',
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          Weather Listing Heading
        </Text>
      </View>

      <View style={styles.heading}>
        <Text
          style={{
            // alignSelf: 'center',
            // marginTop: 45,
            color: 'black',
            fontFamily: 'Inter',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Select City :
        </Text>
      </View>
      <View style={styles.formField_container}>
        <ModalSelector
          data={wayepi_center}
          initValue={SelectedCity}
          style={styles.formInput_container}
          onChange={item => {
            setSelectedCity(item.value);
            setlat_data(item.latitude);
            setlong_data(item.longitude);
            Weather_api(item.latitude, item.longitude);
            console.log('code was here', item);
            // Weather_api();
          }}
        />
      </View>

      <View style={styles.heading1}>
        <Text
          style={{
            // backgroundColor: 'green',
            // alignSelf: 'center',

            color: 'black',
            fontFamily: 'Inter',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Weather List :
        </Text>
      </View>
      <View style={styles.weather_container}>
        <ScrollView horizontal={true}>
          {weather_list != null || weather_list != undefined ? (
            <>
              {weather_list.map((val, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      console.log('resultttt:', val);
                    }}>
                    <View style={styles.bodyContainer} key={index}>
                      <Text style={styles.weather_detail}>
                        {' '}
                        Temperature in Celsius : {val.main.temp}
                      </Text>
                      <Text style={styles.weather_detail}>
                        {' '}
                        Feel like Temperature : {val.main.feels_like}
                      </Text>
                      <Text style={styles.weather_detail}>
                        {' '}
                        Description : {val.weather[0].description}
                      </Text>
                      <Text style={styles.weather_detail1}>
                        {' '}
                        Date : {val.dt_txt}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </>
          ) : (
            <Text style={{textAlign: 'center', marginTop: '2%', fontSize: 18}}>
              No Data
            </Text>
          )}
        </ScrollView>
      </View>

      <View style={styles.heading1}>
        <Text
          style={{
            // backgroundColor: 'green',
            // alignSelf: 'center',

            color: 'black',
            fontFamily: 'Inter',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Weather Graph :
        </Text>
      </View>
      <View style={styles.LineChart_Container}>
        <LineChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
      </View>

      <View style={styles.Button_Conatinerr}>
        <TouchableOpacity
          style={styles.linearGradient}
          // style={styles.btnSign_in}
          onPress={() => {
            navigation.navigate('Map', {
              data: {
                CityName: SelectedCity,
                latitude_data: lat_data,
                longitude_data: long_data,
              },
            });
          }}>
          <Text style={styles.buttonText}>View City on Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default homeScreen;

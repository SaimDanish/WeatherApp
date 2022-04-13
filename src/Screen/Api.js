import axios from 'axios';

//=========================== Login_api =======================
export const Weather_api = (lat, lon) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'get',
      url: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5e8591b6db2cc39a817865bfc31ceb24`,
    };
    console.log('config :', config);
    axios(config)
      .then(response => {
        console.log(JSON.stringify(response.data.list));
        resolve(JSON.stringify(response.data.list));
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};
//========================================================

import axios from 'axios';
import keycloak from './keycloak';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/auth',
});

// axiosClient.interceptors.request.use(async config => {
//   if (keycloak.token) {
//     // Try to update token if it's about to expire (in 60s)
//     try {
//       const refreshed = await keycloak.updateToken(60);
//       if (refreshed) {
//         console.log('Token refreshed:', keycloak.token);
//       }
//     } catch (error) {
//       console.error('Failed to refresh token', error);
//     }

//     config.headers.Authorization = `Bearer ${keycloak.token}`;
//   }

//   return config;
// }, error => {
//   return Promise.reject(error);
// });

export default axiosClient;

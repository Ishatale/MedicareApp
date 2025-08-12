import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'healthcare-app',
  clientId: 'springboot-api',
});

export default keycloak;

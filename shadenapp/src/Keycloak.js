import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 url: "http://212.24.106.4:8110/auth", //"http://localhost:8080/auth"
 realm: "Shaden",
 clientId: "shadenappclient",
});

export default keycloak;
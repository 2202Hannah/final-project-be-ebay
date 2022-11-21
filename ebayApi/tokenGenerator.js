require("dotenv").config();
const EbayAuthToken = require("ebay-oauth-nodejs-client");

const ebayAuthToken = new EbayAuthToken({
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret,
  redirectUri: process.env.redirectUri
});

const clientScope = "https://api.ebay.com/oauth/api_scope";
const tokenGenerator = () => {
  return ebayAuthToken
    .getApplicationToken("PRODUCTION", clientScope)
    .then(data => {
      const authToken = JSON.parse(data).access_token;
      return authToken;
    })
    .catch(error => {
      console.log(`Error to get Access token :${JSON.stringify(error)}`);
    });
};
tokenGenerator();

module.exports = tokenGenerator;

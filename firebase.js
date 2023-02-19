
var admin = require("firebase-admin");
require('dotenv').config();
var serviceAccount;//= require("./progressplanted-firebase-adminsdk-964z8-16de8d067a.json");
console.log(process.env);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount || 
    {
        "type":process.ENV.type,
        "project_id":process.ENV.project_id,
        "private_key_id":process.ENV.private_key_id,
        "private_key":process.ENV.private_key,
        "client_email":process.ENV.client_email,
        "client_id":process.ENV.client_id,
        "auth_uri":process.ENV.auth_uri,
        "token_uri":process.ENV.token_uri,
        "auth_provider_x509_cert_url":process.ENV.auth_provider_x509_cert_url,
        "client_x509_cert_url":process.ENV.client_x509_cert_url
    }),
  databaseURL: "https://progressplanted-default-rtdb.firebaseio.com"
});
module.exports=admin;


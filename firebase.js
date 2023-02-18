
var admin = require("firebase-admin");

var serviceAccount = require("./progressplanted-firebase-adminsdk-964z8-16de8d067a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://progressplanted-default-rtdb.firebaseio.com"
});
module.exports=admin;


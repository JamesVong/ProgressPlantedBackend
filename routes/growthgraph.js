const firebase=require("firebase-admin");
const admin = require("../firebase");
const express=require("express");

const router =express.Router();
const db = admin.database();

router.get("/", (req,res)=>{
    const ref = db.ref('text/');
    ref.once('value', (snap) => {
        res.status(200).json(snap);
      }, (errorObject) => {
        res.status(400).json({errorObject});
      }); 
})

module.exports=router;
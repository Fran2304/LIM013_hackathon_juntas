import { db } from "./firebase.js";

const getBancos = (callback) => 
  db.collection("bancos").onSnapshot((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    callback(docs);
  });


export default getBancos;

import { db } from "./firebase.js";

const getBancos = (callback) => 
  db.collection("bancos")
  .orderBy("tceamin", "asc")
  .onSnapshot((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    callback(docs);
  });


export default getBancos;

/* .collection("bancos")
.orderBy("tceamin", "asc") */
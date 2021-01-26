import { db } from "./firebase.js";

const getBancos = () => {
  db.collection("bancos").onSnapshot((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    console.log('docs',docs);
    return docs;
  });
};

export default getBancos;

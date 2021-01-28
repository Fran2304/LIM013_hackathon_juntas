import { db } from "./firebase.js";

export const getClient = ( id, callback) => {
    db.collection("clientes")
    .doc(id)
    .get()
    .then((doc) => {
        console.log('controller',doc.data());
        callback(doc.data());
    })
    .catch(error => console.log('Getting error!', error))

};

export const postSolicitud = (dni, ruc, rubro, banco, cuenta) => {
    db.collection("solicitudes").add({
        dni,
        ruc,
        rubro,
        banco,
        cuenta
    })
    .then(doc => {
        console.log("Document written with ID: ", doc.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

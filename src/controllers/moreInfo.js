import {db} from './firebase.js'

const getMoreInfo = (callback) =>
db.collection("loan").doc("unique")
    .onSnapshot(function(doc) {
        callback(doc.data())
        console.log("Current data: ", doc.data());
    });

export default getMoreInfo;
import { firebaseApp as firebase, database } from './config'
import { KEY_GOOGLE_MAPS } from '../constant';
import { googleMapsClient } from '../googlemaps';


export const signOutAdmin = () => {
    firebase.auth().signOut()
    .then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}


export const signInWithEmailAndPassword = async(values) => {

    const {email, password} = values
    const result = await firebase.auth().signInWithEmailAndPassword(email, password)
    .then((res) => {
        const user = res.user.toJSON()
        return {

            status: 'success',
            ...user
        }
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error)
        return {
            status: 'error',
            error
        }
        // ...
      });
      return result
}


export const verifyPermission = async( uid ) => {
    console.log(uid)
    let docRef = await database.collection("ADMIN").doc(uid)
        .get().then((doc) => {
        if (doc.exists && doc.data().active) {
            return true
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            return false
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    return docRef
}

export const shopCreate = (values) => {
    console.log(values)
}

export const shopModify = (values) => {

}

export const shopGetAll = async () => {
    const shops = await database.collection("locals")
        .get()
        .then(snap => snap)
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });

    return shops
}

export const shopGetOnly = () => {

}

export const shopDelete = () => {

}
export const shopBlock = () => {

}
export const offertCreate = () => {

}

export const offertModify = () => {

}

export const offertDelete = () => {

}

export const offertBlock = () => {

}

export const userCreate = () => {

}

export const userModify = () => {

}

export const userDelete = () => {

}

export const userBlock = () => {

}

export const getPlaceById = async (placeId) => {
    console.log(placeId)
    const place = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyAywy0bnd4SnrC87Yx01_wD5yOBbOqoZPU`)
        .then(res => res.json())
        .then(res => console.log(res))
    return place
}



export const getPredictions = async (value, token) => {

    googleMapsClient.placesAutoComplete({
        input: value,
        sessiontoken: token

    })
    const predictions = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&components=country:es&key=AIzaSyAywy0bnd4SnrC87Yx01_wD5yOBbOqoZPU`)
        .then(res => res.json())
        .then(res => res)
    return predictions
}

class DB {

    connect = () => {
        database = firebase.firestore()
        database.settings({ timestampsInSnapshots: true })
    }

    async getLocals() {
        const result = await database.collection('locals').get().then(snapshot => {
            return snapshot.docs
        })
        return result
    }
    async getUsers() {
        const result = await database.collection('users').get().then(snapshot => {
            return snapshot.docs
        })
        return result
    }

    blockUser = async (active, id) => {
        const ref = database.collection('users').doc(id);
        const res = await ref.update({ 'active': !active })
            .then(function (res) {
                console.log("Document successfully updated!");
                return true

            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
                return false
            });
        return res

    }

    deleteUser = (id) => {

        const ref = database.collection('users').doc(id);
        ref.delete()
            .then(function (res) {
                console.log("Document successfully delete!");
                return true

            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
                return false
            });
    }

    addUser = (data) => {
        const timestamp = firebase.firestore.FieldValue.serverTimestamp()
        console.log(data)
        const ref = database.collection("users")
        ref.add({
            ...data,
            errollment: timestamp,
            modify: timestamp
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });



    }
    addLocal = (data) => {

        const local = data
        delete local.predictions

        const timestamp = firebase.firestore.FieldValue.serverTimestamp()
        const ref = database.collection("locals")
        ref.add({
            ...local,
            errollment: timestamp,
            modify: timestamp
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });



    }

    async getLocal(id) {

        const ref = await database.collection('locals').doc('YtGgHHoiCoays1ygEIJv').get().then(res => res)
        return ref

    }




}


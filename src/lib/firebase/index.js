import { firebaseApp as firebase, database } from './config'
import { KEY_GOOGLE_MAPS } from '../constant';
import { googleMapsClient } from '../googlemaps';


export const signOutAdmin = () => {
    firebase.auth().signOut()
        .then(function () {
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });
}


export const signInWithEmailAndPassword = async (values) => {

    const { email, password } = values
    const result = await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            const user = res.user.toJSON()
            return {

                status: 'success',
                ...user
            }
        })
        .catch(function (error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            console.log(error)
            return {
                status: 'error',
                error
            }
            // ...
        });
    return result
}


export const verifyPermission = async (uid) => {
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

export const shopCreate = async (place) => {
    let res = false
    const timestamp = firebase.firestore.FieldValue.serverTimestamp()
    console.log(place.place_id)
    const ref = await database.collection("LOCALS").doc(place.place_id)
    const exist = ref.get().then(res => res.exist)
    if (exist) {
        await ref.set({
            ...place,
            errollment: timestamp,
            modify: timestamp
        })
            .then((docRef) => {
                res = true
            })
            .catch(function (error) {
                res = false
                console.error("Error adding document: ", error);
            });

    }

    return res



}

export const shopModify = (values) => {

}

export const shopGetAll = async () => {
    const shops = await database.collection("LOCALS")
        .get()
        .then(snap => snap)
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
    return shops
}


export const catGetAll = async () => {
    const cat = await database.collection("CATEGORIES")
        .get()
        .then(snap => snap)
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
    return cat
}

export const shopGetOnly = () => {

}
export const pagesGetAll = async () => {
    const pages = await database.collection("PAGES")
        .get()
        .then(snap => snap)
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
    return pages
}

export const pagesSet = async (values) => {
    const { id, content } = values
    const page = await database.collection("PAGES").doc(id);

    // Set the "capital" field of the city 'DC'
    return page.update({
        content: content
    })
        .then(function () {
            console.log("Document successfully updated!");
        })
        .catch(function (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
}

export const promosGetAll = async () => {
    const promos = await database.collection("PROMOS")
        .get()
        .then(snap => snap)
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
    return promos
}


export const promosCreate = async (promo) => {
    // Add a new document with a generated id.
    const timestamp = firebase.firestore.FieldValue.serverTimestamp()
    const { active, title, local, category, price } = promo
    const res = await database.collection("PROMOS").add({
        active,
        title,
        price,
        idLocal: local,
        category,
        createAt: timestamp,
        modify: timestamp
    })
        .then(function (docRef) {
            return true
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
            return false
        });

    return res

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
export const userGetAll = async () => {
    const data = await database.collection("USERS")
        .get()
        .then(snap => snap)
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
    return data
}

export const userGetOnly = async (id) => {
    console.log(id, 'asds')
    let user = await database.collection("USERS").doc(id)
        .get()
        .then(snap => snap.data())
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });

    const favs = await database.collection("FAVS").where("idUser", "==", id)
        .get()
        .then((snap) => {
            if (snap.empty) {
                return []
            } else {
                return snap
            }

        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });

    user = { user, favs }

    return user
}

export const userDelete = async (id) => {

}

export const userBlock = async (values) => {
    console.log(values)
    const { id, active } = values
    const block = await database.collection("USERS").doc(id)
        .update({
            active: active
        })
        .then(function () {
            return true
        })
        .catch(function (error) {

            console.error("Error updating document: ", error);
            return false
        })


    return block
}

export const promoBlock = async(values) => {
    const { id, active } = values
    const block = await database.collection("PROMOS").doc(id)
        .update({
            active: !active
        })
        .then(function () {
            return true
        })
        .catch(function (error) {

            console.error("Error updating document: ", error);
            return false
        })

        return block

}

export const getPlaceById = async (placeId) => {
    const place = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${KEY_GOOGLE_MAPS}`)
        .then(res => res.json())
        .then(res => res)
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







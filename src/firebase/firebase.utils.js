import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyC7Yphl3GfzWEe9zkfao-qKtQfBe2TPpRw",
        authDomain: "crwn-db-8c147.firebaseapp.com",
        projectId: "crwn-db-8c147",
        storageBucket: "crwn-db-8c147.appspot.com",
        messagingSenderId: "37345230958",
        appId: "1:37345230958:web:6b008167c87e122994267f",
        measurementId: "G-G9ND456MJ7"
      
};

export const createUserProfileDocument = async (userAuth , additionalData) => {
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${ userAuth.uid, additionalData}`);

        const snapShot = await userRef.get();

        

        if(!snapShot.exists) {
                const { displayName, email } = userAuth;
                const createdAt = new Date();

                try {
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        })
                } catch (error){
                        console.log('error creating user', error.message);
                }
        }
        return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: ' select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
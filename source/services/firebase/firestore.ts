import {Firestore, getFirestore} from "@firebase/firestore";
import {createFirebaseApp} from "@/source/services/firebase";

const db: Firestore = getFirestore(createFirebaseApp());

export { db }
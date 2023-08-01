import {getFirestore} from "@firebase/firestore";
import {createFirebaseApp} from "@/source/services/firebase";

const db = getFirestore(createFirebaseApp());

export { db }
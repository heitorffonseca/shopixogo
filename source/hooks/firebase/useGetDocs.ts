import {useEffect, useState} from "react";
import {collection, DocumentData, onSnapshot} from "@firebase/firestore";
import {db} from "@/source/services/firebase/firestore";

type Params = {
    collectionName: string;
}

const useGetDocs = ({collectionName}: Params) => {
    const [documents, setDocuments] = useState<DocumentData[]>([]);
    const coll = collection(db, collectionName);

    useEffect(() => {
        const getDocs = onSnapshot(coll, snapshot => {
            const data: DocumentData[] = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            setDocuments(data)
        });

        return () => {
            getDocs();
        }
    }, []);

    return documents;
}

export { useGetDocs }
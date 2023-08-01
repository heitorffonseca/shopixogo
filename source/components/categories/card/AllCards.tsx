import React from 'react';
import {useSelector} from "react-redux";
import {DocumentData} from "@firebase/firestore";
import {RootState} from "@/source/store";

const AllCards: React.FC = () => {
    const categories: DocumentData[] | null = useSelector((state: RootState): DocumentData[] | null => state.firebase.categories)

    return (
        <>
            {!!categories?.length && categories.map((category: DocumentData) => (
                <div key={category.id}>
                    <p>{category.name}</p>
                    <p>{category.description}</p>

                    <button>visitar</button>
                </div>
            ))}
        </>
    );
}

export default AllCards;
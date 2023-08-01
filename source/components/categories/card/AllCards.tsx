import React from 'react';
import {useSelector} from "react-redux";
import {DocumentData} from "@firebase/firestore";
import {RootState} from "@/source/store";
import Card from "@/source/components/categories/card/Card";

const AllCards: React.FC = () => {
    const categories: DocumentData[] | null = useSelector((state: RootState): DocumentData[] | null => state.firebase.categories)

    return (
        <>
            {!!categories?.length && categories.map((category: DocumentData, index: number) => (
                <Card key={index}
                      id={category.id}
                      name={category.name}
                      description={category.description}
                />
            ))}
        </>
    );
}

export default AllCards;
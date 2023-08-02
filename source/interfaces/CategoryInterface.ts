import {DocumentData} from "@firebase/firestore";

interface CategoryInterface extends DocumentData {
    id: string;
    name: string;
    description?: string;
}

export type { CategoryInterface }
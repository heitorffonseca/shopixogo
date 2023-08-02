import {DocumentData} from "@firebase/firestore";

interface ProductInterface extends DocumentData {
    id: string;
    name: string;
    description?: string;
    cover_url: string;
    payment_url: string;
    person: string;
    is_active: boolean;
}

export type { ProductInterface }
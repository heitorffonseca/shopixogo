import React from "react";
import {Container} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "@/source/store";
import {ListProducts} from "@/source/components/products/ListProducts";
import {ProductInterface} from "@/source/interfaces/ProductInterface";
import {SearchInput} from "@/source/components/ui/form/SearchInput";
import Toolbar from "@mui/material/Toolbar";

const ProductSession: React.FC = () => {
    const products: ProductInterface[] | null = useSelector((state: RootState) => state.firebase.products);

    return (
        <section className='py-5'>
            <Container>
                <ListProducts products={products} />
            </Container>
        </section>
    );
}

export { ProductSession };
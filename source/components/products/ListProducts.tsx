import React, {useEffect, useState} from "react";
import {CircularProgress, Grid, Skeleton} from "@mui/material";
import {ProductCard} from "@/source/components/products/ProductCard";
import {ProductInterface} from "@/source/interfaces/ProductInterface";
import {SearchInput} from "@/source/components/ui/form/SearchInput";
import Toolbar from "@mui/material/Toolbar";
import {ProductLoader} from "@/source/components/products/ProductLoader";


type ListProductsProps = {
    products: Array<ProductInterface> | null
}

const ListProducts: React.FC<ListProductsProps> = ({ products }: ListProductsProps) => {
    const [
        productFilter,
        setProductFilter
    ] = useState<typeof products>(null);

    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleSearchKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setIsLoading(true);
        if (e.target instanceof HTMLInputElement) {
            const { value } = e.target;
            const newProductFilter = !!products?.length
                ? products.filter((product: ProductInterface) => {
                    const name = product
                        .name
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, "")
                        .toLowerCase();

                    const query = value
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, "")
                        .toLowerCase();


                    return name.includes(query)
                })
                : null;

            setProductFilter(newProductFilter);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        setIsLoading(true);

        const newProducts: ProductInterface[] | null = !!products?.length
            ? [...products].sort((a: ProductInterface, b: ProductInterface) => a.name.localeCompare(b.name))
            : null;

        setProductFilter(newProducts);
        setIsLoading(false);
    }, [products]);

    if (!productFilter || isLoading) {
        return <ProductLoader />;
    }

    return (
        <>
            <Toolbar className='justify-content-end pb-4'>
                <SearchInput handleSearchKeyUp={handleSearchKeyUp} placeholder='Buscar' arialLabel='search' />
            </Toolbar>

            <Grid container spacing={2} className='justify-content-center'>
                {productFilter.map((product: ProductInterface, index: number) => (
                    <Grid key={index} item xs={12} md={6} lg={4}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export { ListProducts };
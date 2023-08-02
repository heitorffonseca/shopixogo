import React from "react";
import Toolbar from "@mui/material/Toolbar";
import {Grid, Skeleton} from "@mui/material";

type ProductLoaderProps = {
    showSearch?: boolean
}

const ProductLoader: React.FC<ProductLoaderProps> = ({ showSearch = false }: ProductLoaderProps) => {
    const productsGridSkeletonArray: Array<any> = [...Array(10)];

    return (
        <>
            {showSearch && (
                <Toolbar className='justify-content-end pb-4'>
                    <Skeleton variant="rectangular" height={50} width={200} />
                </Toolbar>
            )}

            <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, lg: 3 }} className='justify-content-center'>
                {productsGridSkeletonArray.map((_, index: number) => (
                    <Grid key={index} item xs={12} sm={6} lg={4}>
                        <Skeleton variant="rectangular" height={600} className='br-25px' />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export { ProductLoader };
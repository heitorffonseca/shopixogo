import React from "react";
import Toolbar from "@mui/material/Toolbar";
import {Grid, Skeleton} from "@mui/material";

const ProductLoader: React.FC = () => {
    const productsGridSkeletonArray: Array<any> = [...Array(10)];

    return (
        <>
            <Toolbar className='justify-content-end pb-4'>
                <Skeleton variant="rectangular" height={50} width={200} />
            </Toolbar>

            <Grid container spacing={2} className='justify-content-center'>
                {productsGridSkeletonArray.map((_, index: number) => (
                    <Grid key={index} item xs={12} md={6} lg={4}>
                        <Skeleton variant="rectangular" height={600} className='br-25px' />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export { ProductLoader };
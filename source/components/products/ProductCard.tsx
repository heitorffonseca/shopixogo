import React, {useState} from "react";
import {DocumentData} from "@firebase/firestore";

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {ExpandMoreAction} from "@/source/components/ui/card/ExpandMoreAction";
import {ProductCardDescription} from "@/source/components/products/ProductCardDescription";
import {ProductInterface} from "@/source/interfaces/ProductInterface";

type ProductCardProps = {
    product: ProductInterface
}

const ProductCard: React.FC<ProductCardProps> = ({ product }: ProductCardProps) => {
    const [
        expanded,
        setExpanded
    ] = useState<boolean>(false);

    const handleExpandClick = () => setExpanded(!expanded);

    const handleKnowMoreClick = (paymentUrl: string) => {
        return window.open(paymentUrl, '_blank');
    }

    return (
        <Card className='product-card'>
            <CardMedia
                component="img"
                image={product.cover_url}
                alt="Paella dish"
            />

            <CardContent>
                <Typography gutterBottom variant="h6" component="div" className='text-white'>
                    {product.name}
                </Typography>

                {product.person && (
                    <Typography variant="body2" className='text-dark-blue'>
                        Por {product.person}
                    </Typography>
                )}
            </CardContent>

            <CardActions disableSpacing>
                <Button
                    onClick={e => handleKnowMoreClick(product.payment_url)}
                    className='btn btn-dark-blue btn-hover-teal-blue text-light-gray text-hover-light-gray br-25px'
                    size="small"
                >
                    Saiba mais
                </Button>

                {product.description && (
                    <ExpandMoreAction
                        expanded={expanded}
                        handleExpandClick={handleExpandClick}
                    />
                )}
            </CardActions>

            {product.description && (
                <ProductCardDescription
                    expanded={expanded}
                    description={product.description}
                />
            )}
        </Card>
    );
}

export { ProductCard };
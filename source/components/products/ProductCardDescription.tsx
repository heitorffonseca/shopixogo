import React from "react";

import Collapse from "@mui/material/Collapse";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type ProductCardDescriptionProps = {
    expanded: boolean,
    description: string
}

const ProductCardDescription: React.FC<ProductCardDescriptionProps> = ({ expanded, description }: ProductCardDescriptionProps) => {
    return (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>
                    {description}
                </Typography>
            </CardContent>
        </Collapse>
    );
}

export { ProductCardDescription }
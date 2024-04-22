import React from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import type {Product} from "@/@types/types";
interface ProductItemProps {
    product: Product
}
const ProductItem: React.FC<ProductItemProps> = ({product}) => {
    return (
        <Card key={product.id} sx={{ backgroundColor: '#f0f0f0', minWidth: '200px' }}>
            <CardContent>
                <img src={product.img} alt={product.name} style={{
                    width: '100px'
                }}/>
            </CardContent>
            <CardContent>
                <Typography
                    sx={{ display: 'block' }}
                    component="h1"
                    variant="h5"
                    color="text.primary"
                >
                    {product.name}
                </Typography>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    {product.description}
                </Typography>
                {` — $${product.price}`}
            </CardContent>
            <CardActions>
                <Button>Открыть</Button>
                <Button>Удалить</Button>
            </CardActions>
        </Card>
    );
};

export default ProductItem;

import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

type ProductProps = {
    products: Product[];
};

export default function ProductList({ products }: ProductProps) {
    return (
        <>
            <Grid container spacing={4}>
                { products.map( product => (
                    <Grid item key={product.id} xs={3}>
                        <ProductCard product={product} />
                    </ Grid>
                ))}
            </Grid>
        </>
    );
}

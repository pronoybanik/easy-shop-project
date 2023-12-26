import getProductById from '@/utils/getSingleProuduct';
import React from 'react';

const ProductDetails = async ({ params: { id } }) => {
    const { title, } = await getProductById(id)
    return (
        <div>
            product title : {title}
        </div>
    );
};

export default ProductDetails;
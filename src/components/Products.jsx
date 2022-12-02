import React, { useEffect, useState } from 'react';
import useProducts from '../hooks/use-products';

export default function Products(props) {
    const [checked, setChecked] = useState(false);
    const [loading,error,products] = useProducts({salesOnly: checked});
    const handleChange = () => {
        setChecked((prev) => !prev);
    }
    


    if(loading) return <p>Loading...</p>;
    if(error) return <p>{error}</p>;
    return (
        <div>
            <input type='checkbox' onChange={handleChange} checked={checked} />
            <label htmlFor='sale'>Sale</label>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} {product.price}
                    </li>
                ))}
            </ul>
        </div>
    );

}

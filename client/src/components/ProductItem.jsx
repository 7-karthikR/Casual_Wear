import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {

    const { currency, backendUrl } = useContext(ShopContext);

    const displayImage = Array.isArray(image) ? image[0] : image;

    const finalImage = displayImage?.startsWith('http')
        ? displayImage
        : `${backendUrl}/${displayImage}`;

        console.log("IMAGE DATA:", image);

    return (
        <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>

            <div className='overflow-hidden'>
                <img
                    className="hover:scale-110 transition ease-in-out w-full h-auto"
                    src={finalImage || '/placeholder.png'}
                    alt={name}
                />
            </div>

            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>

        </Link>
    );
};

export default ProductItem;
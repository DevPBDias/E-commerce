import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CounterProduct from '../components/details/CounterProduct';
import DetailsProductCard from '../components/details/DetailsProductCard';
import { getProductByID } from '../services/productsApi';

function DetailProduct() {
  const { id } = useParams();
  const [infoProduct, setInfoProduct] = useState();

  useEffect(() => {
    const readProductById = async () => {
      const data = await getProductByID(id);
      console.log(data);
      setInfoProduct(data);
    };
    readProductById();
  }, []);

  return (
    <div>
      <DetailsProductCard
        category={infoProduct?.category}
        warranty={infoProduct?.warranty}
        image={infoProduct?.thumbnail}
        name={infoProduct?.title}
        price={infoProduct?.price}
        soldQty={infoProduct?.sold_quantity}
      />
      <CounterProduct
        name={infoProduct?.title}
        image={infoProduct?.thumbnail}
        price={infoProduct?.price}
      />
    </div>
  );
}

export default DetailProduct;

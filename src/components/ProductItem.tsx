// tsrafce
import React from "react";
import { IProductItemList } from "../type/productType";

type Props = {
  shoe: IProductItemList;
  title?: string;
};

const ProductItem = ({ shoe }: Props) => {
  return (
    <div className="border rounded-md p-5 shadow space-y-3">
      <img src={shoe.image} alt="" />
      <h2 className="text-2xl font-semibold">{shoe.name}</h2>
      <p>{shoe.price}</p>
      <button className="bg-black text-white px-5 py-3 rounded-md">
        Mua ngay
      </button>
    </div>
  );
};

export default ProductItem;

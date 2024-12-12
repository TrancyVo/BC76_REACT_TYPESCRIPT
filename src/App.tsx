import { useEffect, useState } from "react";
// import axios from "axios";
import { IProductItemList } from "./type/productType";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchAllProduct } from "./redux/productSlice";
import ProductItem from "./components/ProductItem";

function App() {
  /* const [listItem, setListItem] = useState<IProductItemList[]>();
  //  GET data from API
   useEffect(() => {
     axios({
       url: "https://shop.cyberlearn.vn/api/Product",
       method: "GET",
     })
       .then((res) => {
         console.log(res);
         const dataBe: IProductItemList[] = res.data.content;
         setListItem(dataBe);
       })
       .catch((err) => {
         console.log(err);
       });
   }, []); */
  const dispatch = useAppDispatch();
  const { listProduct } = useAppSelector((state) => {
    return state.productSlice;
  });

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, []);

  return (
    <>
      <h1 className="text-red-500">Bài tập render</h1>
      <div className="grid grid-cols-5 gap-5">
        {/* {listItem?.map((item, index) => {
          return (
            <div key={index} className="border rounded-md p-5 shadow space-y-3">
               <img src={item.image} alt="" />
               <h2 className="text-2xl font-semibold">{item.name}</h2>
               <p>{item.price}</p>
               <button className="bg-black text-white px-5 py-3 rounded-md">
                 Mua ngay
               </button>
               </div> *
            <ProductItem shoe={item} title="abc" />
          );
        })} */}
        {listProduct?.map((item, index) => {
          return <ProductItem key={index} shoe={item} />;
        })}
      </div>
    </>
  );
}

export default App;

/* Tạo file lưu trữ type của dự án
Thư mục src -> Tạo thư mục type -> Tạo file productType.ts :
export interface IProductItemList {
 //Copy cấu trúc 1 object được trả về từ API -> Paste qua trang https://app.quicktype.io/ để định dạng KDL cho từng key trong object (lưu ý: source type: JSON | Language: Typescript)
}
*/

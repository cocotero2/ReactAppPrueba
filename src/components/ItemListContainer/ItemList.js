import { products } from "../../utils/fetchCustom";
import CardList from "../CardList/CardList";

const ItemList = ({ product }) => {
  return ( 
    <>
      {products.map((product) => <CardList product={product}/> )}
    </>
   );
}
 
export default ItemList;
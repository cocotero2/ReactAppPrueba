import { useEffect, useState } from "react";
import { getProducts } from "../../utils/fetchCustom";
import CardList from "../CardList/CardList";

const ItemListContainer = (props) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(result => setProducts(result))
  },[])
  
  return (  
    <>
      <h1>{props.title}</h1>
      <CardList products={products}/>
    </>
  );
}
 
export default ItemListContainer;
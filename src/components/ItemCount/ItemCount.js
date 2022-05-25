import { useState } from "react";
import { Button } from "react-bootstrap";
import "./ItemCount";

const ItemCount = () => {
  const [count, setCount] = useState(1);
  const [stock, setStock] = useState(10);

  const addCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const removeCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="item-count">
        <Button variant="outline-info" onClick={removeCount}>
          -
        </Button>
        <p>{count}</p>
        <Button variant="outline-info" onClick={addCount}>
          +
        </Button>{" "}
      </div>
    </>
  );
};

export default ItemCount;

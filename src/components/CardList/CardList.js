import { Card, CardGroup } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

const CardList = ({product}) => {

  const {title, price, image, stock, description}= product

  return ( 
    <CardGroup>
  <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <ItemCount initial={1} stock={stock} />
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <ItemCount initial={1} stock={stock} />
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <ItemCount initial={1} stock={stock} />
    </Card.Footer>
  </Card>
</CardGroup>
   );
}
 
export default CardList;
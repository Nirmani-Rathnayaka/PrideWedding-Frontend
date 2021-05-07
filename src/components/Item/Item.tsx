import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../App2';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
   
      <div className="card text-center">
    
    <img className="card-img-top-responsive-center" width="250" height="250" src={item.imageSrc} alt={item.companyName}/>
    <div>
      <h3>{item.companyCategory}</h3>
      <h4>{item.companyName}</h4>
     
      <h3>{item.min_package}$</h3>
      <h4>{item.companyWebsite}</h4>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </div>
  </Wrapper>
);

export default Item;

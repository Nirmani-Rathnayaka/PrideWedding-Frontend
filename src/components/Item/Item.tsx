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
   
      
    
    <img src={item.imageSrc} alt={item.companyName}/>
    <div>
      <h2>{item.companyCategory}</h2>
      <h3>{item.companyName}</h3>
     
      <h3>{item.min_package}$</h3>
      <h4>{item.companyWebsite}</h4>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;

import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {

const {shoppingCart,onProductCountChange} = useShoppingCart()

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style = {{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
        
        { products.map( product =>           
            <ProductCard
              key = {product.id}
              product = {product}
              className = 'bg-dark text-bold'
              onChange = {(event) => onProductCountChange(event)}
              value = {shoppingCart[product.id]?.count || 0}
            >
              <ProductImage className = 'custom-image'/>
              <ProductTitle className = 'text-white'/>
              <ProductButtons className = 'custom-buttons'/>
            </ProductCard>)
        }
        </div>

        <div className = 'shoping-cart'>
        {
        Object.entries(shoppingCart).map( ([id, productCart]) =>    
            <ProductCard
              key = {id}
              product = {productCart}
              className = 'text-white bg-dark'
              style = {{width:'100px'}}
              onChange = {(event) => onProductCountChange(event)}
              value = {productCart.count}
            >
              <ProductImage className = 'custom-image'/>
              <ProductButtons className = 'custom-buttons'/>
            </ProductCard>)
        }
        </div>

      </div>
    )
}


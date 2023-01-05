import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

const product = products[0]

export const ShoppingPage = () => {

const {shoppingCart,onProductCountChange} = useShoppingCart()

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        
        {           
            products.map(product => <ProductCard
              key = {product.id}
              product = {product}
              className = 'bg-dark text-bold'
              onChange = {(event) => onProductCountChange(event)}
              value = {shoppingCart[product.id]?.count || 0}
              initialValues = {{maxCount:10, count:4}}
            >
              {
              (message) => (
              <>
                <ProductImage className = 'custom-image'/>
                <ProductTitle className = 'text-white'/>
                <ProductButtons className = 'custom-buttons'/>
                <h1>{message}</h1>
              </>
              )
            }

            </ProductCard>)
        }
    </div>
  )
}


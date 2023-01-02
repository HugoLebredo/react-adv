import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'

const product = {
    title: 'Coffee Mug - Card',
    img: './public/coffee-mug.png',
    id: '1'
}

const product2 = {
  title: 'Coffee Mug - Meme',
  img: './public/coffee-mug2.png',
  id: '2'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style = {{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            <ProductCard product = {product} className = 'bg-dark text-bold'>
              <ProductImage className = 'custom-image'/>
              <ProductTitle className = 'text-white'/>
              <ProductButtons className = 'custom-buttons'/>
            </ProductCard>

            <ProductCard product = {product2} className = 'bg-dark text-bold'>
              <ProductCard.Image className = 'custom-image'/>
              <ProductCard.Title title='helllo' className = 'text-white'/>
              <ProductCard.Buttons  className = 'custom-buttons'/>
            </ProductCard>
        </div>
    </div>
  )
}

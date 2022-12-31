import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

const product = {
    title: 'Coffee Mug - Card',
    img: './public/coffee-mug.png',
    id: '1'
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
            <ProductCard product = {product}>
              <ProductImage />
              <ProductTitle />
              <ProductButtons/>
            </ProductCard>

            <ProductCard product = {product}>
              <ProductCard.Image />
              <ProductCard.Title title="helllo"/>
              <ProductCard.Buttons/>
            </ProductCard>
        </div>
    </div>
  )
}

import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interfaces"

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{[key:string]:ProductInCart}>({})
    
    const onProductCountChange = ({product, count}:{product:Product, count:number}) => {
    
    setShoppingCart( oldShoppingCart => {

            
            if (count === 0) {
            const {[product.id]: toDelete,...rest} = oldShoppingCart
            return rest
            }

            return {...oldShoppingCart,[product.id]:{...product, count}}

        })
    }
    return {shoppingCart,onProductCountChange}
}


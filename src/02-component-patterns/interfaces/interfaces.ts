import { Props as ProductButtonsProps} from '../components/ProductButtons'
import {Props as ProductCardProps} from '../components/ProductCard'
import { Props as ProductImageProps } from '../components/ProductImage'
import { Props as ProductTitleProps} from '../components/ProductTitle'

export interface Product {
    img: string,
    title: string,
    id: string
}

export interface ProductContextProps {
    counter: number,
    increaseBy: (value:number) => void,
    maxCount?: number
    product: Product,
}

export interface ProductCardHOCProps {
    ({children, product}:ProductCardProps):JSX.Element,
    Title: (Props:ProductTitleProps) => JSX.Element,
    Image: (Props:ProductImageProps) => JSX.Element,
    Buttons: (Props:ProductButtonsProps) => JSX.Element,
}

export interface onChangeArgs {
    product:Product,
    count:number
}

export interface ProductInCart extends Product {
    count: number
  }

export interface InitialValues {
    count: number,
    maxCount: number
}
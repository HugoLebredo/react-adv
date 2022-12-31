import { ReactElement } from 'react'

export interface ProductCardProps {
    product: Product,
    children?: ReactElement[]
}

export interface Product {
    img: string,
    title: string,
    id: string
}

export interface ProductContextProps {
    increaseBy: (value:number) => void,
    counter: number,
    product: Product,
}
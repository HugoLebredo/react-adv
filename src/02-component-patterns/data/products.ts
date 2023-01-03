import { Product } from "../interfaces/interfaces"

const product1:Product = {
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png',
    id: '1'
}

const product2:Product = {
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png',
    id: '2'
}

export const products:Product[] = [product1, product2]
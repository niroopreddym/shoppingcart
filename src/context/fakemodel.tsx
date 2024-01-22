export interface Product {
    id: string;
    name: string;
    price: string;
    image: string;
    inStock: number;
    fastDelivery: boolean;
    ratings: number;
  }

export interface Cart{

}

export interface ReducerState{
    products: Product[]
    cart: Cart
}
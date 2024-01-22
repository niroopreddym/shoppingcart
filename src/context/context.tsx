import React, { ReactNode, createContext, useReducer } from "react";
import { faker } from '@faker-js/faker';
import { Product } from "./fakemodel";

//defien model for th context binding
interface MyContext {
  userName: string;
  userId: string;
  products: Product[];
}

//create a context
const Cart = createContext<MyContext | undefined>(undefined);

interface MyContextProviderProps {
  children?: ReactNode;
}

//create a context FC
const Context: React.FC<MyContextProviderProps> = ({ children }) => {
  const products: Product[] = Array.from({ length: 20 }, () => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const ctxValue: MyContext = {
    userName: "Niroop",
    userId: "1",
    products: products
  };

  console.log(products)
  const [state, dispatch] = useReducer(cartReducer, {
    products,
    Cart
  }, init)
  return <Cart.Provider value={ctxValue}>{children}</Cart.Provider>;
};

// export const useMyContext = () => {
//   const context = useContext(Cart);
//   if (!context) {
//     throw new Error('useMyContext must be used within a MyContextProvider');
//   }

//   return context;
// };

export default Context;

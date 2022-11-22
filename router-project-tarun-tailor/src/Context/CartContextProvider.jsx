import { createContext, useContext, useState} from 'react';
import { AuthContext } from './AuthContextProvider';

export const CartContext = createContext();

const CartContextProvider = ({children})=>{
    const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [disable, setDisabled] = useState(JSON.parse(localStorage.getItem('disabled'))|| []);
    const [ordered, setOrdered] = useState(JSON.parse(localStorage.getItem('ordered')) || []);
    const {isAuth} = useContext(AuthContext)

    const addToCart = (product, id)=>{
        if(isAuth==="false"){
            alert("Please login to add product in the cart!");
        }
        else{
            setCartData([...cartData,product]);
            handleDisabled(id)
        }
    }
    localStorage.setItem('cart', JSON.stringify(cartData));
    

    const handleDisabled = (id)=>{
        setDisabled([...disable, id]);
    }
    localStorage.setItem("disabled", JSON.stringify(disable))
    
    const handleRemove = (id)=>{
        let removed = disable.filter((elem)=>{
            return Number(elem)!==id;
        })
        setDisabled(removed);
        let removeCart = cartData.filter((elem)=>elem.id!==id)
        setCartData(removeCart);
    }

    const handleCheckout = ()=>{
        setOrdered([...ordered,...cartData]);
        setCartData([]);
        setDisabled([]);
    }
    localStorage.setItem("ordered",JSON.stringify(ordered));

    return <CartContext.Provider value={{cartData,addToCart, disable, handleRemove, handleCheckout,ordered}} >
        {children}
    </CartContext.Provider>
}
export default CartContextProvider
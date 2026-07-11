import { AddToCartIcon,ClearCartIcon,CartIcon } from '../mocks/Icons.jsx'
import { useId } from 'react'
import './Cart.css'
export default function Cart(){
    const cartCheckBoxId=useId()
    return(
        <>
        <label htmlFor={cartCheckBoxId} className='cart-button'> 
            <CartIcon/>
        </label>
        <input id={cartCheckBoxId} type='checkbox' hidden/> 

        <aside className='cart'>
            <ul>
                <li>
                    <img 
                    src='https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp'
                    alt='imagen de muestra'
                    />
                    <div>
                        <strong>Prueba</strong>-$199
                    </div>
                    <footer>
                        <small> Qty:1</small>
                    </footer>
                     <button>+</button>
                </li>
            </ul>

            <button> <ClearCartIcon/> </button>
        </aside>
        </>

    )
}
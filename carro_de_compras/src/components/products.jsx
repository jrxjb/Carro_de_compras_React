import { AddToCartIcon } from "../mocks/Icons"
import '../components/products.css'
export default function Products ({products}){
    return(
        <>
        <section className="products">
            <ul>
                {products.map((product)=>{
                    return(
                    
                    <li key={product.id}>
                        <img src={product.thumbnail}/>
                        <div>
                            <strong>{product.title}</strong> -${product.price}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon/>
                            </button>
                        </div>
                    </li>
                )
                })}
            </ul>
        </section>
        </>
    )
}
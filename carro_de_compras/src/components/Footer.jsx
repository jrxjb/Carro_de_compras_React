import './Footer.css'

import { SiReact } from "react-icons/si"; 
import { AiFillFire } from "react-icons/ai";
export default function Footer(){
    return(
        <>
        <section className='Footer'>
            <div>
                <h4>Carro de Compras 
                <span>@gregory_zam <AiFillFire/></span></h4>
            </div>
            <h5>Practicando  useContext y useReducer  <SiReact size="1em" color="#61DAFB" />  </h5>
        </section>
        </>
    )
}
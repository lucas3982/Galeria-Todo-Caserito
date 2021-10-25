import React from 'react'
import { Link } from "react-router-dom";

import Hambur3 from '../images/hambur.jpg'
import Hamburg3 from '../images/hamburg.jpg'
import Hamburgu3 from '../images/hamburgu.jpg'
import Lomito3 from '../images/lomito.jpg'
import Lomitos3 from '../images/lomitos.jpg'
import Pizza3 from '../images/pizza.jpg'
import Pizzap3 from '../images/pizzap.jpg'
import Pizzapi3 from '../images/pizzapi.jpg'


const Navegacion = () => {
    return (
     <div className="container mt-3 padre">
         <Link to="/Hambur" className="Links">
            <figure>
                <img src={Hambur3} alt="" className="tamaño-img"/>
                <figcaption>Hambur</figcaption>
            </figure>
        </Link>

        <Link to="/Hamburg" className="Links">
            <figure>
                <img src={Hamburg3} alt="" className="tamaño-img"/>
                <figcaption>Hamburg</figcaption>
            </figure>
        </Link>

        <Link to="/Hamburgu" className="Links">
            <figure>
                <img src={Hamburgu3} alt="" className="tamaño-img"/>
                <figcaption>Hamburgu</figcaption>
            </figure>
        </Link>

        <Link to="/Lomito"className="Links">
            <figure>
                <img src={Lomito3} alt="" className="tamaño-img"/>
                <figcaption>Lomito</figcaption>
            </figure>
        </Link>

        <Link to="/Pizza" className="Links">
            <figure>
                <img src={Pizza3} alt="" className="tamaño-img"/>
                <figcaption>Pizza</figcaption>
            </figure>
        </Link>

        <Link to="/Pizzap" className="Links">
            <figure>
                <img src={Pizzap3} alt="" className="tamaño-img"/>
                <figcaption>Pizzap</figcaption>
            </figure>
        </Link>

        <Link to="/Pizzapi" className="Links">
            <figure>
                <img src={Pizzapi3} alt="" className="tamaño-img"/>
                <figcaption>Pizzapi</figcaption>
            </figure>
        </Link>
    </div>
    )
}

export default Navegacion

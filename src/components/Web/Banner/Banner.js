import React from 'react'
import Portada from "../../../assets/img/jpg/banner.jpg";
import "./Banner.scss";

export default function Banner() {
    return (
        <div class="full-width port"> 
            <img src={Portada} alt="" class="port" />
           
        </div>
    )
}


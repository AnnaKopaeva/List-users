import React from 'react'

//style
import './preloader.sass'

//images
import Loader from './images/loader.gif'

const PreLoader = () => (
    <div className="preloader">
        <img src= {Loader}
             alt="loader"
        />
    </div>
)

export default PreLoader;

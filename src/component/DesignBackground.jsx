import React, { useState } from 'react'
import rick from '/img/rick.webp'
import Loading from './Loading'
import 'animate.css'


const DesignBackground = () => {

    const [load, setload] = useState(true)

    const handleLoad = () => {
        setload(false)
    }

    return (
        <div className='background__img'>
            {load && <Loading/>}
           <img className={load ? "" : "animate__animated animate__backInDown"} onLoad={handleLoad} src={rick} alt="" />
        </div>
    )
}

export default DesignBackground
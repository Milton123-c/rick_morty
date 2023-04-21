import React, { useState } from 'react'
import Loading from './Loading'

export const DesignFilterCard = ({element}) => {
    const [load, setLoad] = useState(true)


    const handleLoad = () => {
        setLoad(false)
    }
   
    
    

  return (
    <article className='header__article animate__animated animate__fadeInDown'>


    <div className='header__status'>
        <div className={`header__status--color ${element?.status} `}>

        </div>
        {element?.status}
    </div>

    <div className='header__img'>

        {load && <Loading />}

       
        <img onLoad={handleLoad} className='animate__animated animate__zoomIn' src={element?.image} alt="Una imagen" />
         


    </div>

    <article className='header__container'>
        <h2 className='header__name'>
            {element?.name}
        </h2>

        <hr />

        <ul className='header__ul'>
            <li className='header__li'><span className='header__span'>Specie</span>{element?.species}</li>
            <li className='header__li'><span className='header__span'>Origin</span>{element?.origin.name}</li>
            <li className='header__li'><span className='header__span'>Eppisodes where appear</span> <span className='span__circle'> {element?.episode.length}</span></li>
        </ul>
    </article>

</article>


  )
}

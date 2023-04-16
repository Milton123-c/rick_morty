import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFecth'
import 'animate.css';
import Loading from './Loading';

const DesignCards = ({ url }) => {
    const [load, setLoad] = useState(true)

    const { state } = useFetch(url)

    const datas = state;

    const handleLoad = () => {
        setLoad(false)
    }

    return (

        <article className='header__article animate__animated animate__fadeInDown'>


            <div className='header__status'>
                <div className={`header__status--color ${datas?.status} `}>

                </div>
                {datas?.status}
            </div>

            <div className='header__img'>

                {load && <Loading />}

               
                <img onLoad={handleLoad} className='animate__animated animate__zoomIn' src={datas?.image} alt="Una imagen" />
                 


            </div>

            <article className='header__container'>
                <h2 className='header__name'>
                    {datas?.name}
                </h2>

                <hr />

                <ul className='header__ul'>
                    <li className='header__li'><span className='header__span'>Specie</span>{datas?.species}</li>
                    <li className='header__li'><span className='header__span'>Origin</span>{datas?.origin.name}</li>
                    <li className='header__li'><span className='header__span'>Eppisodes where appear</span> <span className='span__circle'> {datas?.episode.length}</span></li>
                </ul>
            </article>

        </article>


    )
}

export default DesignCards
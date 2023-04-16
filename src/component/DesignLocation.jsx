import React, { useState } from 'react';
//import style from 'styled-components'

const DesignLocation = ({url, datas}) => {

    

    return (
        <article className='location'>
            
            <h1 className='title'>{datas?.name}</h1>

            <article className='location__container'>
                <ul className='location__container--ul'>
                    <li className='location__li'>type: <span className='location__span'>{datas?.type}</span> </li>
                    <li className='location__li'>Dimension: <span className='location__span'>{datas?.dimension}</span> </li>
                    <li className='location__li'>Potulation:  <span className='location__span'>{datas?.residents.length}</span></li>
                </ul>
            </article>

        </article>
    )
}


export default DesignLocation


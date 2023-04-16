import React, { useEffect, useRef, useState } from 'react'

const DesignSearh = ({setIndex, endError}) => {
    const [value, setValue] = useState(1)
    const [errors, seterrors] = useState(endError)

    const search = useRef()

    const handleSearch = (e) => {
        e.preventDefault()
        
        const values = search.current.value;
            setIndex(values)
        
    }

    useEffect(()=>{
        seterrors(endError)
    },[endError])

  return (
    <div className='form__container'>

        <form className='form' onSubmit={handleSearch}>

            <input ref={search} name='search' id='search' type="number" className='search' placeholder='Type here your search' />
            <input type="submit" value="Search" className='submit' />

        </form>

        {
            errors ?
            <div className='errors'>
                <h1>❌Hey! you must provide an id from 1 to 126 😰</h1>
            </div> :
            ""
        }

    </div>
  )
}

export default DesignSearh
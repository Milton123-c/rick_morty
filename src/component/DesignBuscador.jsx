import React, { useEffect, useRef, useState } from 'react'
import { useFetch } from '../hooks/useFecth';
import axios from 'axios';
import '../style/formUl.css';
import { DesignLi } from './DesignLi';

const DesignBuscador = ({ buscar, setSearhData }) => {

    const [datas, setDatas] = useState()
    const [search, setSearch] = useState();
    const [findData, setFindData] = useState()


    useEffect(() => {

        if (buscar) {

            let dt = []

            buscar?.residents.forEach(element => {

                axios.get(element)
                    .then(res => dt.push(res.data))
                    .catch(err => console.log(err))


            });

            setDatas(dt)

        }

    }, [buscar])


    const find = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();

        if (find.current.value) {



            const newD = datas?.find(element => element.name == find.current.value)

            if (newD) {
                setSearhData([newD])
                setSearch()
            }



        } else {
            setSearhData()


        }


    }

    useEffect(() => {

        if (findData) {
            find.current.value = findData;
            setFindData()
        }



    }, [findData])

    const handleChange = () => {


        setSearch(undefined)

        const valu = find.current.value;

        if (!valu) return setSearhData();



        let dts = []


        datas.forEach((element, index) => {

            if (element.name.toLowerCase().includes(valu.toLowerCase())) {

                const newData = { keys: index, values: element.name }

                dts.push(newData)

            }

        });

        
        if(dts?.length){
            setSearch(dts)
        }
        

    }



    return (
        <div className='form__container'>

            <form className='form prin' onSubmit={handleSubmit}>

                <div className='form__column'>
                    <input onChange={handleChange} placeholder='Search by name' type="search" ref={find} className='search index' />
                    <input type="submit" value="Search by name" className='submit' />

                </div>
                {
                    search ?
                        <>
                            <ul className='form__ul'>
                                {
                                    search?.map(sear => (
                                        <DesignLi
                                            key={sear.keys}
                                            values={sear.values}
                                            setFindData={setFindData}
                                            setSearch={setSearch}
                                        />
                                    ))
                                }
                            </ul>
                        </>
                        :

                        ""
                }

            </form>
        </div>
    )
}

export default DesignBuscador
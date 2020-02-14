import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'

const getUnique = (items, value)=>{
    return [...new Set(items.map(item => item[value]))]
}

const RoomFilter = ({rooms})=>{

    const context = useContext(RoomContext);
    const {
        type, 
        handlechange,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context 

    let types = getUnique(rooms, 'type')

    types = ['all', ...types]

    types = types.map((item,index)=>{
    return <option value={item} key={index}>{item} </option>
    })

    let people = getUnique(rooms, 'capacity')
    people = people.map((item,index)=>{
    return <option key={index} value={item}>{item} </option>
    })

    return(
        <section className='filter-container'>
            <Title title='Search Room'/>
            <form className='filter-form'>
                <div className='form-group'>
                    <label htmlFor='type'>room type</label>
                    <select name='type' id='type' value={type} 
                    className='form-control' onChange={handlechange}>{types} </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='capacity'>Guests</label>
                    <select name='capacity' id='capacity' value={capacity} 
                    className='form-control' onChange={handlechange}>{people} </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='price'>rooms price ${price} </label>
                    <input type='range' name='price' min={minPrice} max={maxPrice}
                     id='price' value={price} onChange={handlechange} className='form-control' />
                </div>
                <div className='form-group'>
                    <div className='single-extra'>
                        <input type='checkbox' name='breakfast' id='breakfast'
                         checked={breakfast} onChange={handlechange} />
                        <label htmlFor='breakfast'>breakfast </label>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default RoomFilter 
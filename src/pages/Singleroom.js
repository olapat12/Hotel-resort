import React from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import Banner from '../components/Banner'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'

class Singleroom extends React.Component{
    constructor(props){
        super(props)
        this.state = {slug: this.props.match.params.slug}
    }

    static contextType = RoomContext;

    render(){
            const {getRoom} = this.context
            const room = getRoom(this.state.slug);
            if(!room){
                return <div className='error'>
                    <h3>no such room could be found</h3>
                    <Link className='btn-primary' to='/rooms'>
                        back to rooms 
                    </Link>
                </div>
            }
            const {name,description,capacity,size,price,extras,breakfast,images,pets} = room;
        return(
            <>
            <StyledHero img={images[0]}>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary'>
                        back to rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className='single-room'>
                <div className='single-room-images'>
                {images.map((item,index)=>{
                  return  <img key={index} src={item}/>
                })}
                </div>
                <div className='single-room-info'>
                    <article className='desc'>
                        <h3>Details</h3>
                        <p>{description} </p>

                    </article>
                    <article className='info'>
                        <h3>Info</h3>
                        <h6>Price: ${price} </h6>
                        <h6>Size: {size}SQFT </h6>
                        <h6>Max capacity: {capacity}people </h6>
                        <h6>{pets ? "pets allowed" : "no pet allowed"} </h6>
                        <h6>{breakfast && "free breakfast included"} </h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>
                    extras
                </h6>
                <ul className='extras'>
                    {extras.map((item, index)=>{
                    return <li key={index}>- {item} </li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}

export default Singleroom; 
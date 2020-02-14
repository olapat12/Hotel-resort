import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import Featuredroom from '../components/FeaturedRoom'
import Button from '../components/StyledHero'

const Home = ()=>{

    return(
        <div>
            <>
            <Hero>
            <Banner title='Luxurious rooms' subtitle='Deluxe rooms starting at $250'>
                <Link to='/rooms' className='btn-primary'>Our rooms</Link>
            </Banner>
            </Hero>
            <Services />
            <Featuredroom/>
            <Button>Hello</Button>
            </>
        </div>
    )
}

export default Home; 
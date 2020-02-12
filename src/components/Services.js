import React from 'react'
import Title from '../components/Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends React.Component{

    state={services:[
     {
        icon:<FaCocktail/>,
        title:'Free Cocktail',
        info:'You do not want to make me get mad at you for spying at my project, please do not that again. '
    },
    {
        icon:<FaHiking/>,
        title:'Endless Hiking',
        info:'You do not want to make me get mad at you for spying at my project, please do not that again. '
    },
    {
        icon:<FaShuttleVan/>,
        title:'Free Shuttle',
        info:'You do not want to make me get mad at you for spying at my project, please do not that again. '
    },
    {
        icon:<FaBeer/>,
        title: 'Strongest Beer',
        info:'You do not want to make me get mad at you for spying at my project, please do not that again. '
    },
    ]
  }

    render(){
        return(
            <section className='services'>
                <Title title='Services' />
                <div className='services-center'>
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className='services'>
                            <span>{item.icon} </span>
                            <h5>{item.title} </h5>
                            <p>{item.info} </p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}

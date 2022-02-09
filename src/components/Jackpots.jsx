import React, { Component } from 'react';
import JackpotsList from './JackpotsList';
import './Jackpots.css';

class Jackpots extends Component {
    render() {
        return(
            <div className='jackpots'>
                   <div className='jackpots-list'>
                   {JackpotsList.map((item , index) => {
                        return(
                            <div  key={item.id} className={item.cName}>
                                <div className='ellipse' ><img  src={item.icon} alt={"Error displaying vector"} /></div>
                                <div className='texts-section'>
                                <h5 className='title'> {item.title}</h5>
                                <p className='describtion'> {item.describtion}</p>
                                </div>
                                 
                                 </div>
                        )
                        
                    })}

                   </div>
                
            </div>
        )
     
    }
}

export default Jackpots;
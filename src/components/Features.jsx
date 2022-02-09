import React, { Component } from 'react';
import FeaturesList from './FeaturesList';
import './Features.css';

class Features extends Component {
    render() {
        return(
            <div className='features'>
                    <div className='Awesome_apps_features'>
                        <h5>Awesome apps features</h5>
                        <p> Increase productivity with a simple to-do app. app for managing your
            personal budget.</p>
                    </div>
                   <div className='features-list'>
                   {FeaturesList.map((item , index) => {
                        return(
                            <div  key={item.id} className={item.cName}>
                                <div className='ellipse' ><img  src={item.icon} alt={"Error displaying vector"} /></div>
                                <div>
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

export default Features;
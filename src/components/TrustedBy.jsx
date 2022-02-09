import React, { Component } from 'react';
import TrustedList from './TrustedList';
import './trust.css';

class TrustedBy extends Component {
    render() {
        return(
            <div className='companies'>

                    {TrustedList.map((item , index) => {
                        return(
                            <div  key={item.id} className={item.cName}> <img  src={item.url} alt={"Error displaying company number " + item.id + " Logo"} /></div>
                        )
                        
                    })}
                
            </div>
        )
     
    }
}

export default TrustedBy;
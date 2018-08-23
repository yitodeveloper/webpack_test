import React, {Component} from 'react'
import Web from './web.js'

export default class Webs extends Component{
    render(){
        return(
            <ul className="Webs">
                {this.props.data.webs.map((webData,index) => {
                    return <Web {...webData} key={index}/>
                })}
            </ul>
        )
    }
}
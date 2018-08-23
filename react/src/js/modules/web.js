import React from 'react'

export default function Web(props){
    return (
        <li className="Web" >
            {props.name} <a href={`${props.website}`}>Sitio</a>
        </li>
    )
}
import React from 'react'
import reactlogo from '../assets/react.svg'
import './Header.css'


class Header extends React.Component{
    render(){
        return(
            <header>
                <img src={reactlogo} alt="logo" />
                <h1>Lista de Leads</h1>
            </header>
        )
    }
}



export default Header;
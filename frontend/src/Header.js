import React from 'react'

const Header = ({title, subtitle}) => {
    return (
        <header>
            <h1 className = "opening-page-title">{title}</h1>
            <h2 className = "opening-page-subtitle">{subtitle}</h2>
        </header>
    )
}

export default Header;
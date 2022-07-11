import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Menu, Typography } from 'antd'

import logo from '../images/btc.png'
import MenuItem from 'antd/lib/menu/MenuItem'
const { Title, Text } = Typography

const Navbar = () => {

    return (
        <>
            <div className='nav-container'>
                <div className='logo-container'>
                    <Avatar src={logo} className='nav-logo'></Avatar>
                    <Title level={3} className='nav-logo-title'>
                        <Link to='/'>Crypto Dashboard</Link>
                    </Title>
                </div>
                <Menu className='nav-menu' theme='dark'>
                    <MenuItem>
                        <Link className='nav-link' to='/'>Home</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link className='nav-link' to='/cryptocurrencies'>Cryptocurrencies</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link className='nav-link' to='/news'>News</Link>
                    </MenuItem>
                </Menu>
            </div>
        </>
    )
}

export default Navbar

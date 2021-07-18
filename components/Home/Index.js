import React from 'react'
import Amenities from './Amenities'
import Client from './Client'
import Contact from './Contact'
import Disclammer from './Disclammer'
import Footer from './Footer'
import Header from './Header'
import Location from './Location'
import Overview from './Overview'

const index = () => {
    return (
        <div>
            <Header/>
            <Overview/>
            <Amenities/>
            <Location/>
            <Client/>
            <Contact/>
            <Disclammer/>
            <Footer/>
        </div>
    )
}

export default index

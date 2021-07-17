import React from 'react'
import Amenities from './Amenities'
import Client from './Client'
import Contact from './Contact'
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
        </div>
    )
}

export default index

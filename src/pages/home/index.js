import React from 'react'
import { Helmet } from 'react-helmet'
import { Contacts, Experience, Landing, Navbar, Skills, Artwork, Projects } from '../../components'
import { headerData } from '../../data/headerData'

function HomePage() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>
            <Navbar />
            <Landing />
            {/* <Experience />
            <Skills /> */}
            <Projects />
            <Artwork />
            {/* <Contacts /> */}
        </div>
    )
}

export default HomePage

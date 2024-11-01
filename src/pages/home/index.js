import React from 'react'
import { Helmet } from 'react-helmet'
import { Contacts, Experience, Landing, Navbar, Skills, Artwork, Projects, UnderConstruction } from '../../components'
import { headerData } from '../../data/headerData'

function HomePage() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>
            <Navbar />
            <Landing />
            <UnderConstruction />
            {/* <Experience />
            <Skills /> */}
            <Projects />
            <Artwork />
            {/* <Contacts /> */}
        </div>
    )
}

export default HomePage

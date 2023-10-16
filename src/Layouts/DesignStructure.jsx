import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function DesignStructure({ children }) {
    return (
        <div className="d-flex flex-column h-100">
            <main className="flex-shrink-0">
                <Navbar></Navbar>
            </main>
            {children}
            <Footer></Footer>
        </div>
    )
}

export default DesignStructure
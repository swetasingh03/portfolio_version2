import React from 'react'

function Footer() {
    return (
        <footer className="bg-white py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-center flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0">Copyright &copy; Web Dev Sweta {new Date().getFullYear()}</div></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
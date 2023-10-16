import React from 'react';
import ProjectData from '../JsonData/ProjectData';
import { Link } from 'react-router-dom';

function Project() {
  return (
    <>
      <section className="py-5">
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              {ProjectData && ProjectData.map((data, key) => {
                return (
                  <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                    <div className="card-body p-0">
                      <div className="d-flex align-items-center projects-section">
                        <div className="p-5" id={key}>
                          <h3 className="fw-bolder">{data.name}</h3>
                          <a href={data.siteUrl} target='_blank' style={{ textDecoration: 'none' }}>Explore</a>
                          <p>{data.description}</p>
                        </div>
                        <img className="img-fluid mb-4" width="250" src={data.image} alt="..." />
                      </div>
                    </div>
                  </div>
                )
              })
              }
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-gradient-primary-to-secondary text-white">
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
            <Link className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" to="/contact">Contact me</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project
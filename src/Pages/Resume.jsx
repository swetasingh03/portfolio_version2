import React from 'react'
import resume from '../Assets/Files/swetaDev.pdf';
import htmlLogo from '../Assets/Images/html.png';
import cssLogo from '../Assets/Images/css.png';
import sassLogo from '../Assets/Images/sass.png'
import jsLogo from '../Assets/Images/javascript.png';
import reactLogo from '../Assets/Images/react.png';
import reduxLogo from '../Assets/Images/redux.png';
import nodeLogo from '../Assets/Images/node.png';
import expressLogo from '../Assets/Images/express.png';
import mysqlLogo from '../Assets/Images/mysql.png';
import bootstrapLogo from '../Assets/Images/bootstrap.png';
import materialLogo from '../Assets/Images/material.png';
import chakraLogo from '../Assets/Images/chakra.png';
import vsTool from '../Assets/Images/vs.png';
import gitTool from '../Assets/Images/git.png';
import postmanTool from '../Assets/Images/postman.png';
import jiraTool from '../Assets/Images/jira.png';
import githubTool from '../Assets/Images/github.png';
import npmTool from '../Assets/Images/npm.png';

function Resume() {
  return (
    <div className="container px-5 my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="col-lg-11 col-xl-9 col-xxl-8">
          <section>
            <div className="d-flex align-items-center justify-content-between mb-4 resume-section">
              <h2 className="text-primary fw-bolder mb-0">Experience</h2>
              <a className="btn btn-primary px-4 py-3" href={resume} download>
                <div className="d-inline-block bi bi-download me-2"></div>
                Download Resume
              </a>
            </div>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-9">
                <div className="row align-items-center gx-5">
                  <div className="col-lg-5 col-sm-12 text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2">Sep/2023 - Present</div>
                      <div className="small fw-bolder">Full Stack Software Developer</div>
                      <div className="small text-muted">Virtuzo Infosystems Pvt Ltd</div>
                      <div className="small text-muted">Noida,India</div>
                    </div>
                  </div>
                  <div className="col-lg-7"><div>Experienced Software Developer skilled in JavaScript, Node.js, and ReactJS. Currently at Virtuzo Infosystems Pvt Ltd, I craft and elevate applications, merging design with functionality through collaborative efforts and a commitment to innovation.</div></div>
                </div>

                <div className="row align-items-center gx-5 mt-4">
                  <div className="col-lg-5 col-sm-12 text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2">May/2022 - Aug/2022</div>
                      <div className="small fw-bolder">Software Developer Intern</div>
                      <div className="small text-muted">Virtuzo Infosystems Pvt Ltd</div>
                      <div className="small text-muted">Noida,India</div>
                    </div>
                  </div>
                  <div className="col-lg-7"><div>Software Developer proficient in JavaScript, Node.js, and ReactJS. Prior 3-month internship experience at Virtuzo Infosystems Pvt Ltd. Currently contributing to application development and enhancement, merging design and functionality for impactful solutions.</div></div>
                </div>
              </div>
            </div>
          </section>
          <div className="pb-5"></div>
          <section>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body tech-stack-section">
                <div className="mb-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                    <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Technical Skill</span></h3>
                  </div>
                  <div className="row-cols-md-6 row-cols-sm-6 row-cols-xsm-4 mb-4">
                    <img src={htmlLogo} alt="logo" className='mb-3' />
                    <img src={cssLogo} alt="logo" className='mb-3' />
                    <img src={sassLogo} alt="logo" className='mb-3' />
                    <img src={jsLogo} alt="logo" className='mb-3' />
                    <img src={reactLogo} alt="logo" className='mb-3' />
                    <img src={reduxLogo} alt="logo" className='mb-3' />
                    <img src={nodeLogo} alt="logo" className='mb-3' />
                    <img src={expressLogo} alt="logo" className='mb-3' />
                    <img src={mysqlLogo} alt="logo" className='mb-3' />
                    <img src={bootstrapLogo} alt="logo" className='mb-3' />
                    <img src={materialLogo} alt="logo" className='mb-3' />
                    <img src={chakraLogo} alt="logo" className='mb-3' />
                  </div>
                </div>

                <div className="mb-0">
                  <div className="d-flex align-items-center mb-4">
                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-tools"></i></div>
                    <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Tools</span></h3>
                  </div>
                  <div className="row-cols-md-6 row-cols-sm-6 row-cols-xsm-4 mb-4">
                    <img src={vsTool} alt="tool" className='mb-3' />
                    <img src={gitTool} alt="tool" className='mb-3' />
                    <img src={postmanTool} alt="tool" className='mb-3' />
                    <img src={jiraTool} alt="tool" className='mb-3' />
                    <img src={githubTool} alt="tool" className='mb-3' />
                    <img src={npmTool} alt="tool" className='mb-3' />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Resume
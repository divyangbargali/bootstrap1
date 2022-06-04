import React from 'react'

const Footer = () => {
  return (
    <>
        {/* Footer */}
        <footer className='bg-secondary'>
            <div className="container">
              <div className="row">
                <div className="col text-center">
                    <h1 className='text-white font-weight-light text-capitalize p-3'>pure bootstrap project</h1>
                    <h3 className='text-light font-weight-light font-italic mb-3'>Lorem ipsum dolor sit amet consectetur.</h3>
                    <div className='py-2'>
                        <a href="#"><i className='fab fa-facebook fa-2x text-primary mx-3'></i></a>
                        <a href="#"><i className='fab fa-google-plus fa-2x text-danger mx-3'></i></a>
                        <a href="#"><i className='fab fa-twitter fa-2x text-info mx-3'></i></a>
                        <a href="#"><i className='fab fa-youtube fa-2x text-danger mx-3'></i></a>
                    </div>

                    <p className='text-light py-4 m-0'>&copy; Copyright 2022 - Made by D</p>
                </div>
              </div>
            </div>
        </footer>

      {/* end of Footer */}
    </>
  )
}

export default Footer
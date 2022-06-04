import React from 'react'

const Team = () => {
  return (
    <>
         {/* team */}
      <section className='p-sm-5 p-2 bg-secondary'>
        <div className="container-fluid">
          {/* title */}
          <div className='row'>
            <div className='col text-center mb-3'>
              <h1 className='text-warning display-2'>Projects</h1>
              <p className='lead text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, obcaecati.</p>
            </div>
          </div>
          {/* end title */}

          <div className='row'>
            <div className='col-lg-4 col-sm-10 mx-auto mb-4'>
              <div className='card'>
                <img src='images/kid1.jpg' className='card-img-top' />
                <div className='card-body'>
                  <div className="card-title">
                    <h3 className='text-muted'>Michael</h3>
                  </div>
                  <div className='card-subtitle'>
                    <p class="lead text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, at?</p>
                  </div>
                  <div className="text-right">
                    <a href="#"><i className="fab fa-facebook fa-2x mx-2 text-primary"></i></a>
                    <a href="#"><i className="fab fa-twitter fa-2x mx-2 text-info"></i></a>
                    <a href="#"><i className="fab fa-youtube fa-2x mx-2 text-danger"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-sm-10 mx-auto mb-4'>
              <div className='card'>
                <img src='images/kid2.jpg' className='card-img-top' />
                <div className='card-body'>
                  <div className="card-title">
                    <h3 className='text-muted'>Jack</h3>
                  </div>
                  <div className='card-subtitle'>
                    <p class="lead text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, at?</p>
                  </div>
                  <div className="text-right">
                    <a href="#"><i className="fab fa-facebook fa-2x mx-2 text-primary"></i></a>
                    <a href="#"><i className="fab fa-twitter fa-2x mx-2 text-info"></i></a>
                    <a href="#"><i className="fab fa-youtube fa-2x mx-2 text-danger"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-sm-10 mx-auto mb-4'>
              <div className='card'>
                <img src='images/kid3.jpg' className='card-img-top' />
                <div className='card-body'>
                  <div className="card-title">
                    <h3 className='text-muted'>Ann</h3>
                  </div>
                  <div className='card-subtitle'>
                    <p class="lead text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, at?</p>
                  </div>
                  <div className="text-right">
                    <a href="#"><i className="fab fa-facebook fa-2x mx-2 text-primary"></i></a>
                    <a href="#"><i className="fab fa-twitter fa-2x mx-2 text-info"></i></a>
                    <a href="#"><i className="fab fa-youtube fa-2x mx-2 text-danger"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* End of team */}
    </>
  )
}

export default Team
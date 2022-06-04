import React from 'react'

const Projects = () => {
  return (
    <>
         {/* Projects */}
      <section className='p-5'>
        <div className='container-fluid'>
          {/* title */}
          <div className='row'>
            <div className='col text-center mb-3'>
              <h1 className='text-warning display-2'>Projects</h1>
              <p className='lead text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, obcaecati.</p>
            </div>
          </div>
          {/* end title */}

          <div className='row'>
            <div className='col-lg-3 col-sm-6'>
              <img src='images/project1.jpg' class="img-thumbnail" alt='' />
              <h2 className='my-3 text-warning'>Project one</h2>
              <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, esse?</p>
            </div>
            <div className='col-lg-3 col-sm-6 mt-3'>
              <img src='images/project2.jpg' class="img-thumbnail" alt='' />
              <h2 className='my-3 text-warning'>Project Two</h2>
              <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, esse?</p>
            </div>
            <div className='col-lg-3 col-sm-6 mt-4'>
              <img src='images/project3.jpg' class="img-thumbnail" alt='' />
              <h2 className='my-3 text-warning'>Project Three</h2>
              <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, esse?</p>
            </div>
            <div className='col-lg-3 col-sm-6 mt-5'>
              <img src='images/project4.jpg' class="img-thumbnail" alt='' />
              <h2 className='my-3 text-warning'>Project Four</h2>
              <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, esse?</p>
            </div>
          </div>

        </div>
      </section>

      {/* end of Projects */}
    </>
  )
}

export default Projects
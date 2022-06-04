import React from 'react'

const Skills = () => {
  return (
   <>
         {/* skills */}
      <section className='bg-light p-5'>
        <div className="container-fluid">
          {/* title */}
          <div className='row'>
            <div className='col text-center mb-3'>
              <h1 className='text-warning display-2'>Skills</h1>
              <p className='lead text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, obcaecati.</p>
            </div>
          </div>
          {/* end title */}

          <div className='row text-center'>
            <div className="col-lg-4 col-sm-10 mx-auto mb-5">
              <i className='fas fa-desktop fa-6x text-warning mb-3'></i>
              <h1 className='text-secondary'>Development</h1>
              <p className='text-muted my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quae.</p>
              <a href="#" className='btn btn-outline-warning'>Learn More</a>
            </div>
            <div className="col-lg-4 col-sm-10 mx-auto mb-5">
              <i className='far fa-edit fa-6x text-warning mb-3'></i>
              <h1 className='text-secondary'>Design</h1>
              <p className='text-muted my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quae.</p>
              <a href="#" className='btn btn-outline-warning'>Learn More</a>
            </div>
            <div className="col-lg-4 col-sm-10 mx-auto mb-5">
              <i className='fas fa-cogs fa-6x text-warning mb-3'></i>
              <h1 className='text-secondary'>Creativity</h1>
              <p className='text-muted my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quae.</p>
              <a href="#" className='btn btn-outline-warning'>Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* end of skills */}
   </>
  )
}

export default Skills
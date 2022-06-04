import React from 'react'

const Bannner = () => {
  return (
    <>
         {/* banner  */}
      <section>
        <div className='container-fluid'>
          <div className='row bg-info justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div className="col-sm-10 text-center">
              <h1 className='display-2 text-capitalize'><span className='text-warning'>pure bootstrap</span><span className='text-white font-weight-bold'>website</span></h1>
              <h2 className='font-weight-light font-italic text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sequi!</h2>
              <a href="#" className='btn btn-warning btn-lg px-4 m-3'>Press Here</a>
              <a href="#" className='btn btn-danger btn-lg px-4 m-3'>Press Here</a>
            </div>
          </div>
        </div>
      </section>

      {/* End of banner */}
    </>
  )
}

export default Bannner
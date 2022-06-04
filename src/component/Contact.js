import React from 'react'

const Contact = () => {
  return (
   <>
        {/* contact */}
      <section className='p-5 bg-light'>
        <div className='container-fluid'>
          {/* title */}
          <div className='row'>
            <div className='col text-center mb-3'>
              <h1 className='text-warning display-2'>Contact Us</h1>
              <p className='lead text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, obcaecati.</p>
            </div>
          </div>
          {/* end title */}
          <div className='row justify-content-center'>
                <div className='col-lg-6 col-md-8 col-sm-10'>
                    <div className='text-center text-secondary'>
                        <h2>Got Questions</h2>
                        <p>Stay Connected</p>
                    </div>
                    <form className='text-muted'>
                          <div className='form-group'>
                              <label for="name">Name</label>
                              <input type="text" className='form-control' id='name' />
                          </div>
                          <div className='form-group'>
                              <label for="email">Email</label>
                              <input type="email" className='form-control' id='name' />
                          </div>
                          <div className='form-group'>
                              <label for="message">Message</label>
                             <textarea className='form-control' id="message" rows="3">
                             </textarea>
                          </div>
                          <button className='btn btn-outline-warning btn-block' type='submit'>Submit Question</button>
                    </form>
                </div>
          </div>
        </div>
      </section>
      {/* end of contact */}
   </>
  )
}

export default Contact
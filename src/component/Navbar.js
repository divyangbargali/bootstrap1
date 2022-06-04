import React from 'react'

const Navbar = () => {
  return (
  <>
        {/* navbar */}
      <nav className='navbar navbar-expand-md navbar-light fixed-top navBack' style={{backgroundColor:'red'}}>
        <a href="" className='navbar-brand'><i className='fas fa-child text-warning fa-2x'></i></a>

        <button type="button" className='navbar-toggler bg-light' data-toggle="collapse" data-target="#nav"><span className="navbar-toggler-icon"></span></button>

        <div className="collapse navbar-collapse justify-content-between" id="nav">
          <ul className='navbar-nav'>
            <li className='nav-item'><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="">Home</a></li>
            <li className='nav-item'><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="">Skills</a></li>
            <li className='nav-item dropdown' data-toggle='dropdown'><a className="nav-link text-light text-uppercase font-weight-bold px-3 dropdown-toggle" href="">Projects</a>
              <div className='dropdown-menu'>
                <a className='dropdown-item' href="#">Project 1</a>
                <a className='dropdown-item' href="#">Project 2</a>
                <a className='dropdown-item' href="#">Project 3</a>
                <a className='dropdown-item' href="#">Project 4</a>
              </div>
            </li>
            <li className='nav-item'><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="">Team</a></li>
            <li className='nav-item'><a className="nav-link text-light text-uppercase font-weight-bold px-3" href="">Contact</a></li>
          </ul>


          <form className='form-inline ml-3'>
            <div className='input-group'>
              <input type="text" className="form-control" placeholder="search" />
              <div className='input-group-append'>
                <button type="button" className="btn btn-light"><i className="fas fa-search text-muted"></i></button>
              </div>
            </div>
          </form>
        </div>
      </nav>

      {/* end of navbar */}
  </>
  )
}

export default Navbar
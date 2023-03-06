import React    from "react";
import template from "./Navbar.jsx";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <section className="menu">
    <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light ">
    <Link to="/"><a className="navbar-brand" href="#">Website Logo</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <form className="form-inline my-2 my-lg-0 ml-auto">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
      </form>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link to ="/Home"><a className="nav-link" href="#">Home </a></Link>
        </li>
        <li className="nav-item">
        <Link to ="/About"><a className="nav-link" href="#">About Us</a></Link>
        </li>
        <li className="nav-item">
        <Link to ="/Services"><a className="nav-link" href="#">Services </a></Link>        </li>
       
        <li className="nav-item">
        <Link to ="/Contact"><a className="nav-link" href="#">Contact Us </a></Link>
        </li>
       
        <li className="nav-item">
        <button type="button" className="btn btn-info btn-lg" data-toggle="modal"
         data-target="#myModal">Login</button>

        {/* </li>Link to ="/Contact"><a className="btn btn-success" href="#">Register </a></Link> */}
        </li>
        <li className="nav-item">
        <button type="button" className="btn btn-success btn-lg" data-toggle="modal"
         data-target="#myModal1">Register</button>

        </li>
        
      </ul>



  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Login Form</h4>
        </div>
        <div className="modal-body">
    <form class="modal-content animate" action="" method="post">
    <div className="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required />

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />
        
      <button className='cls' type="submit">Login</button>
      <label>
        <input type="checkbox" checked="" name="remember" /> Remember me
      </label>
    </div>

  
  </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
</div> 
 {/* modl end box */}


 <div className="modal fade" id="myModal1" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Register Form</h4>
        </div>
        <div className="modal-body">
    <form class="modal-content animate" action="" method="post">
    <div className="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required />

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />
      <label for="psw"><b>Repeat Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />
        
      <button className='cls' type="submit">Register</button>
     
    </div>

  
  </form>
        </div>
        <div className="modal-footer">
          {/* <button type="button" className="btn btn-default" data-dismiss="modal">Close</button> */}
        </div>
      </div>
      
    </div>
</div> 
 {/* modl end box */}



    </div>
  </nav>
    </div>
    </section>
);
  }
}

export default Navbar;

import Logo from '../../../assets/BMA Logo.jpeg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import jsCookie from 'js-cookie';
import Swal from 'sweetalert2';

const Navbar = () => {
  const navigate = useNavigate()
  
  const handleLogout = () => {
    jsCookie.remove('auth')
    var toastMixin = Swal.mixin({
      toast: true,
      icon: 'success',
      title: 'General Title',
      animation: false,
      position: 'top-right',
      showConfirmButton: false,
      timer: 800,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
    toastMixin.fire({
      animation: true,
      title: 'Logout Successfully'
    });
    navigate('/')
    setTimeout(window.location.reload.bind(window.location), 500);
  }

    return (
        <>
          <nav className="navbar navbar-dark bg-dark sticky-top">
            <div className="container">
              <div className="navbar-brand ps-5">
                <img className="logo" src={Logo} alt="" width="30" height="24" />
              </div>
            </div>
            <div className="d-flex pe-4">  
              <button className="btn btn-outline-danger m-1" onClickCapture={handleLogout} type="submit">Logout</button>
            </div>
          </nav>
        </>
    )
}

export default Navbar
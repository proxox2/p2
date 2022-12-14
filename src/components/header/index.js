import './index.scss'
import  logo from '../../assests/images/logo.svg'
import {Link} from 'react-router-dom'
export default function Header({headerText='Welcome to Reebok',
  headerTitle='Reebok',
activePage='home'}){
return(
<header  >
<nav class="navbar navbar-expand-lg navbar-dark bg-black py-4">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">
        <img src={logo} alt="Reebok" height="50"/>
        </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto my-0">
        <li class="nav-item">
          <Link class={`nav-link ${activePage==="home" && "active"}`}  to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class={`nav-link ${activePage==="about" && "active"}`}  to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class={`nav-link ${activePage==="products" && "active"}`}  to="/products">Products</Link>
        </li>
        
        <li class="nav-item">
          <Link class={`nav-link ${activePage==="contact" && "active"}`}  to="/contact">Contact</Link>
        </li>
       
         </ul>
        
      <form class="d-flex" role="search">
         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> 
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>
<div className='bg-secondary'>
  <div className='container p-5'>
    <h1>{headerTitle}</h1>
    <p>{headerText}</p>
</div></div>
</header>
)}
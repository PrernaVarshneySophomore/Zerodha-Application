import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/products">
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;





// import React from "react";

// function Navbar() {
//   return (
//       <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#fff"}}>
//         <div class="container-fluid">
//           <a class="navbar-brand" href="#">
//             <img src="media/images/logo.svg" alt="Logo"style={{width:"25%"}} />
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
//             <form class="d-flex" role="search">
//               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li class="nav-item">
//                     <a class="nav-link active" aria-current="page" href="#">
//                     Signup
//                     </a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">
//                     About
//                     </a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">
//                     Product
//                     </a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">
//                     Pricing
//                     </a>
//                 </li><li class="nav-item">
//                     <a class="nav-link" href="#">
//                     Support
//                     </a>
//                 </li>
//                 </ul>
//             </form>
//           </div>
//         </div>
//       </nav>
//   );
// }

// export default Navbar;

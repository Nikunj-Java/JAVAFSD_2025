import { Link } from "react-router-dom";



function NavBar() {

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/home">Simplilearn</a>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>

                        <Link></Link>

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/fetch">Users</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/form">Forms</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/counter">Counter</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/context">useContext</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/login">Login</a>
                        </li>
                         
                    </ul>

                </div>
            </div>
        </nav>
    )
}


export default NavBar;
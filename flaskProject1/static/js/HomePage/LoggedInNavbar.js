class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name:'Kris'
        }
    }

    LoggedOut(){
        alert("You successfully logged out!");
    }

    render() {
        return(
            <>
                <div className="d-flex flex-grow-1" id="nav">
                    <a href="/logged_in" className="navbar-brand" id="logo">
                        <img src="/static/images/Logo.jpg" width="190" height="190" alt="" className="d-inline-block align-middle mr-2"/>
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/"  className="nav-link">   8 клас</a>
                        </li>
                        <li className="nav-item">
                            <a href="/"  className="nav-link">   9 клас</a>
                        </li>
                        <li className="nav-item">
                            <a href="/"  className="nav-link">   10 клас</a>
                        </li>
                        <li className="nav-item">
                            <a href="/class11"  className="nav-link">   11 клас</a>
                        </li>
                        <li className="nav-item">
                            <a href="/"  className="nav-link">   12 клас</a>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar7" id="nav">
                     <>
                        <ul className="navbar-nav ml-auto flex-nowrap">
                            <li className="nav-item">
                                <a href="/grades" className="nav-link"> Profile</a>
                            </li>
                            <li className="nav-item">
                                <a href="/logout"  className="nav-link"  onClick={this.LoggedOut}> LogOut</a>
                            </li>
                        </ul>
                      </>
                </div>
            </>
        )
    }
}
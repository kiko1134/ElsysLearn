class Navbar extends React.Component {
    constructor(props) {
        super(props);
        // this.LogOut = this.LogOut.bind(this)
        this.state={
            name:'',
            logged:false
        }
    }
    // LogOut(event){
    //     event.preventDefault()
    //     alert("Logged Out!")
    //     this.state.logged=false
    //     console.log(this.props)
    // };


    render() {
        return(
            <>
                <div className="d-flex flex-grow-1">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">ElsysLearn</a>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Класове
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">8 клас</a>
                                <a className="dropdown-item" href="#">9 клас</a>
                                <a className="dropdown-item" href="#">10 клас</a>
                                <a className="dropdown-item" href="#">11 клас</a>
                                <a className="dropdown-item" href="#">12 клас</a>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar7">
                    {
                        this.state.logged
                        ? <>
                            <ul className="navbar-nav ml-auto flex-nowrap">
                                <li className="nav-item">
                                    <a href="#" className="nav-link"> Profile: {this.state.name}</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#"  className="nav-link"> LogOut</a>
                                </li>
                            </ul>
                          </>
                        :<>
                            <ul className="navbar-nav ml-auto flex-nowrap">
                                <li className="nav-item">
                                    <a href="/login" className="nav-link"> Sign in</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/register" className="nav-link"> Sign up</a>
                                </li>
                            </ul>
                        </>
                    }

                </div>
            </>
        )
    }
}

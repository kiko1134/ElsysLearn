class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }


    render() {
        return(
            <>
                <a href="/" className="navbar-brand" id="logo">
                    <img src="/static/images/Logo.jpg" width="190" height="190" alt="" className="d-inline-block align-middle mr-2"/>
                </a>

                <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar7">
                    <>
                        <ul className="navbar-nav ml-auto flex-nowrap">
                            <li className="nav-item">
                                <a href="/login" className="nav-link"> Sign in</a>
                            </li>
                            <li className="nav-item">
                                <a href="/register" className="nav-link"> Sign up</a>
                            </li>
                        </ul>
                    </>
                </div>
            </>
        )
    }
}
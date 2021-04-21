class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }


    render() {
        return(
            <>
                <div className="d-flex flex-grow-1">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">ElsysLearn</a>
                    </div>
                </div>

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
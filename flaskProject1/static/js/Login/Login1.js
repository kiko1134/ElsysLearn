class Login1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="form">
                    <h2>Log In</h2>
                    <form className="login-form">
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button>login</button>
                        <p className="message">Not registered? <a href="/register">Create an account</a></p>
                    </form>
                </div>
            </>
        )
    }
}
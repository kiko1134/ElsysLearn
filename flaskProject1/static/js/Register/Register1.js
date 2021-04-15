class Register1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    

    render() {
        return (
            <div className="form">
                <h2>Sign Up</h2>
                <form className="login-form">
                    <input type="text" placeholder="name"/>
                    <input type="password" placeholder="password"/>
                    <input type="text" placeholder="email address"/>
                    <button>create</button>
                    <p className="message">Already registered? <a href="/login">Sign In</a></p>
                </form>
            </div>
        )
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <h2>LogIn</h2>
                <div class="form-group l1">
                    <label for="InputEmail">Email: </label>
                    <br/>
                    <input name="email" class="form-control" id="InputEmail"  placeholder="Enter your email:"/>
                </div>
                <div className="form-group l1">
                    <label htmlFor="EnterUsername">Username: </label>
                    <br/>
                    <input name="username" className="form-control" id="InputEmail"
                           placeholder="Enter you username:"/>
                </div>
                <div class="form-group">
                    <label for="InputPassword">Password: </label>
                    <br/>
                    <input type="password" name="password" class="form-control" id="InputPassword" placeholder="Enter your password"/>
                </div>
                <button type="submit" name = "button" class="btn btn-primary">Submit</button>
            </>
        )
    }
}
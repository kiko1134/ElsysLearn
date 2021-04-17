class Login1 extends React.Component {
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
                    <label for="InputEmail">Username or email: </label>
                    <br/>
                    <input name="email" class="form-control" id="InputEmail"  placeholder="Enter you username or email"/>
                </div>
                <div class="form-group">
                    <label for="InputPassword">Password: </label>
                    <br/>
                    <input type="password" name="password" class="form-control" id="InputPassword" placeholder="Enter your password"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </>
        )
    }
}
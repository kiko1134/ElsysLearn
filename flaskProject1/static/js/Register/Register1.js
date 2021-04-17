class Register1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <h2>Register</h2>
                <div class="form-group l1">
                    <label for="Fullname">Username(Full name): </label>
                    <br/>
                    <input name="fullname" class="form-control" id="inputFullName" aria-describedby="emailHelp" placeholder="Enter your full name"/>
                </div>

                <div class="form-group l1">
                    <label for="InputEmail">Email address: </label>
                    <br/>
                    <input name="email" class="form-control" id="InputEmail"  placeholder="Enter your email"/>
                </div>

                <div class="form-group l1">
                    <label for="InputPassword">Password: </label>
                    <br/>
                    <input type="password" name="password1" class="form-control" id="InputPassword" placeholder="Enter your password"/>
                </div>

                <div class="form-group">
                    <label for="InputPassword2">Confirm password: </label>
                    <br/>
                    <input type="password" name="password2" class="form-control" id="InputPassword2" placeholder="Re-enter your password"/>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </>
        )
    }
}
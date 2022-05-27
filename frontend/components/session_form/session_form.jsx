import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentDidMount(){
        this.props.clearErrors();
    }
    

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    demoLogin(){
        this.props.login({
            email: 'demologin@aa.io',
            password: 'password'
        });
    }

    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render(){
        return(
            <div className='form-div'>
                <div className='login-form-container'>
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <h3 id='page-nav-bar' >Welcome to Chillow</h3>
                        {this.props.formType === 'login' ? 
                        <h1 id='form-title'>Log In</h1> : <h1 id='form-title'>Sign Up</h1>}
                        <ul className='errors'>
                            {this.renderErrors()}
                        </ul>
                        <div className='login-form'>
                            <br/>
                                <input 
                                    type="text" 
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input" 
                                    placeholder='Email'/>
                            <br/>
                                <input 
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                    placeholder='Password' />
                            <br/>
                            <input id='submit' className='session-submit' type="submit" 
                            value={this.props.formType === 'login' ? 'Log In' : 'Sign Up'}/>
                        </div>
                    </form>
                        <button id='demo' className='session-submit' onClick={this.demoLogin}>Demo Login</button>
                    <br/>
                </div>
                <div className='img-holder'>
                    <img src={window.heroBanner} alt='hero-banner'></img>
                </div>
            </div>
        );
    }


}

export default SessionForm;
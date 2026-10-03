import './assets/css/login.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState, type SubmitEvent } from 'react';
import { usePageContext } from "./PageContext.tsx";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MIN_PASS_LENGTH = 8;

function Login() {
    const { setMessage } = usePageContext();
    const [loginForm, setLoginForm] = useState({
        email: "",
        pass: ""
    });

    async function auth() {
        try {
            const response = await fetch('http://localhost:8090/auth', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginForm)
            });

            const data = await response.json();
            if (response && data) {
                const msg = data.message;
                if (response.status === 202) {
                    window.location.href = "http://localhost:5173/";
                } else {
                    setMessage(msg);
                }
            }
        } catch (error) {
            console.error(error);
            setMessage("Error");
        }
    }

    function validate(): string | null {
        if (!EMAIL_REGEX.test(loginForm.email.trim())) {
            return "Please enter a valid e-mail address.";
        }
        if (loginForm.pass.length < MIN_PASS_LENGTH) {
            return `Password must be at least ${MIN_PASS_LENGTH} characters long.`;
        }
        return null;
    }

    async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const error = validate();
        if (error) {
            setMessage(error);
            return;
        }
        auth();
    };

    return <div className='body'>
        <div className="in-container">
            <div id="loginForm" className="login form-container">
                <div className="form-header">
                    <h2>Login</h2>
                </div>

                <form id="loginFormElement" onSubmit={e => handleSubmit(e)} noValidate>
                    <div className="form-group">
                        <label htmlFor="identification">E-mail</label>
                        <input type="email" id="identification" name="identification" onChange={e => setLoginForm({ ...loginForm, email: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={e => setLoginForm({ ...loginForm, pass: e.target.value })} required />
                        <div className='right'>
                            {/* <a className='switch-link'>¿Olvidaste tu contraseña?</a> */}
                        </div>
                    </div>

                    <div className='footer'>
                        {/* <div className='alter'>
                            <h4>Otras formas</h4>
                            <div className='alter-bts'>
                                <a className='alter-btn'><i className='alter-btn fab fa-google'></i></a>
                                <a className='alter-btn'><i className='alter-btn fab fa-facebook'></i></a>
                            </div>
                        </div> */}
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>

                <div className="switch-form">
                    Doesn't have an account?
                    <a className="switch-link" onClick={() => window.location.href="http://localhost:3010/"}> Sign up here</a>
                </div>
            </div>
        </div>
    </div>;
}

export default Login;
import './assets/css/login.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState, type SubmitEvent } from 'react';

function Login() {
    const [loginForm, setLoginForm] = useState({
        email: "",
        pass: ""
    });

    async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(JSON.stringify(loginForm));
        try {
            const respuesta = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
                body: JSON.stringify(loginForm)
            });

            if (respuesta) {
                let msg = await respuesta.text();
                if (respuesta.status === 406) {
                    msg = 'Correo o contraseña incorrectos';
                } else if (respuesta.status === 202) {
                    msg = "Credenciales válidas";
                }
                alert(msg);
            }
        } catch (error) {
            alert(error);
        }
    };

    return <div className='body'>
        <div className="in-container">
            <div id="loginForm" className="login form-container">
                <div className="form-header">
                    <h2>Inicio de sesión</h2>
                </div>

                <form id="loginFormElement" onSubmit={e => handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="identification">E-mail</label>
                        <input type="email" id="identification" name="identification" onChange={e => setLoginForm({ ...loginForm, email: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
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
                        <button type="submit" className="btn">Ingresar</button>
                    </div>
                </form>

                {/* <div className="switch-form">
                    ¿No tienes una cuenta?
                    <a className="switch-link"> Créala aquí</a>
                </div> */}
            </div>
        </div>
    </div>;
}

export default Login;
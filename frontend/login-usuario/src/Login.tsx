import './assets/css/login.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState, type SubmitEvent } from 'react';

function Login() {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });

    async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const respuesta = await fetch('http://localhost:8080/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=UTF-8' }
            });

            if (!respuesta.ok) {
                let errorMsg = await respuesta.text();
                if (respuesta.status === 404) {
                    errorMsg = 'Correo o contraseña incorrectos';
                }
                alert(errorMsg);
            } else {
                const data = await respuesta.json();
                if (data.password === loginForm.password) {
                    localStorage.setItem('cliente', JSON.stringify(data));
                    localStorage.setItem('carrito', JSON.stringify(data.cart));
                } else {
                    alert('Correo o contraseña incorrectos');
                }
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
                        <input type="password" id="password" name="password" onChange={e => setLoginForm({ ...loginForm, password: e.target.value })} required />
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
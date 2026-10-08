import '../assets/css/login.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState, type SubmitEvent } from 'react';
import { usePageContext } from "../PageContext.tsx";
import { login, type loginDTO } from '../service/loginService.ts';
import { UnauthorizedError } from "../exceptions/loginExceptions";
import { setPage } from "@gestor-tareas/react-components";

function Login() {
    const { isMsgShow, setMessage } = usePageContext();
    const [isSending, setIsSending] = useState(false);
    const [loginForm, setLoginForm] = useState<loginDTO>({
        email: "",
        pass: ""
    });

    async function loginUser() {
        if (!isSending) {
            try {
                setIsSending(true);
                await login(loginForm);
                setIsSending(false);
                try {
                    await setPage("home");
                } catch (error) {
                    setMessage("No se pudo cargar la página")
                }
                return;
            } catch (error) {
                console.error(error);
                setIsSending(false);
                if (error instanceof UnauthorizedError) {
                    setMessage("Correo o contraseña incorrectos");
                    return;
                }
                setMessage("Error interno, inténtalo más tarde");
            }
        }
    };

    const isInfoError = (): boolean => {
        const regexMail: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;;

        const errorEmail: boolean = !regexMail.test(loginForm.email);
        const errorPass: boolean = loginForm.pass.length < 8;

        if (errorEmail) {
            setMessage("Correo electrónico inválido");
        } else if (errorPass) {
            setMessage("Contraseña demasiado débil")
        }

        return errorEmail || errorPass;
    };

    async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!isInfoError()) {
            loginUser();
        }
    };

    return <div className='body'>
        <div className="in-container">
            <div id="loginForm" className="login form-container">
                <div className="form-header">
                    <h2>Iniciar Sesión</h2>
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
                        <button type="submit" className="btn" disabled={isSending && isMsgShow}>Aceptar</button>
                    </div>
                </form>

                <div className="switch-form">
                    {"¿No tienes una cuenta? "}
                    <a className="switch-link" onClick={async () => {
                        try {
                            await setPage("signup");
                        } catch (error) {
                            setMessage("No se pudo cargar la página")
                        }
                    }}>Créala aquí</a>
                </div>
            </div>
        </div>
    </div>;
}

export default Login;
import { Link } from 'react-router-dom'
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents"

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    return (

        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title"> Criar Conta </span>

                <div className="wrap-input">
                    <input
                        className={firstName !== "" ? "has-val input" : "input"}
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Firs Name"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={lastName !== "" ? "has-val input" : "input"}
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Last Nome"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={email !== "" ? "has-val input" : "input"}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={password !== "" ? "has-val input" : "input"}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Password"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={confirmPassword !== "" ? "has-val input" : "input"}
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Confirm Password"></span>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn">Cadastrar</button>
                </div>

                <div className="text-center">
                    <span className="txt1">Já possui conta? </span>
                    <Link className="txt2" to="/login">
                        Acessar com Email e Senha
                    </Link>
                </div>
            </form>


        </LayoutComponents>
    )

}
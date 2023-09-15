import React from 'react';
import './LoginForm.css'; // Importe o arquivo CSS correspondente
import './RegisterForm.css';
import './overlay-container.css';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa'


function LoginForm() {
  return (
    /*========== Container ==========*/
    <div className="login-container toggle" id="login-container">

      {/*========== Login Container ==========*/}
      <div className="form-container">
        <form className="form form-login">
          <h2 className="form-title">Entrar com</h2>
          <ul className='form-social'>
            <li><FaFacebook /></li>
            <li><FaGoogle /></li>
            <li><FaLinkedin /></li>
          </ul>
          <p class="form-text">Ou utilize sua conta</p>

          <div className="form-input-container">
            <input type="email" className="form-input" placeholder="Email" />
            <input type="password" className="form-input" placeholder="Password" />
          </div>

          <a href=" " className="form-link">Esqueceu a senha?</a>
          <button type="button" className="form-button-logar">Logar</button>
          <p className="mobile-text">
            Não tem conta?
            <a href=" " id="open-register-mobile"> Registre-se</a>
          </p>
        </form>

        {/*========== Register Container ==========*/}
        <form className="form form-register">
          <h2 className="form-title-register">Criar Conta</h2>

          <ul className='form-social'>
            <li><FaFacebook /></li>
            <li><FaGoogle /></li>
            <li><FaLinkedin /></li>
          </ul>
          <p class="form-text">ou cadastre seu email</p>

          <div className="form-input-container">
            <input type="text" className="form-input-register" placeholder="First Name" />
            <input type="text" className="form-input-register" placeholder="Last Name" />
            <input type="email" className="form-input-register" placeholder="Email" />
            <input type="password" className="form-input-register" placeholder="Senha" />
            <input type="password" className="form-input-register" placeholder="Confirm Password" />
          </div>

          <button type="button" className="form-button-cadastro">Cadastrar</button>
          <p className="mobile-text">
            Já tem conta? Faça
            <a href=" " id="open-login-mobile"> Login</a>
          </p>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay-n2">
        <h2 className="form-title">Já tem conta?</h2>
          <p className="form-text">Se já é nosso cliente, clica abaixo e vem conferir nossos serviços</p>
          <button className="form-button">Entrar</button>

        </div>

        <div className="overlay-n1">
          <h2 className="form-title">Olá Brother!</h2>
          <p className="form-text">Cadastre-se e venha conhecer nossos serviços</p>
          <button className="form-button">Cadastre-se</button>
        </div>

      </div>


    </div >
  );
}

export default LoginForm;
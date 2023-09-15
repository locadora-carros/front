import React from 'react';
import './LoginForm.css'; // Importe o arquivo CSS correspondente
import './RegisterForm.css';


function LoginForm() {
  return (

    <div className="login-container" id="login-container">
    
      <div className="form-container">
        <form className="form form-login">
          <h2 className="form-title">Entrar com</h2>

          <div className="form-social">
            <a href="facebook" className="social-icon">
              <i class="ri-facebook-fill"></i>
            </a>

            <a href="google" className="social-icon">
              <i class="ri-google-fill"></i>
            </a>

            <a href="linkedin" className="social-icon">
              <i class="ri-linkedin-fill"></i>
            </a>
          </div>

          <p className="form-text">ou utilize sua conta</p>

          <div className="form-input-container">
            <input type="email" className="form-input" placeholder="Email" />
            <input type="password" className="form-input" placeholder="Password" />
          </div>
          
          <a href="alguma-coisa" className="form-link">Esqueceu a senha?</a>
          <button type="button" className="form-button-logar">Logar</button>
          <p className="mobile-text">
            Não tem conta?
            <a href="alguma-coisa" id="open-register-mobile">Registre-se</a>
          </p>
        </form>
        <form className="form form-register">
          <h2 className="form-title-register">Criar Conta</h2>

          <div className="form-social-register">
            <a href="alguma-coisa" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="alguma-coisa" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="alguma-coisa" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          <p className="form-text">ou cadastre seu email</p>

          <div className="form-input-container">
            <input type="text" className="form-input-register" placeholder="First Name" />
            <input type="text" className="form-input-register" placeholder="Last Name" />
            <input type="email" className="form-input-register" placeholder="Email" />
            <input type="password" className="form-input-register" placeholder="Senha" />
            <input type="password" className="form-input-register" placeholder="Confirm Password" />
          </div>

          <button type="button" className="form-button-cadastro">Cadastrar</button>
          <p className="mobile-text">
            Já tem conta?
            <a href="alguma-coisa" id="open-login-mobile">Login</a>
          </p>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <h2 className="form-title form-title-light">Já tem conta?</h2>
          <p className="form-text">Para entrar na nossa plataforma faça login com suas informações</p>
          <button className="form-button form-button-light" id="open-login">Entrar</button>
        </div>

        <div className="overlay">
          <h2 className="form-title form-title-light">Olá Aluno!</h2>
          <p className="form-text">Cadastre-se e comece a usar a nossa plataforma on-line</p>
          <button className="form-button form-button-light" id="open-register">Cadastrar</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
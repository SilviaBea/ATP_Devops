import React, { useState, useEffect } from 'react';
import './index.css'; // Importação do CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleLogin = () => {
    if (email === '' || password === '') {
      setMessage('Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);

    // Simulando tempo de carregamento
    setTimeout(() => {
      if (email === 'eduardo.lino@pucpr.br' && password === '123456') {
        setMessage('Acessado com sucesso!');
        localStorage.setItem('email', email);
      } else {
        setMessage('Usuário ou senha incorretos!');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="login-input"
      />
      <br />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <br />
      <button onClick={handleLogin} className="login-button" disabled={loading}>
        {loading ? 'Carregando...' : 'Acessar'}
      </button>
      <p className="login-message">{message}</p>
    </div>
  );
};

export default Login;

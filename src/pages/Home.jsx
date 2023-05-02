import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/utils/Title';
import '../css/Home.css';

function Home() {
  const navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [userName, setUserName] = useState('');

  const verifyLogin = (name) => {
    if (name.length > 2) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  const handleChange = ({ target }) => {
    setUserName(target.value);
    verifyLogin(target.value);
  };

  const handleClick = () => {
    localStorage.setItem('userName', userName);
    navigate('/products');
  };

  return (
    <main className="divHome">
      <Title name="Bem vindo a E-commerce.com" className="titleHome" />
      <input
        type="text"
        placeholder="Insira seu nome/apelido"
        className="inputUser"
        value={userName}
        onChange={handleChange}
      />
      <button
        type="button"
        className="btnHome"
        onClick={handleClick}
        disabled={btnDisabled}
      >
        Começar compras!
      </button>
    </main>
  );
}

export default Home;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }
`;

const JoinPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    margin: 30px;
    margin-top: 80px;
`;

const JoinTitle = styled.div`
    font-size: 30px;
    font-weight: bolder;
`;

const Comment = styled.div`
    width: 250px;
    font-weight: bold;
`;

const Item = styled.div` 
    margin-left: 10px;
    margin-top: 10px;
    font-weight: bold;
`;

const Input = styled.input`
    width: 220px;
    height: 30px;
    background-color: #F5F5F5;
    font-size: 16px;
    padding: 5px 20px 5px 20px;
    margin-top: 5px;
    margin-bottom: 10px;
    border: none;
    border-radius: 8px;
`;

const Submit = styled.button`
    display: flex;
    justify-content: center;
    /* position: fixed;
    bottom: 50px;
    left: 30%; */
    width: 150px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    background-color: ${({isButtonDisabled}) => (isButtonDisabled ? "#464646" : "#FFD596")};
    color: white;
    border: 0;
    border-radius: 15px;
    margin-top: 10px;
    padding: 10px;
    box-sizing: border-box;
`;

const TextPassword = styled.div`
    color:${({password1, isPassword1Valid}) => ((password1&&!isPassword1Valid)? "white": "rgb(226, 0, 0)")};
    margin-bottom: 10px;
`;

const TextEmail = styled.div`
    color:${({email, isEmailValid}) => ((email&&!isEmailValid)? "white": "rgb(226, 0, 0)")};
    margin-bottom: 10px;
`;

function Join() {
  const [ name, setName ] = useState([]);
  const [ userId, setUserId ] = useState([]);
  const [ password1, setPassword1 ] = useState([]);
  const [ password2, setPassword2 ] = useState([]);
  const [ email, setEmail ] = useState([]);
  const [ isPassword1Valid, setIsPassword1Valid ] = useState([]);
  const [ isEmailValid, setIsEmailValid ] = useState([]);
  const navigate=useNavigate();


    const isButtonDisabled = !name || !userId || !password1 || !password2 || !email;

    const handleInputChange = (e) => {
      const { name, value } = e.target;

      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'userId':
          setUserId(value);
          break;
        case 'password1':
          setPassword1(value);
          validatePassword1(value);
          break;
        case 'password2':
          setPassword2(value);
          break;
        case 'email':
          setEmail(value);
          validateEmail(value);
          break;
        default:
          break;
      }
    };

    const validateEmail = (email) => {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        setIsEmailValid(isValid);
    };
      
    const validatePassword1 = (password) => {
        const isValid = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(password);
        setIsPassword1Valid(isValid);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        const response = await axios.post('http://', {
           "name": name,
           "userId": userId,
           "email": email,
           "password1": password1,
           "password2": password2,
        });

        alert('회원가입 성공!');
        navigate('/login');

        console.log('Sending data:', { name, userId, email, password1, password2 });
        console.log('Server response:', response.data);
    }catch(error){
        console.log(error);
    }
};

  return (
    <>
    <GlobalStyle />
    <JoinPage>
        <JoinTitle>회원가입</JoinTitle>
        <Comment>회원가입을 통해 다양한 서비스를 만나보세요!</Comment>
        <form onSubmit={handleSubmit}>
        <div>
          <label>
            <Item>이름</Item>
            <Input type="text" name="name" value={name} onChange={handleInputChange} placeholder="이름" />
          </label>
          <label>
            <Item>아이디</Item>
            <Input type="text" name="userId" value={userId} onChange={handleInputChange} placeholder="아이디 입력" />
          </label>
          <label>
            <Item>비밀번호</Item>
            <Input type="password" name="password1" value={password1} onChange={handleInputChange} placeholder="비밀번호" />
            <TextPassword>올바른 비밀번호를 입력해주세요</TextPassword>
          </label>
          <label>
            <Item>비밀번호 확인</Item>
            <Input type="password" name="password2" value={password2} onChange={handleInputChange} placeholder="비밀번호 재입력" />
          </label>
          <label>
            <Item>이메일</Item>
            <Input type="email" name="email" value={email} onChange={handleInputChange} placeholder="이메일 입력" />
            <TextEmail>올바른 이메일을 입력해주세요</TextEmail>
          </label>
        </div>
        <Submit type="submit" disabled={isButtonDisabled}>가입하기</Submit>
      </form>
    </JoinPage>
    </>
  )
}

export default Join
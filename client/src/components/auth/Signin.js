import React, { useState } from 'react';

import styled from 'styled-components';
import InputField from '../fields/InpuField';
import Button from '../buttons/Button';

const SigninContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 10px 0;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Signin = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    emailSignInStart({ email, password });
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SigninContainer>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <InputField
          onChange={handleChange}
          type="email"
          name="email"
          label="Email"
          value={email}
          required
        />
        <InputField
          onChange={handleChange}
          type="password"
          name="password"
          label="Password"
          value={password}
          required
        />
        <Buttons>
          <Button type="submit">SIGN IN</Button>
          <Button type="button" onClick={googleSignInStart} isSignedinGoogle>
            SIGN IN WITH GOOGLE
          </Button>
        </Buttons>
      </form>
    </SigninContainer>
  );
};

export default Signin;

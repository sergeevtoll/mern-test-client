import React, { useState, useEffect, useContext } from 'react';
import ButtonForm from '../components/ButtonForm';
import InputForm from '../components/InputForm';
import { HttpHook } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext';
import { Title, Form, InputWrap, ButtonWrap, ButtonsWrap } from '../styles/styles';

interface Istate {
  email: string
  password: string
}
const AuthPage: React.FC = () => {
  const auth = useContext(AuthContext)
  const { loading, request, error, clearError } = HttpHook()
  const [inputValue, setInputValue] = useState<Istate>({
    email: '',
    password: ''
  })
  console.log(error)

  useEffect(() => {
    if (error !== null) {
      alert(error)
      clearError()
    }
  }, [error, clearError])

  const handleRegistration = async (): Promise<void> => {
    try {
      const data = await request('/api/auth/register', 'POST', inputValue)
      const respose = await data
      console.log(respose.message)
      alert(respose.message)
    } catch (e) { }
  }

  const handleLogin = async (): Promise<void> => {
    try {
      const data = await request('/api/auth/login', 'POST', inputValue,)
      auth.login( data.userId )
    } catch (e) { }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target
    setInputValue({
      ...inputValue,
      [name]: value
    })
  }

  return (
    <>
      <Title>Авторизация</Title>
      <Form>
        <InputWrap>
          <InputForm
            id='email'
            name='email'
            placeholder='Введите email'
            onChange={handleChange}
            value={inputValue.email}
            type='text'
          />
        </InputWrap>
        <InputWrap>
          <InputForm
            id='password'
            name='password'
            placeholder='Введите password мин. 6 символов'
            onChange={handleChange}
            value={inputValue.password}
            type='password'
          />
        </InputWrap>
        <ButtonsWrap>
          <ButtonWrap>
            <ButtonForm
              value='Войти'
              onClick={handleLogin}
              className='join'
              disabled={loading}
            />
          </ButtonWrap>
          <ButtonForm
            value='Зарегаться'
            onClick={handleRegistration}
            className='reg'
            disabled={loading}
          />
        </ButtonsWrap>
      </Form>
    </>
  )
};

export default AuthPage;

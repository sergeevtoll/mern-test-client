import React, { useEffect, useState, useContext } from 'react';
import { Title, InputWrap } from '../styles/styles';
import styled from 'styled-components';
import { Button } from '../styles/styles';
import { HttpHook } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext';
import InputForm from '../components/InputForm';

const UpLoad: React.FC = () => {
  const auth = useContext(AuthContext)
  const { loading, request, error, clearError } = HttpHook()
  const [inputFile, setInputFile] = useState<any>(null)
  const [inputText, setInputText] = useState<string>('')
  const [placeholder, setPlaceholder] = useState<string>('Загрузи файл')

  useEffect(() => {
    if (error !== null) {
      alert(error)
      clearError()
    }
  }, [error, clearError])

  const toBase64 = (file: any) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value)
  }

  useEffect(() => {
    if (inputFile) {
      setPlaceholder('Файл добавлен')
    }
  }, [inputFile]);

  const handleFile = async (e: any) => {
    const dataImg = await toBase64(e.target.files[0])
    setInputFile(dataImg)
  };

  const uploadFile = async () => {
    try {
      const data = await request('/api/files/upload', 'POST', 
      { imageBase: inputFile, description: inputText },
        { Autorization: `Bearer ${auth.userId}` });
    } catch (e) { }
  }

  useEffect(() => {
    setInputFile(null)
    setInputText('')
    if (placeholder === 'Файл добавлен') {
      setPlaceholder('Файл загружен, загрузить ещё?')
    }
  }, [loading])

  return (
    <>
      <Title>Зaгрузить файл</Title>
      <InputFake>
        <InputPlaceholder>{placeholder}</InputPlaceholder>
        <Input onChange={handleFile} type="file" />
      </InputFake>
      <InputWrap className='slim'>
        <InputForm
          name='description'
          id='description'
          placeholder='Введите описание'
          value={inputText}
          type='text'
          onChange={handleChange}
        />
      </InputWrap>
      <ButtonWrap>
        <Button disabled={!inputFile || loading} 
          onClick={uploadFile}
         className={inputFile ? 'upload' : 'disabled'}
         >Загрузить файл</Button>
      </ButtonWrap>
    </>
  )
};

export default UpLoad;

const Input = styled.input`
  width:100%;
  height:100%;
  opacity:0;
`;
const InputFake = styled.div`
  position: relative;
  margin: 0 auto;
  width:400px;
  height:200px;
  background:#fff;
  text-align:center;
  box-shadow: 0px 10px 8px 0px rgba(34, 60, 80, 0.2);
`;
const InputPlaceholder = styled.p`
  position: absolute;
  pointer-events:none;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
`;
const ButtonWrap = styled.div`
  margin: 20px auto;
  width:fit-content;
`;

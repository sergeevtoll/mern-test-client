import styled from 'styled-components';

export const Form = styled.div`
  width:300px;
  margin:0 auto;
`;
export const InputWrap = styled.div`
  margin:25px auto 0;
  &.slim{
    width:300px;
  }
  `;
export const Title = styled.h1`
  text-align:center;
  margin-top:20px;
`;
export const Wrapper = styled.div`
  min-height:100vh;
  background: rgba(239, 242, 248, 0.9);
`;
export const Container = styled.div`
  max-width:800px;
  margin:0 auto;
`
export const ButtonsWrap = styled.div`
  margin-top:30px;
  display:flex;
  justify-content:center;
`;
export const ButtonWrap = styled.div`
  margin: 0 10px;
`;
export const Input = styled.input`
  width:100%;
  padding:10px;
  outline:none;
  border:none;
  box-shadow: 0px 10px 8px 0px rgba(34, 60, 80, 0.2);
`;
export const Button = styled.button`
  padding:10px;
  border-radius: 8px;
  cursor: pointer;
  border:none;
  color:#fff;
  outline:none;
  &.reg{
    background:orange;
  }
  &.join{
    background:green;
  }
  &.upload{
    background:lightgreen;
  }
  &.disabled{
    background:red;
  }
`;
export const Header = styled.div`
  padding:20px 0;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;
export const Links = styled.ul`
  display:flex;
  list-style-type:none;
  & a{
    text-decoration:none;
  }
`
export const ItemMenu = styled.div`
  margin: 0 10px;
  padding: 10px;
  border-radius:5px;
  background:none;
  border:1px solid #fff;
  color: black;
  transition: .3s;
  background:#fff;
  text-decoration:none;
  &:hover{
    background:#FFc200;
  }
`;
export const CatalogItem = styled.div`
  position: relative;
  margin-top:20px;
  width:400px;
  height:fit-content;
`;
export const Image = styled.div`
  width:100%;
  & img{
    width: 100%;
  }
`;
export const DescripionCatalog = styled.div`
  display:flex;
  justify-content:space-between;
`;
export const ButtonDelete = styled.button`
  font-size:20px;
  color:#000;
  position: absolute;
  top: 5px;
  right: -50px;
  background:none;
  outline:none;
  border:none;
  cursor: pointer;
`;

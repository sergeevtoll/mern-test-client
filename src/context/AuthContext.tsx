import { createContext } from 'react';

export const AuthContext= createContext({
  userId:'',
  login:( id:string)=>{},
  logout:()=>{},
  isAuth:false
});

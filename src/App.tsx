import React, {useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRouts } from './routs/useRouts';
import { UseAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext';
import { Container, Wrapper } from './styles/styles';
import Menu from './components/menu';

const App: React.FC = () => {
  const {  userId, login, logout } = UseAuth()
  const isAuth = userId? true: false
  const routs = useRouts(isAuth)

  return (
    <AuthContext.Provider value={{  userId, login, logout, isAuth }}>
      <Router >
        <Wrapper>
          <Container>
            {isAuth ? <Menu /> : null}
            <div>
              {routs}
            </div>
          </Container>
        </Wrapper>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

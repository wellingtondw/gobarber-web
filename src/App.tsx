import React from 'react';
import GlobalStyle from './styles/globals';

import AppProvider from './hooks';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;

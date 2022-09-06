import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { About, Contact, Home } from 'pages';
import Register from 'pages/Register';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar/Sidebar';

import './App.css';

function App() {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;

import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';
import { About, Contact, Home } from 'pages';
import Register from 'pages/Register';
import SellList from 'pages/SellList';
import SignIn from 'pages/SignIn';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Sidebar />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='register' element={<Register />} />
            <Route path='signin' element={<SignIn />} />
            <Route path='dat-tp-hcm'>
              <Route path=':districtId' element={<SellList />} />
            </Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;

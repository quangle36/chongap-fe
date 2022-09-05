import { RecoilRoot } from 'recoil'
import { Route, Routes } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from 'components/Layout'
import { About, Contact, Home } from 'pages'
import Sidebar from 'components/Sidebar'
import './App.css'

function App() {
  const queryClient = new QueryClient()

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<Sidebar />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App

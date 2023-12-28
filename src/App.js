import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GenerateCertificate from "./pages/generateCertificate";
import Certificate from "./pages/certificate";
import Layout from './app/layout'


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<GenerateCertificate />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutNLP from './pages/AboutNLP';
import Services from './pages/Services';
import Education from './pages/Education';
import Courses from './pages/Courses';
import Team from './pages/Team';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-nlp" element={<AboutNLP />} />
          <Route path="/tjenester" element={<Services />} />
          <Route path="/utdanning" element={<Education />} />
          <Route path="/kurs" element={<Courses />} />
          <Route path="/team" element={<Team />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CursorEffect from '@/components/CursorEffect'
import ScrollProgress from '@/components/ScrollProgress'
import Home from '@/pages/Home'
import Impressum from '@/pages/Impressum'

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Router>
        <div className="min-h-screen flex flex-col">
          <ScrollProgress />
          <CursorEffect />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/impressum" element={<Impressum />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

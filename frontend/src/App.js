import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Contact />
      
      {/* Simple Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">PROCUFY</div>
            <div className="text-slate-300 text-sm mb-4">Procuradores</div>
            <div className="text-slate-400 text-sm">
              © 2025 Procufy. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
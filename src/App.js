import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Inicio from './pages/Inicio';

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-b from-[#020B14] to-[#071C34]/100 relative">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-40 px-4 md:px-16 pt-4">
        <Header />
      </div>
      
      {/* Main content with top padding to account for fixed header */}
      <div className="pt-24 px-4 md:px-16">
        <Inicio />
      </div>
      
      {/* Glow overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-400/30 via-blue-600/20 to-transparent blur-3xl pointer-events-none"></div>
    </div>
  );
}

export default App;

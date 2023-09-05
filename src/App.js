import './App.css';
import Banking from './components/Banking';
import CashCardAndBoost from './components/CashCardAndBoost';
import HeroSection from './components/HeroSection';
import Investing from './components/Investing';
import Payments from './components/Payments';

function App() {
  return (
    <div className='w-full'>
      <HeroSection/>
      <Payments/>
      <Banking/>
      <CashCardAndBoost/>
      <Investing/>
    </div>
  );
}

export default App;

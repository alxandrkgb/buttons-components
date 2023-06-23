import logo from './logo.svg';
import './App.css';
import FirstGroup from './components/FirstGroup';
import SecondGroup from './components/SecondGroup';
import ThirdGroup from './components/ThirdGroup';
import FourthGroup from './components/FourthGroup';
import FifthGroup from './components/FifthGroup';
import SixthGroup from './components/SixthGroup';
import SeventhGroup from './components/SeventhGroup';
import EightGroup from './components/EightGroup';
import NinthGroup from './components/NinthGroup';

function App() {
  return (
    <div>
      <h1 className="TopHeader">Buttons</h1>
      <FirstGroup></FirstGroup>
      <SecondGroup></SecondGroup>
      <ThirdGroup></ThirdGroup>
      <FourthGroup></FourthGroup>
      <FifthGroup></FifthGroup>
      <SixthGroup></SixthGroup>
      <SeventhGroup></SeventhGroup>
      <EightGroup></EightGroup>
      <NinthGroup></NinthGroup>
      <p className='IconLink'>Icons: <a href="https://material.io/resources/icons/?style=round" target="_blank" rel="noopener noreferrer">https://material.io/resources/icons/?style=round</a></p>
      <p className='IconLink'>created by <a href="https://www.github.com/alxandrkgb" target="_blank" rel="noopener noreferrer" className='UserName'>Alexander</a> - devChallenges.io</p>
    </div>
  );
}

export default App;

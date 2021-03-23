import Skills from '../Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row justify-content-center mb-1">
            <h1 className="title fade-in">Danny Kendrick</h1>
          </div>
          <div className="row justify-content-center mb-5">
            <h2 className="subtitle fade-in">Software Developer</h2>
          </div>
          <Skills />
        </div>
      </header>
    </div>
  );
}

export default App;

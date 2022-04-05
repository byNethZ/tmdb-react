import './App.css';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div className="app">
      <h1>Hello World!</h1>
      <Row title='Originals' fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  );
}

export default App;

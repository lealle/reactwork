import './App.css';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';
import Compo1 from './component/Compo1';

function App() {
  return (
    <div className="App">
      <MyHeader/>
      <section>
        <h2>본문</h2>
        <Compo1/>
        <Compo1/>
        <Compo1/>
      </section>
      <MyFooter/>
    </div>

  );
}

export default App;

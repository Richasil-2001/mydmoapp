import CartCounter from './components/CartCounter';
import './App.css';
import Cardlist from './components/Cardlist';
import { createContext } from 'react';
import ComponentA from './components/Parent to child/Component A';
export const userContext = createContext();
function App() {
  //creating context 
  const placeholder = "placeholder image"
  const isReadOnly = false;
  return (
    <userContext.Provider value={{placeholder, isReadOnly}}>
      <div className="App">

        <CartCounter />
        <Cardlist />
        <ComponentA/>
      </div>
    </userContext.Provider>
  );
}

export default App;
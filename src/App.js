import{ useState } from 'react';
import './App.css';
import Imagecard from './components/Imagecard';
import {userData} from'./constant/constant';
function App() {
  const [showFlag, setShowFlag]=useState(null);
  const clickHandler = (Id) =>{
    showFlag? setShowFlag(null) : setShowFlag(Id);
  };

  return (
    <div className="App">
      {
        userData.map((user) => (
          <div key={user.githubId}>
          <Imagecard
            name={user.name}
            imgLink={`https://avatars.githubusercontent.com/u/${user.githubId}`}
          />
          <h3 style={{ cursor: 'pointer' }} onClick={()=>clickHandler(user.githubId)}>{user.isstudent ?"student":"mentor"}⬇️⬇️⬇️</h3>
          {showFlag===user.githubId &&(<p>{user.bioDescription}</p>)}
          </div>
        ))
      }
    </div>
  );
}

export default App;
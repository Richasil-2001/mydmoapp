import { useState} from "react";
import { userData } from "../constants/constant";
import Imagecard from "./Imagecard";
    const Cardlist = ()=> {
          const [showFlag, setShowFlag]=useState(null);
          const clickHandler = (ID) =>{
            showFlag? setShowFlag(null) : setShowFlag(ID);
          };
    return(
      <>
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
      </>

    )
}
export default Cardlist;
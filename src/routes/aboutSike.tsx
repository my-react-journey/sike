import { useNavigate } from "react-router-dom";

export default function AboutSike() {

  let navigate = useNavigate()
  let logOut = () => {

    // send account delete request
    // delete everything from idb
    // do the following
    navigate("/")
  }
  
  return (
    <>
      <div>Hello Dolphin chan</div>


      <button type="button" onClick={logOut}>Log Out</button>
    
    </>
  );
}
import { useNavigate } from "react-router-dom";

export default function AppComponent() {

    let navigate = useNavigate()
  
    let getLocation = () => {
        console.log("Got Location")
        navigate("/")
    }


    return (
      <>
      
        <div>Oops, we need location to function</div>

        <button type="button" onClick={getLocation}>Give Location</button>

      </>
    );
  }
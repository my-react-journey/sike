import { useNavigate } from "react-router-dom";

export default function NewSike() {

  let navigate = useNavigate()
  let goBack = () => {

    // get post content, check for abnomalities,
    // post it to API
    // after 201, do the following

    navigate("/")
  }
  
  return (
    <>
      <h1>Nothing here.</h1> 

      <button type="button" onClick={goBack}>Go Back</button>
    
    </>
  );
}
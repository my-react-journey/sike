import { useNavigate } from "react-router-dom";

export default function NewSike() {

  let navigate = useNavigate()
  let postSike = () => {

    // get post content, check for abnomalities,
    // post it to API
    // after 201, do the following

    navigate(-1)
  }
  
  return (
    <>
      <input type="text" placeholder="Type something" />    

      <button type="button" onClick={postSike}>Say Sike</button>
    
    </>
  );
}
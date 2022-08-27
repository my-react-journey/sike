import { Link } from "react-router-dom";

export default function Sike() {

  let postComment = () => {

    // post the comment and update the UI
    console.log("Added Comment")
  }
  
  return (
    <>
        <button type="button">
            <Link to="/">Go Back</Link>
        </button>


      <h1>First Sike of id 124</h1>


        <input type="text" placeholder="Enter comment"/>
      <button type="button" onClick={postComment}>Send Comment</button>
    
    </>
  );
}
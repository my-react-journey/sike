import { Link } from "react-router-dom";

export default function AppComponent() {

  

    return (
      <>
      
        <div>Icon, New, Live, Sike Points</div>

        <button type="button">
            <Link to="/newSike">Create New Sike</Link>
        </button>

        <button type="button">
            <Link to="/aboutSike">About Sike (Image)</Link>
        </button>


        <br /><br />

        <h1>Sikes</h1>

        <br />

        <div><Link to="/sikes/124">First Sike of id 124</Link></div>

      </>
    );
  }
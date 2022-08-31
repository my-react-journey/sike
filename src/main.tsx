import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import AboutSike from "./routes/aboutSike"
import NewSike from "./routes/newSike"
import NewUser from "./routes/newUser"
import NoLocation from "./routes/noLocation"
import Faq from "./routes/faq"
import Sike from "./routes/sike"
import HomePage from "./assets/components/homePage"

import NotFoundError from "./routes/notFoundError"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="aboutSike" element={<AboutSike />} />
			<Route path="newSike" element={<NewSike />} />
			<Route path="newUser" element={<NewUser />} />
			<Route path="noLocation" element={<NoLocation />} />
			<Route path="faq" element={<Faq />} />
			<Route path="home" element={<HomePage />} />
			<Route path="sikes/:sikeId" element={<Sike />} />
			
      <Route path="*" element={<NotFoundError />} />
		</Routes>
	</BrowserRouter>
)

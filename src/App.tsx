import AppComponent from "./assets/components/AppComponent"
import LoadingPage from "./assets/components/loadingPage"
import { getStorage, setStorage } from "./utilities/indexedDb"
import { getCurrentPosition } from "./utilities/geolocation"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function App() {
	let navigate = useNavigate()
	let [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setTimeout(async () => {
			let user = await getStorage("user")
			if (!user) {
				return navigate("/home")
			}

			let locationData : any
			try {
				locationData = await getCurrentPosition()
				setIsLoading(false)
				return true
			} catch (error) {
				return navigate("/noLocation")
			}

		}, 2000)
	})

	if (isLoading) {
		return <LoadingPage />
	} else {
		return <AppComponent />
	}

	// if user is authorized
	// if location is enabled
	// render appComponent
	// render noLocation
	// render newUser
}

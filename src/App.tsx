import AppComponent from "./assets/components/AppComponent"
// import LoadingPage from "./assets/components/loadingPage"
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
				let data = {
					latitude: locationData.coords.latitude,
					longitude: locationData.coords.longitude,
					accuracy: locationData.coords.accuracy
				}
				await setStorage("location", data)
				setIsLoading(false)
				return true
			} catch (error) {
				return navigate("/noLocation")
			}

		}, 0)
	}, [])

	return (
		<AppComponent />
	)
	// if (isLoading) {
	// 	return <AppComponent />
	// } else {
	// 	return <AppComponent />
	// }

	// if user is authorized
	// if location is enabled
	// render appComponent
	// render noLocation
	// render newUser
}

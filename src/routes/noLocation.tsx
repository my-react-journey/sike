import { useNavigate } from "react-router-dom"
import styles from "../styles/noLocation.module.css"
import noLocation from "../assets/components/componentImages/noLocation.webp"
import { setStorage } from "../utilities/indexedDb"
import { useState } from "react"
import { getCurrentPosition } from "../utilities/geolocation"

export default function AppComponent() {
	let [status, setStatus] = useState(
		"This app requires your Geolocation to refresh the feed"
	)

	let navigate = useNavigate()

	let getLocation = async () => {
		let location: any = await getCurrentPosition()
		let data = {
			latitude: location.coords.latitude,
			longitude: location.coords.longitude,
			accuracy: location.coords.accuracy,
		}
		console.log(data)
		if (data.latitude) {
			await setStorage("location", data)
			navigate("/")
		} else {
			setStatus(
				"Unable to get your location, please read the instructions below"
			)
			navigate("/noLocation")
		}
	}

	let whyLocation = () => {
		navigate("/faq")
	}

	return (
		<>
			<div className={styles.wrapper}>
				<img
					className={styles.image}
					src={noLocation}
					alt="No GPS Location Available"
					height={128}
					width={128}
				/>

				<span className={styles.errorText}>{status}</span>
				<span className={styles.makeSure}>
					Make sure the GPS is turned ON and the browser has location
					access
				</span>
				<span className={styles.learnMore} onClick={whyLocation}>
					Learn more about how to turn it on, or why we need it, or
					how it is used ↗
				</span>

				<button
					type="button"
					className={styles.givePermissionButton}
					onClick={getLocation}
				>
					Give Permission
				</button>
			</div>
		</>
	)
}

import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import styles from "./componentStyles/appcomponent.module.css"
import sikeLogo from "../../assets/components/componentImages/sikeLogo.webp"
import pencil from "../../assets/components/componentImages/pencil.webp"
import settingsSVG from "../../assets/components/svgs/settings.svg"

import { getCurrentPosition } from "../../utilities/geolocation"
import endpoint from "../../APIEndpoint"
import { SikeProps } from "../../utilities/types"
import SikesContainer from "./Sike"

export default function AppComponent() {

	let [sikes, setSikes] = useState([] as SikeProps[])

	let fetchSikes = async (): Promise<void> => {
		try {
				
			let position = await getCurrentPosition()
			
			let location = {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude
			}

			let response = await fetch(`${endpoint}/sike/getAll?latitude=${location.latitude}&longitude=${location.longitude}`)
			let data = await response.json()
			setSikes([...data])

		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchSikes()
	}, [])

	return (
		<>
			<div className={styles.wrapper}>
				<Header />

				<div className={styles.sikesContainer}>

					<SikesContainer sikes={sikes}/>

				</div>

				<SikeCreator />
			</div>
		</>
	)
}

function Header() {
	return (
		<div className={styles.header}>
			<img
				title="Tap to see your profile details"
				aria-label="Tap to see your profile details"
				src={sikeLogo}
				alt="Sike Logo"
				height={40}
				width={40}
			/>

			<span className={styles.appText}>Sike</span>

			<div className={styles.centerButtons}></div>

			<img
				title="Tap to modify app settings"
				aria-label="Tap to modify app settings"
				src={settingsSVG}
				alt="Settings"
				height={30}
				width={30}
			/>
		</div>
	)
}


function SikeCreator() {
	let navigate = useNavigate()

	let createNew = () => {
		navigate("/newSike")
	}

	return (
		<div
			title="Tap to create a new sike!"
			aria-label="Tap to create a new sike!"
			onClick={createNew}
			className={styles.createButton}
		>
			<img src={pencil} alt="Pencil Create new sike" height={30} width={30} />
		</div>
	)
}
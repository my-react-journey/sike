import { useNavigate } from "react-router-dom"
import styles from "./componentStyles/appcomponent.module.css"
import sikeLogo from "../../assets/components/componentImages/sikeLogo.webp"
import pencil from "../../assets/components/componentImages/pencil.webp"
import settingsSVG from "../../assets/components/svgs/settings.svg"

export default function AppComponent() {
	let navigate = useNavigate()

	let createNew = () => {
		navigate("/newSike")
	}

	return (
		<>
			<div className={styles.wrapper}>
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

				<div className={styles.sikesContainer}></div>

				<div
					title="Tap to create a new sike!"
					aria-label="Tap to create a new sike!"
					onClick={createNew}
					className={styles.createButton}
				>
					<img src={pencil} alt="Pencil Create new sike" height={30} width={30} />
				</div>
			</div>
		</>
	)
}

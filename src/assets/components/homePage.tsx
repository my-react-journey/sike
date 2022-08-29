import { useNavigate } from "react-router-dom"
import styles from "../../styles/homeStyles.module.css"
import sikeLogo from "./componentImages/sikeLogo.webp"

function HomePage() {
	let navigate = useNavigate()

	let handleClick = () => {
		setTimeout(() => {
      navigate("/newUser")
    }, 1000)
	}

	return (
		<>
			<div className={styles.wrapper}>
				<img src={sikeLogo} alt="Sike Logo" height={128} width={128} />

				<div className={styles.welcomeText}>Welcome to Sike</div>

				<div className={styles.whatIsThis}>
					<span className={styles.whatIsThisSpan}>
						Broadcast anything to the world 🌐 around you
						anonymously👽 within 5km radius 📍
					</span>
					<span className={styles.whatIsThisSpan}>Auto delete contents after 24 hours ⏳</span>
					<span className={styles.whatIsThisSpan}>No account needed 🐾</span>
				</div>

				<button
					type="button"
					className={styles.saySikeButton}
					onClick={handleClick}
				>
					Start Siking! 😂
				</button>
			</div>
		</>
	)
}

export default HomePage

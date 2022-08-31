import styles from "../../styles/loadingPage.module.css"
import sikeLogo from "./componentImages/sikeLogo.webp"

function LoadingPage() {

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.requestLoader}>
					<img src={sikeLogo} alt="Sike Logo" height={128} width={128} />
				</div>
			</div>
		</>
	)
}

export default LoadingPage

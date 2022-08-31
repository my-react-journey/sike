import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./styles/newUser.module.css"
import "./styles/newUser.module.css"
import cat from "../assets/gifs/cat.gif"
import { setStorage } from "../utilities/indexedDb"
import endpoint from "../APIEndpoint"

import { ClientJS } from "clientjs"

function NewUser() {
	let navigate = useNavigate()

	let [status, setStatus] = useState("Setting things up for the new Siker ⚡")

	useEffect(() => {
		setTimeout(async () => {
			let client = new ClientJS()
			let ua = client.getUserAgent()
			let canvasPrint = client.getCanvasPrint()

			let fingerprint = client.getCustomFingerprint(ua, canvasPrint)
			setStorage("fingerprint", fingerprint)

			console.log(`Registering user: ${fingerprint}`)
			let data
			try {
				let response = await fetch(`${endpoint}/user`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						fingerprint
					})
				})
				data = await response.json()
			} catch (error) {
				return setStatus("Error setting up, please try again")
			}
			
			await setStorage("user", data)
			navigate("/")

		}, 0)
	})

	return (
		<div className={styles.wrapper}>
			<img
				className={styles.catGif}
				src={cat}
				alt="Loading Content"
				height={150}
				width={225}
			/>

			<span className={styles.loadingText}>Loading...</span>

			<span className={styles.infoSpan}>{status}</span>
		</div>
	)
}

export default NewUser

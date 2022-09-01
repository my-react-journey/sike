import { useNavigate } from "react-router-dom"
import styles from "./styles/newSike.module.css"
import campaign from "../assets/components/svgs/campaign.svg"
import back from "../assets/components/svgs/back.svg"
import { useEffect, useRef } from "react"

export default function NewSike() {
	let inputLimit: number = 280

	let sikeInputTextarea = useRef<HTMLTextAreaElement>(null)
	let inputRemaining = useRef<HTMLSpanElement>(null)

	let navigate = useNavigate()

	let handleColorChange = (): string | undefined => {
		let colorOne = "#0070f3"
		let colorTwo = "#aa00ff"
		let colorThree = "#e51f26"

		let textField = sikeInputTextarea.current
		let letterCount = textField?.value?.length ?? 0
		let remaining = inputLimit - letterCount

		if (remaining < 0) {
			if(sikeInputTextarea.current?.value != undefined)

			sikeInputTextarea.current.value = sikeInputTextarea.current.value.slice(0, inputLimit)
			return
		}


		let text = textField?.value

		if(inputRemaining.current != undefined) {
			inputRemaining.current.innerText = remaining.toString()
			
			let percent = remaining / inputLimit

			if (percent > 0.6) {
				inputRemaining.current.style.color = colorOne
			} else if (percent > 0.4) {
				inputRemaining.current.style.color = colorTwo
			} else {
				inputRemaining.current.style.color = colorThree
			}
		}

		return text
	}

	let handleInput = () => {
		let text = handleColorChange()
		window.localStorage.setItem("text", text || "")
	}

	useEffect(() => {
		let text = window.localStorage.getItem("text")
		if (text != null) {
			sikeInputTextarea.current!.value = text
			handleColorChange()
		}
	})


	let postSike = () => {
		// get post content, check for abnomalities,
		// post it to API
		// after 201, do the following

		navigate(-1)
	}

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<img
						src={back}
						alt="back"
						height={30}
						width={30}
						onClick={() => navigate(-1)}
					/>
					<span className={styles.appText}>Post new Sike</span>
					<img
						src={campaign}
						alt="Post new Sike"
						height={30}
						width={30}
					/>
				</div>

				<div className={styles.sikeInputContainer}>
					<textarea
						ref={sikeInputTextarea}
						onInput={handleInput}
						className={styles.sikeInput}
						placeholder="What's on your mind?"
						title="Type what's on your mind."
						aria-label="Type what's on your mind."
					></textarea>

					<span className={styles.inputCharsRemaining}>
						<span ref={inputRemaining} className={styles.inputRemaining}>280</span>
						<span className={styles.inputLimit}>
							{" "}
							/ {inputLimit}
						</span>
					</span>
				</div>
			</div>
		</>
	)
}

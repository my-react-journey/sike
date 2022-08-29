import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./styles/newUser.module.css"
import "./styles/newUser.module.css"
import cat from "../assets/gifs/cat.gif"
import { setStorage } from "../utilities/indexedDb"

import { ClientJS } from 'clientjs';

function NewUser() {

  let navigate = useNavigate()

  useEffect(() => {
    
    let client = new ClientJS();
    let ua = client.getUserAgent()
		let canvasPrint = client.getCanvasPrint();

		let fingerprint = client.getCustomFingerprint(ua, canvasPrint);

		console.log(fingerprint);
    console.log("Registering new user")

    setStorage("fingerprint", fingerprint)
   
  })

  return (
    <div className={styles.wrapper}>
      <img className={styles.catGif} src={cat} alt="Loading Content" height={150} width={225} />

      <span className={styles.loadingText}>Loading...</span>

      <span className={styles.infoSpan}>Setting things up for the new Siker ⚡</span>

    </div>
  )
}

export default NewUser

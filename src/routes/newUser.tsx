import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function NewUser() {

  let navigate = useNavigate()

  useEffect(() => {
    console.log("Registering new user")

    setTimeout(() => {
      navigate("/")
    }, 3000)
  })

  return (
    <div className="loading">
      Getting things ready for the new pope.
    </div>
  )
}

export default NewUser

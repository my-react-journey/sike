import upvote from "../../assets/components/svgs/upvote.svg"
import downvote from "../../assets/components/svgs/downvote.svg"
import { SikeCardProps, SikeProps } from "../../utilities/types"
import styles from "./componentStyles/sike.module.css"
import { useNavigate } from "react-router-dom"

export default function SikesContainer(props: any) {
	let sikes = props.sikes
	return (
		<div className={styles.sikesContainer}>
			{sikes.map((sike: SikeProps, index: number) => (
				<SikeCard key={index} sike={sike} />
			))}
		</div>
	)
} 

type Location = {
	latitude: number,
	longitude: number
}

function getDistanceFromLocation(location1: Location, location2: Location): number {
    var R = 6371; // earth's radius in km
    var dLat = toRad(location1.latitude - location2.latitude);
    var dLon = toRad(location1.longitude - location2.longitude);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(toRad(location1.latitude)) * Math.cos(toRad(location2.latitude)) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
}

function toRad(deg: number): number {
    return deg * (Math.PI/180);
}

function SikeCard(props: SikeCardProps) {
	let navigate = useNavigate()

	let sike = props.sike

	let viewSike = () => {
		navigate(`/aboutSike/${sike._id}`)
	}

	return (
		<div
			title="Tap to view this sike"
			aria-label="Tap to view this sike"
			onClick={viewSike}
			className={styles.sike}
		>
			<div className={styles.sikeBody}>
				<span className={styles.sikeContent}>{sike.text}</span>
				<div className={styles.sikeActionContainer}>
					<img src={upvote} alt="Upvote this sike" height={15} width={15}/>
					<span className={styles.totalUpvotesCount}>{sike.totalUpvotes}</span>
					<img src={downvote} alt="Downvote this sike" height={15} width={15}/>
				</div>
			</div>
		</div>
	)
}
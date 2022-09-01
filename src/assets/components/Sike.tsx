import upvote from "../../assets/components/svgs/upvote.svg"
import downvote from "../../assets/components/svgs/downvote.svg"
import activatedUpvote from "../../assets/components/svgs/activatedUpvote.svg"
import activatedDownvote from "../../assets/components/svgs/activatedDownvote.svg"
import { SikeCardProps, SikeProps, LocationProp } from "../../utilities/types"
import styles from "./componentStyles/sike.module.css"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export default function SikesContainer(props: any) {
	let sikes = props.sikes
    let location: LocationProp = props.location
    return (
        <div className={styles.sikesContainer}>
            {sikes.map((sike: SikeProps, index: number) => (
                <SikeCard key={index} sike={sike} location={location}/>
            ))}
        </div>

    )
} 

function getDistanceFromLocation(location1: LocationProp, location2: LocationProp): number {
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

function timeDifference(previous :Date) :string {
	let msPerMinute = 60 * 1000
	let msPerHour = msPerMinute * 60
	let msPerDay = msPerHour * 24
	let msPerMonth = msPerDay * 30
	let msPerYear = msPerDay * 365

	let elapsed = +(new Date()) - +(previous)

	if (elapsed < msPerMinute) {
		if (elapsed / 1000 < 5) return "Just now"
		return Math.round(elapsed / 1000) + "s"
	} else if (elapsed < msPerHour) {
		return Math.round(elapsed / msPerMinute) + "m"
	} else if (elapsed < msPerDay) {
		return Math.round(elapsed / msPerHour) + "h"
	} else if (elapsed < msPerMonth) {
		return Math.round(elapsed / msPerDay) + "d"
	} else if (elapsed < msPerYear) {
		return Math.round(elapsed / msPerMonth) + "month"
	} else {
		return Math.round(elapsed / msPerYear) + "y"
	}
}

function distanceString(distance: number): string {

    distance = parseFloat(distance.toFixed(2))

    if(distance >= 1) {
        return `${distance} km`
    } else {
        if(distance * 1000 > 0.5) {
            return `Nearby`
        } else {
            return `Super Nearby ඞ`
        }
    }
}

function SikeCard(props: SikeCardProps) {
	let navigate = useNavigate()

	let sike = props.sike
    let location : LocationProp = props!.location

    let iconSize = 30

    let distance = distanceString(getDistanceFromLocation(location, {
        latitude: sike.location.coordinates[1],
        longitude: sike.location.coordinates[0]
    }))


    let [time, setTime] = useState(timeDifference(new Date(sike.createdAt))) 

	let viewSike = () => {
		navigate(`/aboutSike/${sike._id}`)
	}

	return (
		<div
            className={styles.sike}
            onClick={viewSike}
			title="Tap to view this sike"
			aria-label="Tap to view this sike"
		>
			<div className={styles.sikeBody}>
				<span className={styles.sikeContent}>{sike.text}</span>
				<div className={styles.sikeActionContainer}>
					<img src={activatedUpvote} alt="Upvote this sike" height={iconSize} width={iconSize}/>
					<span className={styles.totalUpvotesCount}>{sike.totalUpvotes}</span>
					<img src={activatedDownvote} alt="Downvote this sike" height={iconSize} width={iconSize}/>
				</div>
			</div>

            <div className={styles.sikeFooter}>
                <span className={styles.timeDifference}>{time} &bull;</span>
                <span className={styles.distanceBetween}>{distance} &bull;</span>
                <span className={styles.totalComments}>{sike.comments.length} Comments</span>
            </div>
		</div>
	)
}
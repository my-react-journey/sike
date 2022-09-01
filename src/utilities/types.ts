export type SikeProps = {
	comments: string[],
	createdAt: string,
	downvotedBy: string[],
	location: {
		type: string, 
		coordinates: number[]
	},
	madeBy: string,
	name: string,
	profilePic: string,
	text: string,
	totalUpvotes: number,
	upvotedBy: string[],
	__v: number,
	_id: string
}

export type SikeCardProps = {
	sike: SikeProps,
	location: LocationProp
}

export type LocationProp = {
	latitude: number,
	longitude: number,
    accuracy?: number
}
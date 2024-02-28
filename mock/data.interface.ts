export interface IData {
	title: string
	items: IItem[]
	stepItems: IStepItem[]
	step: IStep
	link?: string
}

export interface IItem {
	id: string
	name: string
	src?: string
}

export interface IStepItem {
	id: string
	isActive: boolean
}

export interface IStep {
	all: number
	current: number
}

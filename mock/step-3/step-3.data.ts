import { IData } from '@/mock/data.interface'

export const data: IData = {
	title: 'Какая толщина стен у Вас?',
	items: [
		{
			id: '1',
			name: 'Толщина стен (см)'
		}
	],
	stepItems: [
		{
			id: '1',
			isActive: true
		},
		{
			id: '2',
			isActive: true
		},
		{
			id: '3',
			isActive: true
		},
		{
			id: '4',
			isActive: false
		},
		{
			id: '5',
			isActive: false
		}
	],
	step: {
		all: 5,
		current: 2
	}
}

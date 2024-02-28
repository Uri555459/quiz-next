import { IData } from '@/mock/data.interface'

export const data: IData = {
	title: 'Габариты дома:',
	items: [
		{
			id: '1',
			name: 'Длина (м)'
		},
		{
			id: '2',
			name: 'Ширина (м)'
		},
		{
			id: '3',
			name: 'Высота (м)'
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
			isActive: false
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

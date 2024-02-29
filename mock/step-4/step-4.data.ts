import { IData } from '@/mock/data.interface'

export const data: IData = {
	title: 'Требуется ли вывозить мусор:',
	link: '/step-5',
	items: [
		{
			id: '1',
			name: 'Да, требуется'
		},
		{
			id: '2',
			name: 'Нет, не требуется'
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
			isActive: true
		},
		{
			id: '5',
			isActive: false
		}
	],
	step: {
		all: 5,
		current: 4
	}
}

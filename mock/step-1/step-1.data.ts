import { IData } from '@/mock/data.interface'

export const data: IData = {
	title: 'Какой основной материал объекта:',
	items: [
		{
			id: '1',
			name: 'Дерево',
			src: '/step-1/1.jpg'
		},
		{
			id: '2',
			name: 'Кирпич',
			src: '/step-1/2.jpg'
		},
		{
			id: '3',
			name: 'Бетон',
			src: '/step-1/3.jpg'
		},
		{
			id: '4',
			name: 'Блоки',
			src: '/step-1/4.jpg'
		},
		{
			id: '5',
			name: 'Металл',
			src: '/step-1/5.jpg'
		},
		{
			id: '6',
			name: 'Смешанный мусор',
			src: '/step-1/6.jpg'
		}
	],
	stepItems: [
		{
			id: '1',
			isActive: true
		},
		{
			id: '2',
			isActive: false
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
		current: 1
	}
}

import cn from 'clsx'
import type { FC } from 'react'

import { TextField, Typography } from '@/components'

import { IClassName } from '@/types/className.interface'

import styles from './CardDimension.module.scss'

interface CardDimensionProps extends IClassName {
	title: string
}

export const CardDimension: FC<CardDimensionProps> = ({ className, title }) => {
	return (
		<div className={cn(styles.card, className)}>
			<Typography className='mb-2 text-center'>{title}</Typography>
			<TextField placeholder='120' />
		</div>
	)
}

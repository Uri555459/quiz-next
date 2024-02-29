import cn from 'clsx'
import type { FC, ReactNode } from 'react'

import { IClassName } from '@/types/className.interface'

import styles from './CardTrash.module.scss'

interface CardTrashProps extends IClassName {
	children: ReactNode
	id?: string
}

export const CardTrash: FC<CardTrashProps> = ({ children, className, id }) => {
	return (
		<label
			htmlFor={id}
			className={cn(styles.card, className)}
		>
			{children}
		</label>
	)
}

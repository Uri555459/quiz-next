import cn from 'clsx'
import type { FC, ReactNode } from 'react'

import { IClassName } from '@/types/className.interface'

import styles from './GridList.module.scss'

interface GridListProps extends IClassName {
	children: ReactNode
}
export const GridList: FC<GridListProps> = ({ children, className }) => {
	return <div className={cn(styles['grid-list'], className)}>{children}</div>
}

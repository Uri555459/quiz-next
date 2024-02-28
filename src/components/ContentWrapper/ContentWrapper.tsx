import cn from 'clsx'
import type { FC, ReactNode } from 'react'

import { IClassName } from '@/types/className.interface'

import styles from './ContentWrapper.module.scss'

interface ContentWrapperProps extends IClassName {
	children: ReactNode
}

export const ContentWrapper: FC<ContentWrapperProps> = ({
	children,
	className
}) => {
	return <div className={cn(styles.wrapper, className)}>{children}</div>
}

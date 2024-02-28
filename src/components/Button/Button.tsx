import cn from 'clsx'
import Image from 'next/image'
import type { FC, ReactNode } from 'react'

import { IClassName } from '@/types/className.interface'

import styles from './Button.module.scss'

interface ButtonProps extends IClassName {
	children: ReactNode
}

export const Button: FC<ButtonProps> = ({ children, className }) => {
	return (
		<button className={cn(styles.button, className)}>
			{children}{' '}
			<Image
				src='/button-arrow.svg'
				alt=''
				width={20}
				height={20}
			/>
		</button>
	)
}

import cn from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import { IClassName } from '@/types/className.interface'

import styles from './StepBadge.module.scss'

interface StepBadgeProps extends IClassName {
	isActive?: boolean
	isArrow?: boolean
}

export const StepBadge: FC<StepBadgeProps> = ({
	className,
	isActive,
	isArrow
}) => {
	return (
		<>
			<div
				className={cn(styles.badge, className, {
					[styles.active]: isActive
				})}
			>
				{isActive ? (
					<Image
						src='/check-green.svg'
						alt=''
						width={17}
						height={13}
					/>
				) : (
					<Image
						src='/question.svg'
						alt=''
						width={17}
						height={13}
					/>
				)}
			</div>
			{isArrow && (
				<Image
					className='mx-2'
					src='/arrow-right.svg'
					alt=''
					width={6}
					height={10}
				/>
			)}
		</>
	)
}

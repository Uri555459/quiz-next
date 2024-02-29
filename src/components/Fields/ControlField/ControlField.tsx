import cn from 'clsx'
import type { FC, InputHTMLAttributes } from 'react'

import { IClassName } from '@/types/className.interface'

import styles from './ControlField.module.scss'

type Variant = 'small' | 'big'

interface ControlFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	id?: string
	type?: string
	variant?: Variant
	className?: string
}

export const ControlField: FC<ControlFieldProps> = ({
	name,
	type = 'radio',
	className,
	id,
	variant = 'small'
}) => {
	const size =
		variant === 'small'
			? 'h-[18px] w-[18px] before:h-[13px] before:w-[17px] before:left-1 before:top-0'
			: 'h-[42px] w-[42px] before:h-[28px] before:w-[37px] before:left-2 before:top-0'

	console.log(size)

	return (
		<label className={cn(styles.label, className)}>
			<input
				className={styles.input}
				name={name}
				type={type}
				id={id}
			/>
			<span className={cn(styles.span, size)}></span>
		</label>
	)
}

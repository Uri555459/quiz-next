import cn from 'clsx'
import { type FC, type InputHTMLAttributes, forwardRef } from 'react'

import styles from './TextField.module.scss'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
}

export const TextField: FC<TextFieldProps> = ({ className, ...props }) => {
	console.log({ ...props })

	return (
		<input
			type='text'
			className={cn(styles.input, className)}
			{...props}
		/>
	)
}

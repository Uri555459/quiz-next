import { Typography } from '..'
import Image from 'next/image'
import type { FC } from 'react'

import styles from './CardMaterial.module.scss'

interface CardMaterialProps {
	id: string
	src: string
	name: string
	checked?: boolean
}

export const CardMaterial: FC<CardMaterialProps> = ({
	id,
	src,
	name,
	checked
}) => {
	return (
		<label
			htmlFor={id}
			className={styles.label}
		>
			<div className={styles['image-wrap']}>
				<Image
					className={styles.image}
					src={src}
					alt=''
					width={220}
					height={100}
				/>
			</div>
			<input
				name={name}
				className={styles.input}
				type='radio'
				id={id}
				checked={checked}
			/>
			<div className={styles.bottom}>
				<span className={styles.span}></span>
				<Typography
					tag='span'
					className='text-[13px] font-normal'
				>
					Кирпич
				</Typography>
			</div>
		</label>
	)
}

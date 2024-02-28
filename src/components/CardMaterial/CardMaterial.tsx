import { Typography } from '..'
import Image from 'next/image'
import type { FC } from 'react'

import styles from './CardMaterial.module.scss'

interface CardMaterialProps {
	id: string
	src?: string
	name: string
	title: string
}

export const CardMaterial: FC<CardMaterialProps> = ({
	id,
	src,
	name,
	title
}) => {
	return (
		<label
			htmlFor={id}
			className={styles.label}
		>
			<div className={styles['image-wrap']}>
				<Image
					className={styles.image}
					src={src!}
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
			/>
			<div className={styles.bottom}>
				<span className={styles.span}></span>
				<Typography
					tag='span'
					className='text-[13px] font-normal'
				>
					{title}
				</Typography>
			</div>
		</label>
	)
}

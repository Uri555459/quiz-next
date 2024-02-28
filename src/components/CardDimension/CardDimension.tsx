import { FC } from 'react'

import { TextField, Typography } from '@/components'

import styles from './CardDimension.module.scss'

export const CardDimension: FC = () => {
	return (
		<div className={styles.card}>
			<Typography className='mb-2 text-center'>Длина (м)</Typography>
			<TextField placeholder='120' />
		</div>
	)
}

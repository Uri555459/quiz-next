import Image from 'next/image'
import { FC } from 'react'

import { Typography } from '@/components'

interface SaleProps {
	price: number
}

export const Sale: FC<SaleProps> = ({ price }) => {
	return (
		<div className='relative shrink-0'>
			<Image
				className='object-cover'
				width={360}
				height={437}
				src='/sale-bg.png'
				alt=''
				priority
			/>
			<div className='absolute left-1/2 top-9 -z-0 w-[230px] -translate-x-1/2'>
				<div className='relative'>
					<Image
						className='h-auto w-auto object-cover'
						width={230}
						height={110}
						src='/sale-ticket-top.svg'
						alt=''
					/>
					<Typography
						tag='span'
						className='absolute left-1/2 top-1/2 w-[150px] -translate-x-1/2 -translate-y-1/2 text-center text-lg font-extrabold'
					>
						Ваша скидка за ответы
					</Typography>
				</div>
				<div className='relative'>
					<Image
						className='object-cover'
						width={230}
						height={187}
						src='/sale-ticket-bottom.svg'
						alt=''
					/>
					<Typography
						tag='span'
						className='absolute left-1/2 top-1/2 w-[150px] -translate-x-1/2 -translate-y-1/2 text-center text-[55px] font-extrabold'
					>
						{price} ₽
					</Typography>
				</div>
			</div>
			<Image
				className='absolute bottom-0 right-0 object-cover'
				width={232}
				height={198}
				src='/piggy.png'
				alt=''
			/>
		</div>
	)
}

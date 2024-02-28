import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image'
import { FC, ReactNode } from 'react'

import { Typography } from '@/components'

import './globals.scss'

const openSans = Open_Sans({
	subsets: ['cyrillic'],
	display: 'swap',
	weight: ['400']
})

export const metadata: Metadata = {
	title: 'Quiz app'
}

interface RootLayoutProps {
	children: Readonly<ReactNode>
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
	return (
		<html lang='en'>
			<body className={openSans.className}>
				<main className='flex min-h-screen items-center justify-center'>
					<div className='container max-w-[1200px]'>
						<div className='flex justify-between rounded-xl border-[2px] border-solid border-[#eceff4] bg-[#f9fafc] p-5'>
							{children}
						</div>
					</div>
				</main>
			</body>
		</html>
	)
}

export default RootLayout

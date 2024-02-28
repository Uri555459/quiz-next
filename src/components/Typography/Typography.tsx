import cn from 'clsx'
import { Open_Sans } from 'next/font/google'
import type { FC, ReactNode } from 'react'

import { IClassName } from '@/types/className.interface'

const openSans = Open_Sans({
	subsets: ['cyrillic'],
	display: 'swap',
	weight: ['400', '700', '800']
})

type Tag = 'h1' | 'span' | 'p'

interface TypographyProps extends IClassName {
	children: ReactNode
	tag?: Tag
}

export const Typography: FC<TypographyProps> = ({
	children,
	className,
	tag = 'h1'
}) => {
	const Component = tag

	return (
		<Component className={cn(openSans.className, className)}>
			{children}
		</Component>
	)
}

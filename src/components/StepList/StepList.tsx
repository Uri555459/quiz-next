import type { FC } from 'react'

import { StepBadge } from '@/components'

import { IStepItem } from '@/mock/data.interface'

interface StepListProps {
	data: IStepItem[]
}

export const StepList: FC<StepListProps> = ({ data }) => {
	return (
		<>
			{data.map((item, index) => (
				<StepBadge
					key={item.id}
					isArrow={index + 1 !== data.length}
					isActive={item.isActive}
				/>
			))}
		</>
	)
}

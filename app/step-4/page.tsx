import { Metadata } from 'next'

import {
	Button,
	CardDimension,
	CardTrash,
	ContentWrapper,
	ControlField,
	GridList,
	Sale,
	StepList,
	Typography
} from '@/components'

import { data } from '@/mock/step-4/step-4.data'

export const metadata: Metadata = {
	title: 'Quiz app | step 4'
}

const Step4 = () => {
	return (
		<>
			<ContentWrapper>
				<Typography className='mb-14 text-lg font-extrabold'>
					{data.title}
				</Typography>
				<GridList className='!grid-cols-2'>
					{data.items.map(item => (
						<CardTrash
							key={item.id}
							id={item.id}
						>
							<ControlField
								name='control'
								id={item.id}
								variant='big'
							/>
							<Typography tag='span'>{item.name}</Typography>
						</CardTrash>
					))}
				</GridList>
				<div className='mt-auto flex items-center'>
					<Typography
						tag='span'
						className='mr-[14px] text-[14px] font-normal'
					>
						Вопрос {data.step.current} из {data.step.all}
					</Typography>
					<StepList data={data.stepItems} />
					<Button href={data.link}>Далее</Button>
				</div>
			</ContentWrapper>
			<Sale price={1000} />
		</>
	)
}

export default Step4

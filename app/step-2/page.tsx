import { Metadata } from 'next'

import {
	Button,
	CardDimension,
	ContentWrapper,
	GridList,
	Sale,
	StepList,
	Typography
} from '@/components'

import { data } from '@/mock/step-2/step-2.data'

export const metadata: Metadata = {
	title: 'Quiz app | step 2'
}

const Step2 = () => {
	return (
		<>
			<ContentWrapper>
				<Typography className='mb-14 text-lg font-extrabold'>
					{data.title}
				</Typography>
				<GridList>
					{data.items.map(item => (
						<CardDimension
							key={item.id}
							title={item.name}
						/>
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
					<Button>Далее</Button>
				</div>
			</ContentWrapper>
			<Sale price={1000} />
		</>
	)
}

export default Step2

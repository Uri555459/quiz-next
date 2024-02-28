import { Metadata } from 'next'

import { Button, Sale, StepBadge, StepList, Typography } from '@/components'

import { data } from '@/mock/step-2/step-2.data'

export const metadata: Metadata = {
	title: 'Quiz app | step 2'
}

const Step2 = () => {
	return (
		<>
			<div>
				<Typography className='mb-5 text-lg font-extrabold'>
					{data.title}
				</Typography>
				<div className='grid grid-cols-3 gap-5'></div>
				<div className='mt-5 flex items-center'>
					<Typography
						tag='span'
						className='mr-[14px] text-[14px] font-normal'
					>
						Вопрос {data.step.current} из {data.step.all}
					</Typography>
					<StepList data={data.stepItems} />
					<Button>Далее</Button>
				</div>
			</div>
			<Sale price={1000} />
		</>
	)
}

export default Step2

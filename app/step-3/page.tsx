import {
	Button,
	CardDimension,
	ContentWrapper,
	GridList,
	Sale,
	StepList,
	TextField,
	Typography
} from '@/components'

import { data } from '@/mock/step-3/step-3.data'

const Step3 = () => {
	return (
		<>
			<ContentWrapper>
				<Typography className='mb-14 text-lg font-extrabold'>
					{data.title}
				</Typography>
				<div className='flex h-full max-h-[220px] flex-col items-center justify-center rounded-[10px] bg-white'>
					<Typography
						className='mb-[10px]'
						tag='p'
					>
						{data.items[0].name}
					</Typography>
					<TextField
						className='mx-auto max-w-60'
						placeholder='35'
					/>
				</div>
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
			<Sale price={2500} />
		</>
	)
}

export default Step3

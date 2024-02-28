import { Button, CardMaterial, Sale, StepList, Typography } from '@/components'

import { data } from '@/mock/step-1/step-1.data'

export const Step1 = () => {
	return (
		<>
			<div className='mr-[60px] w-full'>
				<Typography className='mb-5 text-lg font-extrabold'>
					{data.title}
				</Typography>
				<div className='grid grid-cols-3 gap-5'>
					{data.items.map(item => (
						<CardMaterial
							key={item.id}
							id={item.id}
							src={item.src}
							name='step-1'
							title={item.name}
						/>
					))}
				</div>
				<div className='mt-5 flex w-full items-center'>
					<Typography
						tag='span'
						className='mr-[14px] text-[14px] font-normal'
					>
						Вопрос {data.step.current} из {data.step.all}
					</Typography>
					<StepList data={data.stepItems} />
					<Button href='/step-2'>Далее</Button>
				</div>
			</div>
			<Sale price={500} />
		</>
	)
}

export default Step1

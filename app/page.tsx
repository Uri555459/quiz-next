import { Button, CardMaterial, Sale, StepBadge, Typography } from '@/components'

import { data } from '@/mock/step-1/step-1.data'

export const Home = () => {
	return (
		<>
			<div>
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
						/>
					))}
				</div>
				<div className='mt-5 flex items-center'>
					<Typography
						tag='span'
						className='mr-[14px] text-[14px] font-normal'
					>
						Вопрос {data.step.current} из {data.step.all}
					</Typography>
					{data.stepItems.map((item, index) => (
						<StepBadge
							key={item.id}
							isArrow={index + 1 !== data.stepItems.length}
							isActive={item.isActive}
						/>
					))}
					<Button>Далее</Button>
				</div>
			</div>
			<Sale price={500} />
		</>
	)
}

export default Home

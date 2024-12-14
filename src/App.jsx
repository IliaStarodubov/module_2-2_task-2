import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	const firstFlag = activeIndex === 0;
	const lastFlag = activeIndex === steps.length - 1;

	const onButtonClickBack = () => {
		setActiveIndex(activeIndex - 1);
	};

	const onButtonClickNext = () => {
		setActiveIndex(activeIndex + 1);
	};

	const onButtonClickStartOver = () => {
		setActiveIndex(0);
	};

	const onButtonClickStep = (index) => {
		setActiveIndex(index);
	};

	// Можно задать 2 состояния — steps и activeIndex

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{/* Для получения активного контента использйте steps и activeIndex */}
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map(({ id, title }, index) => (
							<li
								key={id}
								className={`${styles['steps-item']} ${activeIndex === index ? styles.active : ''} ${index <= activeIndex ? styles.done : ''}`}
							>
								<button
									onClick={() => {
										onButtonClickStep(index);
									}}
									className={styles['steps-item-button']}
								>
									{index + 1}
								</button>
								{title}
							</li>
						))}
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
						{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
						{/* При клике на кнопку установка выбранного шага в качестве активного */}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							onClick={onButtonClickBack}
							className={styles.button}
							disabled={firstFlag}
						>
							Назад
						</button>
						{!lastFlag ? (
							<button onClick={onButtonClickNext} className={styles.button}>
								Далее
							</button>
						) : (
							<button
								onClick={onButtonClickStartOver}
								className={styles.button}
							>
								Начать сначала
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

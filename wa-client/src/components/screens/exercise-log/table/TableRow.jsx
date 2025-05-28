import cn from 'clsx'
import styles from '../ExerciseLog.module.scss'

const TableRow = ({ item, getState, onChangeState, toggleTime }) => {
	const id = +item.id // 💡 гарантируем число
	const isCompleted = getState(id, 'isCompleted')

	return (
		<div
			className={cn(styles.row, {
				[styles.completed]: isCompleted
			})}
			key={`time ${id}`}
		>
			<div className={styles.opacity} key={`Prev ${id}/${item.prevWeight}`}>
				<input type='number' defaultValue={item.prevWeight} disabled />
				<i>kg{isCompleted ? '' : ' '}/</i>
				<input type='number' defaultValue={item.prevRepeat} disabled />
			</div>

			<div key={`RepeatWeight ${id}`}>
				<input
					type='number'
					pattern='[0-9]*'
					value={getState(id, 'weight')}
					onChange={e => onChangeState(item.id, 'weight', e.target.value)}
					disabled={getState(item.id, 'isCompleted')}
				/>
				<i>kg{isCompleted ? '' : ' '}/</i>
				<input
					type='number'
					value={getState(id, 'repeat')}
					onChange={e => onChangeState(id, 'repeat', e.target.value)}
					disabled={getState(item.id, 'isCompleted')}
				/>
			</div>

			<div key={`Completed ${id}/${isCompleted}`}>
				<img
					src={
						isCompleted
							? '/images/exercises/check-completed.svg'
							: '/images/exercises/check.svg'
					}
					className={styles.checkbox}
					alt=''
					onClick={() => toggleTime(id, !isCompleted)}
				/>
			</div>
		</div>
	)
}

export default TableRow

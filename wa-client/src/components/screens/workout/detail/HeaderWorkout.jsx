import cn from 'clsx'
import styles from './Workout.module.scss'
import stylesLayout from '../../../layout/Layout.module.scss'
import Header from "../../../layout/header/Header"

const HeaderWorkout = ({workoutLog, isSuccess}) => {

    return (
        <div
        className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
        style={{
            backgroundImage: `url('/public/images/workout-bg.jpg')`,
            height: 460
        }}
    >
        <Header backLink="/workouts"/>

        {isSuccess && (
            <div>
                <time className={styles.time}>{workoutLog.minute + ' min.'}</time>
                <h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
            </div>
        )} 
</div>
    )
}

export default HeaderWorkout
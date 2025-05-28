import { useMutation, useQuery } from "@tanstack/react-query"
import {  useNavigate, useParams } from "react-router-dom"
import WorkoutLogService from "../../../../services/workout/workout.log.service"
import HeaderWorkout from "./HeaderWorkout"
import Loader from "../../../ui/Loader"
import styles from './Workout.module.scss'
import { Fragment } from "react"
import ExerciseItem from "./ExerciseItem"
import Button from "../../../ui/button/Button"


const Workout = () => {

    const {id} = useParams()

    const {data: workoutLog, isSuccess, isLoading} = useQuery({
        queryKey: ['get workout log', id],
        queryFn: () => WorkoutLogService.getById(id),
        select: ({data}) => data
    })

    const navigate = useNavigate()

    const {mutate} = useMutation({
        mutationKey: 'complete workout',
        mutationFn: () =>  WorkoutLogService.complete(id), 
             onSuccess() {
                navigate('/workouts')
             }  
    })

    return (
        <>
       <HeaderWorkout isSuccess={isSuccess} workoutLog={workoutLog} />
        <div
        className="wrapper-inner-page"
        style={{paddingLeft: 0, paddingRight: 0}} 
        >
        {isLoading ? (
            <Loader />
        ) : (
            <div className={styles.wrapper}>
            {workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
                <Fragment key={exerciseLog.id}>
                    <ExerciseItem exerciseLog={exerciseLog} />
                    {index % 2 !== 0 &&
                    index !== workoutLog.exerciseLogs.length - 1 && (
                    <div className={styles.line} />
                 )}
                </Fragment>
            ))}
        </div>
    )}
    <Button clickHandler={() => mutate()}>Complete workout</Button>
        </div>
        </>
    )
}

export default Workout
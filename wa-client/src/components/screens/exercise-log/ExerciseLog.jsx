
import HeaderExerciseLog from "./HeaderExerciseLog"
import Alert from "../../ui/alert/Alert"
import Loader from "../../ui/Loader"
import styles from './ExerciseLog.module.scss'
import { useExerciseLog } from "./hooks/useExerciseLog"
import ExerciseError from "./ExerciseError"
import TableHeader from "./table/TableHeader"
import TableRow from "./table/TableRow"



const ExerciseLog = () => {

    
    const {exerciseLog, isLoading, isSuccess, error, getState, toggleTime, onChangeState} = useExerciseLog()
   
    
    

    return (
        <>
         <HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
         <div
         className="wrapper-inner-page"
         style={{paddingLeft: 0, paddingRight: 0}}
         >
            <ExerciseError errors={[error]}/>
            {isLoading  ? (
                <Loader />
            ) : (
                <div className={styles.wrapper}>
                    <TableHeader />
                    {exerciseLog?.times.map(item => (
                        <TableRow 
                        getState={getState}
                        onChangeState={onChangeState}
                        toggleTime={toggleTime}
                        item={item} 
                        key={item.id}/>
                    ))}
                </div>
            )}

            {isSuccess && exerciseLog?.times?.length === 0 && (
                <Alert type="warning" text='Times not found' />
            )}

         </div>
        </>
    )
}

export default ExerciseLog
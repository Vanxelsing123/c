import { useQuery } from "@tanstack/react-query"
import ExerciseService from "../../../services/exercise/exercise.service"


export const useListExercises = () => {
    return useQuery({
        queryKey: ['listExercises'],  
        queryFn: () => ExerciseService.getAll(), 
        select: ({data}) => data
    })
}
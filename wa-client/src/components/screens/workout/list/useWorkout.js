import { useMutation, useQuery } from "@tanstack/react-query"
import WorkoutService from "../../../../services/workout/workout.service"
import WorkoutLogService from "../../../../services/workout/workout.log.service"
import { useNavigate } from "react-router-dom"

export const useWorkouts = () => {
    const { data, isSuccess} = useQuery({
        queryKey: ['get workouts'],
        queryFn: () => WorkoutService.getAll(),
        
        select: ({data}) => data || []
    })

    const navigate = useNavigate()

    const {
        mutate: mutate,
        isLoading,
        isSuccess: isSuccessMutate,
        error,
    } = useMutation({
        mutationFn: (workoutId) => WorkoutLogService.create(workoutId),
        onSuccess({data}) {
                navigate(`/workout/${data.id}`)
            }
        
    }
        
    )

    return {
            data: data || [],
        isSuccess,
        mutate,
        isLoading,
        isSuccessMutate,
        error
    }
    

}
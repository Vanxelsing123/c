import { useMemo } from "react";
import WorkoutService from "../../../services/workout/workout.service";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

export const useNewWorkout = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control
    } = useForm({
        mode: 'onChange'
    })

    
    const { isSuccess, error, isLoading, mutate } = useMutation({
        mutationFn: (body) => WorkoutService.create(body),
        onSuccess: () => {
            reset({
                name: '',
                exerciseIds: []
            });
        },
    });
    
    const onSubmit = data => {
        mutate({
            name: data.name,
            exerciseIds: data.exerciseIds.map(ex => ex.value)
        })
    }

    return useMemo(() => ({
        register,
        handleSubmit,
        isSuccess, 
        error, 
        isLoading,
        control,
        onSubmit,
        errors,
    }), [isSuccess, error, isLoading, errors,])
}


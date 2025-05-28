import { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { useAuth } from "../../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import authService from "../../../services/auth.service"

export const useAuthPage = () => {
    const [type, setType] = useState('login')

    const {register, 
        handleSubmit, 
        formState: { errors },
        reset
    } = useForm({
        mode: 'onChange'
    })

    const {isAuth, setIsAuth} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(isAuth) {
            navigate('/')
        }
    }, [isAuth])

    const {mutate, isLoading} = useMutation({
        queryKey: ['auth'],
        mutationFn: ({email, password}) => authService.main( email, password, 
            type), 
        
        onSuccess: () => {
            setIsAuth(true)
            reset()
        }
    }
)



    const onSubmit = data => {
        console.log("📝 Данные перед отправкой:", data); // Лог перед отправкой
        mutate(data)
    }

    return useMemo(() => ({
        setType,
        register,
        handleSubmit,
        errors,
        isLoading,
        onSubmit
    }), [errors, isLoading]) 
}



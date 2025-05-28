
import Layout from "../../layout/Layout"
import Button from "../../ui/button/Button"
import Field from "../../ui/field/Field"
import Loader from "../../ui/Loader"
import styles from './Auth.module.scss'
import { useAuthPage } from "./useAuthPage"


const Auth = () => {
    
   const {errors, handleSubmit, isLoading, register, setType, onSubmit} = useAuthPage()

    return (
        <>
        <Layout heading='Sign in' bgImage='../../../../public/images/auth-bg.png'> </Layout>
           <div className='wrapper-inner-page'>
            {isLoading && <Loader />}
           <form onSubmit={handleSubmit(onSubmit)}>
           <Field type="text"
           error={errors?.email?.message}
           name='email'
           register={register}
           options={{ required: 'Email is required'}} 
           placeholder="Enter email"
           />
           <Field type="password"
           error={errors?.password?.message}
           name='password'
           register={register}
           options={{ required: 'password is required'}} 
           placeholder="Enter password"
           />
           <div className={styles.wrapperButtons}>
           <Button clickHandler={() => setType('login')}>Войти</Button>
           <Button clickHandler={() => setType('register')}>Регистрация</Button>
           </div>
           </form>
           </div>
        </>
        
    )
   
}

export default Auth
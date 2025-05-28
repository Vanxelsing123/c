
import styles from './Header.module.scss';
import Hamburger from '../hamburger/Hamburger';
import { IoMdArrowBack } from 'react-icons/io';
import {SlUser} from 'react-icons/sl';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

const Header = ({backLink = '/'}) => {
 
    const {pathname} = useLocation()
    const navigate = useNavigate()

    const {isAuth} = useAuth()

/* Поменять вход на со стрелкой для авторизации    */ 

    return (
        <header className={styles.header}>
        {isAuth && (
        <>    
        {pathname === '/' && isAuth ? (
        <button aria-label='go to profile' onClick={() => {navigate('/profile') }}>
        < SlUser fill='#fff' fontSize={29}/>
        </button>
        ) : <button aria-label='go to back' onClick={() => {navigate(isAuth ? backLink : '/auth')}}>
        <IoMdArrowBack fill='#fff' fontSize={29}/>
        </button> }
        <Hamburger /> 
        </> 
        )}
        </header>
    )
      
        
}

export default Header
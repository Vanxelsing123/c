import Layout from '../../layout/Layout'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/button/Button'
import styles from './Home.module.scss'
import Statistics from '../profile/statistics/Statistics'


function Home() {
	
	const navigate = useNavigate()

	return (
		<Layout bgImage='../../../../public/images/home-bg.jpg'>
			<Button clickHandler={() => navigate('/new-workout/')}>
			Новая тренировкка
			</Button>
			<h1 className={styles.heading}>МИР АКТИВНОГО ОБРАЗА ЖИЗНИ</h1>
			<Statistics />
		</Layout>
	)
}

export default Home

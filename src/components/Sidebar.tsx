import styles from './Sidebar.module.css';
import logo from '../assets/logo.jpg';


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img src={logo} alt="Rial Hotel" />
        </aside>
    )
}
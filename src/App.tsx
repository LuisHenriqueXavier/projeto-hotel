import { Header } from "./components/header";
import { Sidebar } from "./components/Sidebar";
import './global.css';
import styles from './App.module.css';


export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <main>
          conteúdo
        </main>

      </div>
    </>
  )
}
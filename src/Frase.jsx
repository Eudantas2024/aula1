import styles from './Frase.module.css';
export function Frase(){
    return(
        <>
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este componente é apenas uma frase!</p>
        
        </div>
        
        </>
    )
}


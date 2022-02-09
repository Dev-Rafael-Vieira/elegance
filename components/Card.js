import styles from '../styles/Card.module.css'
import { useState } from 'react'; 


export default function Card(props) {

  
  return (

          <div className={styles.container}>
          {props.ofs.map((ofs) => (
            
            <div className={styles.cardcontainer} key={ofs.of}>

              <div className={
                ofs.prioridade_num == 4 ? styles.cardprioridadetotal 
                : ofs.prioridade_num == 3 ? styles.cardurgente 
                : styles.card
              }>

                <h2 className={styles.referencia}>Referência <span className={styles.ref}>#{ofs.referencia}</span></h2>
                  <img src={ofs.img} className={styles.imagem}/>
                  <p><b>O.F. </b>#{ofs.of}</p>
                  <p><b>{ofs.impressora}</b></p>
                  <div className={
                    ofs.prioridade_num == 1 ? styles.prioridade1 
                    : ofs.prioridade_num == 2 ? styles.prioridade2
                    : ofs.prioridade_num == 3 ? styles.prioridade3
                    : styles.prioridade4
                  }>
                    <span className={styles.descricao}>{
                      ofs.prioridade_num == 1 ? "Baixa Prioridade" 
                    : ofs.prioridade_num == 2 ? "Prioridade Normal"
                    : ofs.prioridade_num == 3 ? "Prioridade Urgente"
                    : "PRIORIDADE *TOTAL*"
                    }</span>
                  </div>
                  <p>{ofs.status}...</p>
                  <a href="#abrirModal" value={ofs.of} className={styles.acessar} >Acessar</a>
              </div>
            </div>
            ))}
          </div>
  )
}
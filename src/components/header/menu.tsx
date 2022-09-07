import React from "react"
import styles from './Menu.module.scss';
import logo from '../../images/logo.svg'

export const Menu = () => {
  return(
    <header className={styles.header}>
      <div>
        <img src={logo} alt=''></img>
      </div>
      <nav className={styles.header__nav}>
        <li>Como Fazer</li>
        /
        <li>Ofertas</li>
        /
        <li>Depoimentos</li>
        /
        <li>Videos</li>
        /
        <li>Meu carrinho</li>
      </nav>
    </header>
  )
}
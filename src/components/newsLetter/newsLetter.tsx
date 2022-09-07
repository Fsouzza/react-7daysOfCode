import styles from './NewsLetter.module.scss';
import { HiOutlineMail } from 'react-icons/hi';
import hero from '../../images/hero-image.png'
import React, { useState } from 'react';
import { validateEmail } from '../../utils/regex'

export const NewsLetter = () =>{
  const [emailErro, setEmailErro] = useState(false);
  const [emailCorreto, setEmailCorreto] = useState(false);
  const [email, setEmail] = useState('');

  function validate(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    if(!validateEmail.test(email)) {
      setEmailErro(true);
      setEmailCorreto(false);
    } else{
      setEmailErro(false);
      setEmailCorreto(true);
    }
  }

  return(
    <section className={styles.newsLetter}>
      <div className={styles.nlEsquerda}>
        <div>
          <span className={styles.nlEsquerda__subtitulo}>Sua casa com as</span>
          <h2 className={styles.nlEsquerda__titulo}>melhores plantas</h2>
          <p className={styles.nlEsquerda__texto}>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
        </div>
        <form className={styles.form}>
          <div className={styles.form__email}>
            <HiOutlineMail size={30} />
            <input type='email' value={email} onChange={(e) =>{setEmail(e.target.value)}} placeholder='Insira seu e-mail' required />
          </div>
          <button onClick={validate} className={styles.form__botao}>
            Assinar newsletter
          </button>
        </form>
        {emailErro && (
          <span className={styles.erroRegex}>
            Digite um e-mail válido
          </span>
        )}
        {emailCorreto && (
          <span className={styles.corretoRegex}>
            {`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`}
          </span>
        )}
      </div>
      <img src={hero} alt='Imagem de uma planta' className={styles.nlDireita} />
    </section>
  )
}
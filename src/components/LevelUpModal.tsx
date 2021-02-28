import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LevelUp.module.css'

export function LevelUpModal () {
  const { level, closeLevelUpModel } = useContext(ChallengesContext)

  const Url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${"Mais um nível alcançado com sucesso!🎉🏆"}`

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModel}>
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button>
      </div>
      <a href={Url} id="twitter-share-btt" rel="nofollow" target="_blank" className={styles.twitterShareButtonLink}>
        <button className={styles.shareOnTwitter}>
          Compartilhe no twitter 
          <img src="/icons/twitter.svg" alt="Twitter icon"/>
        </button>
      </a>
    </div>
  )
}
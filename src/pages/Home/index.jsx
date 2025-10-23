import { Link } from 'react-router-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import s from './Home.module.css'

export default function Home() {
  // Carrousel
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)
  const rootRef = useRef(null)

  // Images (dossier: public/images/home)
  const slides = [
    { 
      image: '/images/home/1.png',         
      title: 'Excellence en Français Professionnel', 
      subtitle: 'Préparez-vous aux examens ministériels avec nos formations sur mesure' 
    },
    { 
      image: '/images/home/5.png',         
      title: 'Coaching Personnalisé', 
      subtitle: 'Accompagnement individualisé pour votre progression en français' 
    },
    { 
      image: '/images/home/6.png',         
      title: 'Simulations d\'Examens', 
      subtitle: 'Entraînez-vous dans les conditions réelles des épreuves ministérielles' 
    },
    { 
      image: '/images/home/vignette6.jpg', 
      title: 'Méthodes Éprouvées', 
      subtitle: 'Des techniques d\'apprentissage efficaces pour votre réussite' 
    },
  ]

  const hasReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
  }, [])

  const go = (i) => setIdx((i + slides.length) % slides.length)
  const next = () => go(idx + 1)
  const prev = () => go(idx - 1)

  useEffect(() => {
    if (hasReducedMotion || paused || slides.length <= 1) return
    let inView = true
    const start = () => { if (!timerRef.current && inView) timerRef.current = setInterval(next, 5000) }
    const stop  = () => { if (timerRef.current){ clearInterval(timerRef.current); timerRef.current = null } }
    const restart = () => { stop(); start() }

    const onVis = () => { inView = !document.hidden; restart() }
    document.addEventListener('visibilitychange', onVis)

    const el = rootRef.current
    const io = new IntersectionObserver(
      (entries) => { inView = entries[0]?.isIntersecting ?? true; restart() },
      { threshold: 0.2 }
    )
    if (el) io.observe(el)

    start()
    return () => { stop(); document.removeEventListener('visibilitychange', onVis); io.disconnect() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, hasReducedMotion, idx, slides.length])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'ArrowRight') next(); if (e.key === 'ArrowLeft') prev() }
    rootRef.current?.addEventListener('keydown', onKey)
    return () => rootRef.current?.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx])

  return (
    <>
      {/* HERO / CARROUSEL */}
      <section
        className={`fullbleed ${s.heroCarousel}`}
        ref={rootRef}
        tabIndex={0}
        aria-roledescription="carousel"
        aria-label="Galerie d'accueil"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={s.carouselContainer}>
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`${s.heroSlide} ${i === idx ? s.active : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} sur ${slides.length}`}
            >
              <div 
                className={s.slideImage}
                style={{ backgroundImage: `url(${slide.image})` }}
                aria-hidden="true"
              />
              <div className={s.slideOverlay} aria-hidden="true" />
              <div className={s.slideContent}>
                <div className={s.contentWrapper}>
                  {slide.title && <h1 className={s.slideTitle}>{slide.title}</h1>}
                  {slide.subtitle && <p className={s.slideSubtitle}>{slide.subtitle}</p>}
                  <div className={s.ctaButtons}>
                    <Link to="/formations" className={s.primaryBtn}>
                      <span>Commencer</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                    <Link to="/methodes" className={s.secondaryBtn}>En savoir plus</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {slides.length > 1 && (
          <>
            <button className={`${s.carouselCtrl} ${s.prev}`} onClick={prev} aria-label="Diapositive précédente">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={`${s.carouselCtrl} ${s.next}`} onClick={next} aria-label="Diapositive suivante">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </>
        )}

        <div className={s.carouselDots} role="tablist" aria-label="Choisir une diapositive">
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === idx}
              aria-label={`Aller à la diapositive ${i + 1}`}
              className={`${s.dot} ${i === idx ? s.dotActive : ''}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <main className={s.mainContent}>
        {/* SECTION INTRODUCTION */}
        <section className={s.introSection}>
          <div className="container">
            <div className={s.introContent}>
              <div className={s.introText}>
                <h2>Votre Réussite aux Examens Ministériels</h2>
                <p className={s.introDescription}>
                  Spécialistes de la formation en français pour les fonctionnaires, nous vous préparons 
                  efficacement aux examens ministériels pour accéder aux postes supérieurs de l'administration.
                  Notre expertise de plus de 15 ans et notre approche pédagogique éprouvée font de nous 
                  le partenaire de choix pour votre progression professionnelle.
                </p>
                <div className={s.introFeatures}>
                  <div className={s.feature}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Formations adaptées aux exigences ministérielles</span>
                  </div>
                  <div className={s.feature}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Accompagnement personnalisé tout au long du parcours</span>
                  </div>
                  <div className={s.feature}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Méthodes pédagogiques innovantes et efficaces</span>
                  </div>
                </div>
              </div>
              <div className={s.introVisual}>
                <div className={s.visualCard}>
                  <div className={s.cardIcon}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z M2 17L12 22L22 17 M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <h3>Excellence Académique</h3>
                  <p>Notre expertise pédagogique assure une préparation optimale aux examens ministériels les plus exigeants</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION SERVICES */}
        <section className={s.servicesSection}>
          <div className="container">
            <div className={s.sectionHeader}>
              <h2>Notre Approche Pédagogique</h2>
              <p>Une méthodologie complète et éprouvée pour maximiser vos chances de réussite</p>
            </div>
            
            <div className={s.servicesGrid}>
              <div className={s.serviceCard}>
                <div className={s.serviceIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18C5 17.18 8 16 8 17C8 18 5 17.18 5 17.18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Formations Structurées</h3>
                <p>Programmes progressifs spécialement conçus pour répondre aux exigences spécifiques des examens ministériels, avec un suivi régulier de votre progression.</p>
                <ul className={s.serviceFeatures}>
                  <li>Programmes sur mesure adaptés à votre niveau</li>
                  <li>Progression pédagogique graduelle et structurée</li>
                  <li>Supports de cours complets et actualisés</li>
                  <li>Évaluations régulières pour mesurer vos progrès</li>
                </ul>
                <Link to="/formations" className={s.serviceLink}>
                  <span>Découvrir nos formations</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              
              <div className={s.serviceCard}>
                <div className={s.serviceIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M16 14H13.5V17.5H10.5V14H8L12 10L16 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Coaching Individualisé</h3>
                <p>Sessions personnalisées avec analyse détaillée de vos points forts et axes d'amélioration, accompagnées de stratégies concrètes pour optimiser vos résultats.</p>
                <ul className={s.serviceFeatures}>
                  <li>Analyse personnalisée de votre profil</li>
                  <li>Retours constructifs et détaillés</li>
                  <li>Stratégies d'apprentissage sur mesure</li>
                  <li>Accompagnement continu jusqu'à l'examen</li>
                </ul>
                <Link to="/coaching" className={s.serviceLink}>
                  <span>S'inscrire au coaching</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              
              <div className={s.serviceCard}>
                <div className={s.serviceIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22S11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2S12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5M12 4.15L5 8.09V15.91L12 19.85L19 15.91V8.09L12 4.15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Simulations d'Examen</h3>
                <p>Mettez-vous en conditions réelles d'examen avec nos simulations complètes qui reproduisent fidèlement le format, la durée et la difficulté des épreuves officielles.</p>
                <ul className={s.serviceFeatures}>
                  <li>Conditions identiques aux épreuves réelles</li>
                  <li>Tests pratiques chronométrés</li>
                  <li>Corrections détaillées et commentées</li>
                  <li>Conseils pour la gestion du temps et du stress</li>
                </ul>
                <Link to="/simulations" className={s.serviceLink}>
                  <span>S'entraîner maintenant</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION VALEURS */}
        <section className={s.valuesSection}>
          <div className="container">
            <div className={s.sectionHeader}>
              <h2>Notre Engagement</h2>
              <p>Ce qui fait la différence dans votre préparation aux examens</p>
            </div>
            <div className={s.valuesGrid}>
              <div className={s.valueItem}>
                <div className={s.valueIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Expertise Confirmée</h3>
                <p>Plus de 15 ans d'expérience dans la préparation aux examens ministériels avec une connaissance approfondie des attentes des jurys.</p>
              </div>
              <div className={s.valueItem}>
                <div className={s.valueIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.4 15C19.2669 15.304 19.1338 15.608 19.0006 15.9121C18.7016 16.5306 18.352 17.1198 17.956 17.673C17.266 18.622 16.379 19.509 15.43 20.199C14.8768 20.595 14.2876 20.9446 13.6691 21.2436C13.365 21.3768 13.061 21.5099 12.757 21.643" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.60078 15C4.73391 15.304 4.86703 15.608 5.00016 15.9121C5.29916 16.5306 5.64875 17.1198 6.04475 17.673C6.73475 18.622 7.62178 19.509 8.57078 20.199C9.12397 20.595 9.71316 20.9446 10.3317 21.2436C10.6358 21.3768 10.9398 21.5099 11.2439 21.643" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.3633 5.63672L19.0704 4.92961" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.3633 18.3633L19.0704 19.0704" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 21V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.63672 18.3633L4.92961 19.0704" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.63672 5.63672L4.92961 4.92961" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Approche Holistique</h3>
                <p>Nous préparons nos candidats non seulement sur le plan académique mais aussi sur la gestion du stress et la confiance en soi.</p>
              </div>
              <div className={s.valueItem}>
                <div className={s.valueIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Accompagnement Personnalisé</h3>
                <p>Chaque candidat bénéficie d'un suivi individualisé adapté à son profil, ses objectifs et son rythme d'apprentissage.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
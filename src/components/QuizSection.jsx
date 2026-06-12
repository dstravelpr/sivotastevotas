import { useState } from 'react'

const QUESTIONS = [
  {
    q: '¿Cuántos electores registrados NO votaron en las elecciones de 2024?',
    options: ['Como el 10%', 'Como el 25%', 'Como el 42%', 'Menos del 5%'],
    correct: 2,
    explain: 'El 42% — casi 1 de cada 2 boricuas registrados no fue a votar. Esos votos ausentes deciden quién gobierna.',
  },
  {
    q: '¿Quién nombra a la directiva de la AAA, la agencia responsable del agua potable?',
    options: ['El alcalde de cada pueblo', 'El gobernador/a que tú eliges', 'El gobierno federal', 'Nadie — es privada'],
    correct: 1,
    explain: 'El gobernador/a nombra la Junta de Gobierno de la AAA. La crisis del agua que vivimos hoy es consecuencia directa de décadas de decisiones políticas.',
  },
  {
    q: '¿Por cuántos votos se han decidido alcaldías en Puerto Rico?',
    options: ['Miles de votos siempre', 'Menos de 300 votos', 'Nunca ha estado cerca', 'Por sorteo'],
    correct: 1,
    explain: 'Ha pasado: alcaldías decididas por menos de 300 votos. Y en 2024, la gobernadora fue electa con solo el 39% de los votos — la minoría que votó decidió por todos. En una elección local, TU voto literalmente puede decidir el resultado.',
  },
  {
    q: '¿Cuántos votos tiene Puerto Rico en el pleno del Congreso federal?',
    options: ['2 senadores y 5 representantes', '1 voto', '0 votos', '4 votos'],
    correct: 2,
    explain: 'Cero. El Comisionado Residente habla en la Cámara pero NO vota en el pleno. Por eso cada voto local cuenta el doble — es el único poder directo que tienes.',
  },
  {
    q: '¿Cuánto dinero administra el gobernador/a que eliges con tu voto?',
    options: ['$500 millones', '$1 billón', '$13 billones al año', 'Solo fondos federales'],
    correct: 2,
    explain: 'El presupuesto de Puerto Rico ronda los $13 billones anuales. Salud, escuelas, agua, luz, carreteras — tu voto decide quién lo controla.',
  },
]

const RESULTS = [
  {
    min: 0,
    title: 'Tu voto te necesita 📚',
    msg: 'No conocías el poder que tienes — y eso es exactamente lo que les conviene a los que no quieren que votes. Ahora ya lo sabes.',
  },
  {
    min: 3,
    title: '¡Vas bien encaminado/a! 💪',
    msg: 'Sabes más que la mayoría. Ahora convierte ese conocimiento en acción: regístrate y lleva a dos más contigo.',
  },
  {
    min: 5,
    title: '¡Eres poder puro! 🔥',
    msg: 'Dominas el juego. Tu próxima misión: comparte este quiz y reta a tus panas a ver cuánto saben.',
  },
]

export default function QuizSection() {
  const [step, setStep] = useState(-1) // -1 = intro, 0..4 = preguntas, 5 = resultado
  const [score, setScore] = useState(0)
  const [picked, setPicked] = useState(null)

  const current = step >= 0 && step < QUESTIONS.length ? QUESTIONS[step] : null
  const result = [...RESULTS].reverse().find((r) => score >= r.min)

  const pick = (i) => {
    if (picked !== null) return
    setPicked(i)
    if (i === current.correct) setScore((s) => s + 1)
  }

  const next = () => {
    setPicked(null)
    setStep((s) => s + 1)
  }

  const restart = () => {
    setScore(0)
    setPicked(null)
    setStep(0)
  }

  const shareText = encodeURIComponent(
    `Saqué ${score}/5 en el quiz "¿Cuánto poder tiene tu voto?" 🇵🇷 ¿Cuánto sabes tú? 👉 https://sivotastevotas.com#quiz`
  )

  return (
    <section className="quiz-section" id="quiz">
      <div className="container">
        <span className="section__eyebrow quiz-eyebrow">Ponte a Prueba</span>
        <h2 className="section__title quiz-title">¿Cuánto Poder Tiene Tu Voto?</h2>

        <div className="quiz-card">
          {step === -1 && (
            <div className="quiz-intro">
              <p className="quiz-intro__text">
                5 preguntas. 1 minuto. Descubre cuánto sabes del poder real
                que tienes en tus manos — los resultados te van a sorprender.
              </p>
              <button className="btn btn--red quiz-btn" onClick={() => setStep(0)}>
                Empezar el Quiz →
              </button>
            </div>
          )}

          {current && (
            <div className="quiz-question">
              <div className="quiz-progress">
                <div className="quiz-progress__bar" style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }} />
              </div>
              <span className="quiz-step">Pregunta {step + 1} de {QUESTIONS.length}</span>
              <h3 className="quiz-q">{current.q}</h3>

              <div className="quiz-options">
                {current.options.map((opt, i) => {
                  let cls = 'quiz-option'
                  if (picked !== null) {
                    if (i === current.correct) cls += ' quiz-option--correct'
                    else if (i === picked) cls += ' quiz-option--wrong'
                    else cls += ' quiz-option--dim'
                  }
                  return (
                    <button key={opt} className={cls} onClick={() => pick(i)}>
                      {opt}
                    </button>
                  )
                })}
              </div>

              {picked !== null && (
                <div className="quiz-explain">
                  <p>{current.explain}</p>
                  <button className="btn btn--red quiz-btn" onClick={next}>
                    {step === QUESTIONS.length - 1 ? 'Ver mi resultado →' : 'Siguiente →'}
                  </button>
                </div>
              )}
            </div>
          )}

          {step === QUESTIONS.length && (
            <div className="quiz-result">
              <div className="quiz-result__score">{score}/{QUESTIONS.length}</div>
              <h3 className="quiz-result__title">{result.title}</h3>
              <p className="quiz-result__msg">{result.msg}</p>
              <div className="quiz-result__actions">
                <a href="#registrate" className="btn btn--red">¡Regístrate a Votar!</a>
                <a
                  href={`https://wa.me/?text=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline-white"
                >
                  Compartir en WhatsApp
                </a>
              </div>
              <button className="quiz-restart" onClick={restart}>↻ Intentar de nuevo</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

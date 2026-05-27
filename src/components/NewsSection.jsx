import { useState, useEffect } from 'react'

const RSS_FEEDS = [
  {
    name: 'NotiCel',
    url: 'https://www.noticel.com/rss.xml',
    color: '#0057A8',
  },
  {
    name: 'END · Política',
    url: 'https://www.elnuevodia.com/arc/outboundfeeds/rss/category/noticias/politica/?outputType=xml',
    color: '#CF0A2C',
  },
  {
    name: 'END · Gobierno',
    url: 'https://www.elnuevodia.com/arc/outboundfeeds/rss/category/noticias/gobierno/?outputType=xml',
    color: '#CF0A2C',
  },
  {
    name: 'END · Legislatura',
    url: 'https://www.elnuevodia.com/arc/outboundfeeds/rss/category/noticias/legislatura/?outputType=xml',
    color: '#CF0A2C',
  },
  {
    name: 'El Vocero · Política',
    url: 'https://www.elvocero.com/search/?f=rss&t=article&c=politica&l=20&s=start_time&sd=desc',
    color: '#1B5E20',
  },
  {
    name: 'El Vocero · Gobierno',
    url: 'https://www.elvocero.com/search/?f=rss&t=article&c=gobierno&l=20&s=start_time&sd=desc',
    color: '#1B5E20',
  },
  {
    name: 'Primera Hora',
    url: 'https://www.primerahora.com/rss/',
    color: '#7B1FA2',
  },
]

const RSS2JSON = 'https://api.rss2json.com/v1/api.json?rss_url='

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 60) return `Hace ${mins} min`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `Hace ${hrs}h`
  const days = Math.floor(hrs / 24)
  return `Hace ${days} día${days > 1 ? 's' : ''}`
}

export default function NewsSection() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeSource, setActiveSource] = useState('Todos')
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetches = RSS_FEEDS.map((feed) =>
      fetch(`${RSS2JSON}${encodeURIComponent(feed.url)}`)
        .then((r) => r.json())
        .then((data) => {
          if (data.status === 'ok') {
            return data.items.map((item) => ({
              ...item,
              source: feed.name,
              sourceColor: feed.color,
            }))
          }
          return []
        })
        .catch(() => [])
    )

    Promise.all(fetches).then((results) => {
      const all = results
        .flat()
        .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
      setArticles(all)
      setLoading(false)
      if (all.length === 0) setError(true)
    })
  }, [])

  const sources = ['Todos', ...RSS_FEEDS.map((f) => f.name)]
  const filtered = activeSource === 'Todos'
    ? articles
    : articles.filter((a) => a.source === activeSource)

  return (
    <section className="section" id="noticias">
      <div className="container">
        <span className="section__eyebrow">Mantente Informado/a</span>
        <h2 className="section__title">Noticias Políticas de Puerto Rico</h2>
        <p className="section__subtitle">
          Las últimas noticias de los principales medios de Puerto Rico.
          Un electorado informado es un electorado poderoso.
        </p>

        <div className="news-controls">
          {sources.map((s) => (
            <button
              key={s}
              className={`news-filter-btn${activeSource === s ? ' active' : ''}`}
              onClick={() => setActiveSource(s)}
            >
              {s}
            </button>
          ))}
        </div>

        {loading && (
          <div className="news-loading">
            <div className="news-loading-spinner" />
            Cargando noticias…
          </div>
        )}

        {error && !loading && (
          <div className="news-loading">
            No se pudieron cargar las noticias en este momento. Visita directamente{' '}
            <a href="https://www.noticel.com" target="_blank" rel="noopener noreferrer">NotiCel</a>,{' '}
            <a href="https://www.elnuevodia.com" target="_blank" rel="noopener noreferrer">El Nuevo Día</a> o{' '}
            <a href="https://www.primerahora.com" target="_blank" rel="noopener noreferrer">Primera Hora</a>.
          </div>
        )}

        {!loading && !error && (
          <div className="news-grid">
            {filtered.map((article, i) => (
              <article className="news-card" key={article.link || i}>
                <div className="news-card__img">
                  {article.thumbnail
                    ? <img src={article.thumbnail} alt="" loading="lazy" onError={(e) => { e.target.style.display = 'none' }} />
                    : '📰'}
                </div>
                <div className="news-card__body">
                  <span className="news-card__source" style={{ color: article.sourceColor }}>
                    {article.source}
                  </span>
                  <h3 className="news-card__title">{article.title}</h3>
                  <span className="news-card__date">{timeAgo(article.pubDate)}</span>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="news-card__link"
                  >
                    Leer artículo →
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

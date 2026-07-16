import './App.css'

function App() {
  return (
    <main className="landing-page">
      <section id="center">
        <h1>OpenStream</h1>
        <p>나만의 스트리밍 플랫폼</p>
        <div className="action-buttons">
            <button
              type="button"
              className="action-button primary"
            >
              방송시작
            </button>
          <button
            type="button"
            className="action-button secondary"
          >
            방송보기
          </button>
        </div>
      </section>
    </main>
  )
}

export default App

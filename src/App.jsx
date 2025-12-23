import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Emil Abos</h1>
        <p className="subtitle">App Developer</p>
      </header>

      <main className="main">
        <section className="section">
          <h2>Projects</h2>
          <div className="projects">
            <div className="project-card">
              <h3>ViFrame</h3>
              <p>A powerful video framing application for creative content creators.</p>
            </div>
            <div className="project-card">
              <h3>GuineaPlate</h3>
              <p>An experimental platform for testing and iterating on new ideas.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Currently Working On</h2>
          <div className="current-project">
            <h3>Study Focus App</h3>
            <p>
              A productivity application that helps students stay focused by blocking 
              distracting apps on their phone. Users can only unlock scrolling access 
              by performing well in targeted quizzes related to their exam subjects. 
              Combines gamification with effective study habits to maximize learning outcomes.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>About</h2>
          <div className="about">
            <p>
              I'm a developer passionate about creating apps that solve real problems 
              and improve people's daily lives. From creative tools to productivity 
              enhancers, I focus on building intuitive and effective solutions.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Emil Abos. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

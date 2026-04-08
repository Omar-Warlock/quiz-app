import Header from "./components/Header";
import Quiz from "./components/Quiz";

function App() {
  const shuffledAnswers = [...QUESTIONS.answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <>
      <Header />
      <main>
        <Quiz shuffledAnswers={shuffledAnswers} />
      </main>
    </>
  );
}

export default App;

import QuizLogo from "/src/assets/quiz-logo.png";
function Header() {
  return (
    <header>
      <img src={QuizLogo} alt="note book logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
}

export default Header;

import React, { Component } from 'react';
import { questionsBase } from '../services/getquestionsquiz';
import '../style/quiz.css';

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nQuestion: 0,
      questions: [],
      endGame: false,
      wrongAnswers: [],
      initGame: false,
      isAnswered: false,
      seeFeedback: false,
      buttonFeedback: false,
    };
  }

  componentDidMount() {
    const newQuestions = [];
    for (let i = 0; i < 5; i += 1) {
      let randomNumber = Math.floor(Math.random() * (questionsBase.length));
      newQuestions.push(questionsBase.splice(randomNumber, 1));
    }
    this.setState({ questions: newQuestions })
  }

  validAnswer() {
    this.setState({ isAnswered: true, buttonFeedback: true });
  }

  restart() {
    document.location.reload(true);
  }

  gamestart() {
    this.setState({ initGame: true });
  }

  getAnswers(validAnswer, i) {
    const { isAnswered } = this.state;
    if (i === validAnswer - 1 && isAnswered) return "green-border-quiz";
    if (i !== validAnswer - 1 && isAnswered) return "red-border-quiz";
    return '';
  }

  nextQuestion() {
    const { nQuestion, } = this.state;
    if (nQuestion === 4) this.setState({ endGame: true })
    this.setState({ isAnswered: false, seeFeedback: false, nQuestion: nQuestion + 1 })
  }

  checkFeedback() {
    const { isAnswered } = this.state;
    if (isAnswered) this.setState({ isAnswered: false, seeFeedback: true, buttonFeedback: false })
  }

  seeFeedback() {
    const { buttonFeedback } = this.state;
    if (buttonFeedback) return (
      <button
        className="playAgain"
        onClick={() => this.checkFeedback()}
      >Ver Feedback!
    </button>
    )
  }

  nextButton() {
    const { nQuestion } = this.state;
    const buttonName = nQuestion === 4 ? 'Finalizar Quiz!': 'Próxima Questão!'
    return (
      <button
        className="playAgain"
        onClick={() => this.nextQuestion()}
      >{buttonName}
    </button>
    )
  }

  customButton() {
    const { seeFeedback } = this.state;
    return seeFeedback ? this.nextButton() : this.seeFeedback();
  }

  feedBackPage() {
    const { questions, nQuestion, } = this.state;
    return (
      <div>
        <p className='feedback-response'>{questions[nQuestion][0].options[questions[nQuestion][0].correct - 1]}</p>
        <p className='feedback-response'>{questions[nQuestion][0].explanation}</p>
      </div>
    )
  }

  optionsList() {
    const { questions, nQuestion, } = this.state;
    return (
      <ul className="choices">
        {questions[nQuestion][0].options.map((q, index) =>
          <button key={q}
            className={`choice ${this.getAnswers(questions[nQuestion][0].correct, index)}`}
            onClick={() => this.validAnswer(index, questions[nQuestion][0].correct)}
          >{q}
          </button>
        )}
      </ul>
    )
  }

  renderContent() {
    const { seeFeedback } = this.state;
    return seeFeedback ? this.feedBackPage() : this.optionsList();
  }

  render() {
    const { questions, nQuestion, endGame, wrongAnswers, initGame } = this.state;
    if (!initGame) return (
      <div className="quiz_container">
        <button className="playAgain" onClick={() => this.gamestart()}>Jogar!</button>
      </div>
    )
    if (!questions.length) return <div>Loading...</div>
    if (endGame) return (
      <div className="quiz_container">
        {wrongAnswers.map(ans => {
          return (
            <div key={ans.question}>
              <p className="gameOver">{ans.question}</p>
              <p className="gameOver">{ans.options[ans.correct - 1]}</p>
              <p className="gameOver">{ans.explanation}</p>
            </div>
          )
        })}
        <button className="playAgain" onClick={() => this.restart()}>Jogar novamente!</button>
      </div>
    )
    return (
      <div className="quiz_container">
        <h2 className="question">
          {questions[nQuestion][0].question}
        </h2>
        {this.renderContent()}
        {this.customButton()}
      </div>
    )
  }
}
export default Quiz;

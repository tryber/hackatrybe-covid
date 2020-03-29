import React, { Component } from 'react';
import Prevention from '../components/prevention'
import Quiz from '../components/quiz'
import QuizTitle from '../components/quizTitle'

class PreventionPage extends Component {

  render() {
    return (
      <div>
        <Prevention />
        <QuizTitle />
        <Quiz />
      </div>
    )
  }
}

export default PreventionPage;
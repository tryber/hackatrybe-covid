import React, { Component } from 'react';
import { Prevention, Quiz, QuizTitle } from '../components';

class PreventionPage extends Component {

  render() {
    return (
      <div>
        <QuizTitle />
        <Quiz />
        <Prevention />
      </div>
    )
  }
}

export default PreventionPage;
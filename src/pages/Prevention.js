import React, { Component } from 'react';
import { Prevention, Quiz, QuizTitle } from '../components';

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
import React, { Component } from 'react';
import Prevention from '../components/prevention'
import Quiz from '../components/quiz'

class PreventionPage extends Component {

  render() {
    return (
      <div>
        <Prevention />
        <Quiz />
      </div>
    )
  }
}

export default PreventionPage;
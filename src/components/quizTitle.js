import React, { Component } from 'react';
import '../style/prevention.css';

class QuizTitle extends Component {
  render() {
    return (
      <div className="container-fluid">
        <section className="about">
          <div className="titulo-container">
            <h2 className="title">8. Quiz!</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-sm-11 col-11 text-container">
              <p className="texto">Agora que você já sabe como se prevenir, quero ver fazer este quiz nível hard que preparamos!</p>
              <p className>Bora?</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default QuizTitle;

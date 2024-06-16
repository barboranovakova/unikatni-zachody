import './Quiz.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import QuizPin from '../../../assets/chat.png';
import UnicornChat from '../../../assets/unicorn.png';
import Bubble from '../../../assets/bubble.png';
import RandomToilet from '../../../api/toillets.json';
import 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js';

const questions = [
  {
    question: 'Jakou máte dneska náladu?',
    options: ['nic moc', 'v pohodě', 'zlobivou'],
  },
  {
    question: 'Jaká je vaše oblíbená barva?',
    options: ['bíla', 'červená', 'modrá'],
  },
  {
    question: 'Vyberte si svoji oblíbenou kuchyni:',
    options: ['italská', 'česká', 'asijská'],
  },
];

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [result, setResult] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    if (result !== null && confetti) {
      var count = 200;
      var defaults = {
        origin: { y: 0.7 },
      };

      function fire(particleRatio, opts) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        });
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    }
  }, [result]);

  const handleClick = () => {
    navigate('/');
  };
  const handleStartClick = () => {
    setShowQuiz(true);
    setResult(null);
  };

  const handleAnswerClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      const randomProduct =
        RandomToilet[Math.floor(Math.random() * RandomToilet.length)];
      setResult(randomProduct);
      setShowQuiz(false);
    }
  };

  return (
    <div className="page_content">
      <button onClick={handleClick} className="btn_back_quiz">
        zpět
      </button>
      {!showQuiz && !result ? (
        <div className="quiz_container">
          <img className="unicorn_chat" src={QuizPin} alt="Quiz Pin" />
          <button className="btn_chat" onClick={handleStartClick}>
            Začít
          </button>
        </div>
      ) : showQuiz ? (
        <div className="main_content">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="questions_button">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={handleAnswerClick}
                className="answer_button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        result && (
          <div>
            <h2>TADA!!Tohle je tvůj idealní záchod:</h2>
            <div className="result_container">
              <p>
                <strong>{result.place}</strong>
              </p>
              <img src={`../../../img/${result.img}`} alt={result.place} />
              <p>{result.description}</p>
            </div>
          </div>
        )
      )}
      <img className="unicorn_img" src={UnicornChat} alt="Unicorn Chat" />
      <img className="bubble_chat" src={Bubble} alt="Bubble" />
    </div>
  );
};

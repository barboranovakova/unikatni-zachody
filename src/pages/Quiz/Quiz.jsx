import './Quiz.css';
import QuizPin from '../../../assets/chat.png';
import UnicornChat from '../../../assets/unicorn.png';
import Bubble from '../../../assets/bubble.png';

export const Quiz = () => {
  return (
    <>
      <div className="quiz_container">
        <img className="unicorn_chat" src={QuizPin}></img>

        <img className="unicorn_img" src={UnicornChat}></img>

        {/* <img className="bubble_chat" src={Bubble}></img> */}
      </div>
    </>
  );
};

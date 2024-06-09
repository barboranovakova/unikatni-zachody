import './Quiz.css';
import QuizPin from '../../../assets/chat.png';
import UnicornChat from '../../../assets/unicorn.png';

export const Quiz = () => {
  return (
    <div className="page_content">
      <div className="quiz_container">
        <img className="unicorn_chat" src={QuizPin}></img>
        <button className="btn_chat">Začit</button>
      </div>
      <div className="main_content">
        <img className="unicorn_img" src={UnicornChat}></img>
      </div>

      {/* <img className="bubble_chat" src={Bubble}></img> */}
    </div>
  );
};

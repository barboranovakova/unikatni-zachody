import './style.css';
import { Banner } from '../../components/Banner/Banner';
import { Top } from '../../components/Top/Top';
import { FunFacts } from '../../components/FunFacts/FunFacts';
import { Quiz } from '../../components/Quiz/Quiz';

export const HomePage = () => {
  return (
    <div className="container">
      <Banner />
      <Top />
      <FunFacts />
      <Quiz />
    </div>
  );
};

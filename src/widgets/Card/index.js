import { Card } from "antd";
import { CardStyled } from "./index.styles";
import { useNavigate } from 'react-router-dom';

const CardWidget = ({ card }) => {
  const navigate = useNavigate();
  return (
    <CardStyled>
      <Card className="card" onClick={() => navigate(card.alpha2Code)}>
        <div className="image">
          <img src={card.flag} alt="" />
        </div>
        <div className="text">
          <h2 className="title">{card.name}</h2>
          <div className="item">
            <span className="l">Population:</span>
            <span className="r">{card.population}</span>
          </div>
          <div className="item">
            <span className="l">Regio:</span>
            <span className="r">{card.region}</span>
          </div>
          <div className="item">
            <span className="l">Capital:</span>
            <span className="r">{card.capital}</span>
          </div>
        </div>
      </Card>
    </CardStyled>
  );
};

export default CardWidget;

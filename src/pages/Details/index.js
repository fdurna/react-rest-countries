import React, { useEffect } from "react";
import * as S from "./index.styles";
import { Button, Space } from "antd";
import { useParams, useNavigate } from "react-router-dom";
// components
import Loading from "../../components/Loading";
// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailCard } from "../../redux/actions/CardAction";
// antd
import { Row, Col, Typography } from "antd";

const Details = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { cardDetail, loading } = useSelector((state) => state.CardReducers);

  const { name } = useParams();

  const { Title } = Typography;

  useEffect(() => {
    dispatch(fetchDetailCard(name));
  }, [dispatch, name]);

  return (
    <S.DetailsStyled>
      <section className="detail container">
        {loading ? (
          <Loading />
        ) : (
          <>
            <Space size={6} style={{marginBottom: 20}}>
              <Button onClick={() => navigate("/")}>Back</Button>
            </Space>
            <Row>
              <Col span={12}>
                <div className="flag">
                  <img alt="flag" src={cardDetail.flag} />
                </div>
              </Col>
              <Col span={12}>
                <div className="info">
                  <Title level={3}>Aland</Title>
                  <div className="list">
                    <ul>
                      <li>
                        <span className="strong">Native Name :</span>
                        <span className="normal">{cardDetail.nativeName}</span>
                      </li>
                      <li>
                        <span className="strong">Population :</span>
                        <span className="normal">{cardDetail.population}</span>
                      </li>
                      <li>
                        <span className="strong">Region :</span>
                        <span className="normal">{cardDetail.region}</span>
                      </li>
                      <li>
                        <span className="strong">Sub Region :</span>
                        <span className="normal">{cardDetail.subregion}</span>
                      </li>
                      <li>
                        <span className="strong">Capital :</span>
                        <span className="normal">{cardDetail.capital}</span>
                      </li>
                      <li>
                        <span className="strong">Top Level Domain :</span>
                        <span className="normal">
                          {cardDetail.topLevelDomain}
                        </span>
                      </li>
                      <li>
                        <span className="strong">Currencies :</span>
                        <span className="normal">
                          {cardDetail.currencies
                            ? cardDetail.currencies[0].name
                            : "-"}
                        </span>
                      </li>
                      <li>
                        <span className="strong">Languages :</span>
                        <span className="normal">{cardDetail.nativeName}</span>
                      </li>
                    </ul>
                  </div>
                  {cardDetail.borders ? (
                    <div className="borders">
                      <Title level={5} className="title">
                        Borders :
                      </Title>
                      <div className="buttons">
                        {cardDetail.borders?.map((item, index) => (
                          <Button key={index} onClick={() => navigate(`/${item}`)}>{item}</Button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Col>
            </Row>
          </>
        )}
      </section>
    </S.DetailsStyled>
  );
};

export default Details;

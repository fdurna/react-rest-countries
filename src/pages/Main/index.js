import React, { useEffect, useState } from "react";
import * as S from './index.styles'
// component
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import Alert from '../../components/Alert'
// antd
import { Row, Col } from "antd";
// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../../redux/actions/CardAction";
// widgets
import CardWidget from "../../widgets/Card";
import SearchWidget from "../../widgets/Search";
import SelectWidget from "../../widgets/Select";
import FilterWidget from "../../widgets/Filter";

const Main = () => {
  const dispatch = useDispatch();
  const { cards, loading } = useSelector((state) => state.CardReducers);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const postPage = 8;

  const totalCard = cards.length;
  const lastCard = currentPage * postPage;
  const firstCard = lastCard - postPage;

  const filterCards = cards.slice(firstCard, lastCard);

  return (
    <>
      <S.MainStyled>
        <section className="filter container">
          <Row>
            <Col span={12} className="search">
              <SearchWidget />
            </Col>
            <Col span={12} align="right" className="selects">
              <FilterWidget />
              <SelectWidget />
            </Col>
          </Row>
        </section>
        <section
          className="list container"
          style={{ position: "relative" }}
        >
          {loading ? (
            <Loading />
          ) : (
            <>
              {filterCards.length ? (
                <>
                  <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
                    {filterCards.map((card, index) => (
                      <Col span={6} key={index} >
                        <CardWidget card={card}/>
                      </Col>
                    ))}
                  </Row>
                  <Pagination
                    currentPage={currentPage}
                    totalCard={totalCard}
                    setCurrentPage={setCurrentPage}
                  />
                </>
              ) : (
                <Alert message="Warning!" description="Country Not Found" type="warning"  />
              )}
            </>
          )}
        </section>
      </S.MainStyled>
    </>
  );
};

export default Main;

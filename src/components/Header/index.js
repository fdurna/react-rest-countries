import * as S from './index.styles'
// antd
import { Col, Row, Typography, Button } from "antd";
// icons
import { BsFillMoonFill } from "react-icons/bs";
// styles

const Header = ({toggleTheme}) => {
  const { Title } = Typography;
  return (
    <S.HeaderStyled className="header">
      <Row className="container">
        <Col span={12}>
          <Title level={3}>Rest Countries</Title>
        </Col>
        <Col span={12} align="right">
          <Button type="text" icon={<BsFillMoonFill />} onClick={toggleTheme}>
            Dark Mode
          </Button>
        </Col>
      </Row>
    </S.HeaderStyled>
  );
};

export default Header;

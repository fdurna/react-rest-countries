import * as S from './index.styles';

const Alert = ({message,description,type}) => {
  return (
      <S.AlertStyled
        message={message}
        description={description}
        type={type}
        showIcon
      />
  );
};

export default Alert;

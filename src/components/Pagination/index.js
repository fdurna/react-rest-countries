import * as S from "./index.styles";

const Pagination = ({ currentPage, totalCard, setCurrentPage }) => {
  const onChange = (val) => {
    setCurrentPage(val);
  };
  return (
    <S.PaginationStyled
      onChange={onChange}
      defaultCurrent={currentPage}
      total={totalCard}
    />
  );
};
export default Pagination;

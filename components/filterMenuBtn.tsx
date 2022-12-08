interface IProps {
  isOpenMenu: () => void;
}

export const FilterMenuBtn = ({ isOpenMenu }: IProps) => {
  return (
    <button className="filter-menu-btn" onClick={isOpenMenu}>
      <span className="filter-menu-btn__name">Фильтры</span>
      <span className="filter-menu-btn__rect"></span>
    </button>
  );
};

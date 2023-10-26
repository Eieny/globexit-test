import { ReactComponent as SearchIcon } from '../../accets/icons/search.svg';
import css from './SearchInput.module.css';

type Props = {
  /**
   * Значение в поле поиска.
   */
  value: string;

  /**
   * Событие изменения значения поля поиска.
   * @param value новое значение
   */
  onChange: (value: string) => void;

  /**
   * Событие клика по кнопке поиска.
   */
  onClick: () => void;
};

/**
 * Поле поиска.
 */
const SearchInput = (props: Props) => {
  const { value, onChange, onClick } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  // Поиск можно выполнить нажатием `Enter`
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    onClick();
  };

  return (
    <div className={css['container']}>
      <input
        id={css['search-input']}
        value={value}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
      <button id={css['search-button']} aria-label='Поиск' onClick={onClick}>
        <SearchIcon className={css['icon']} />
      </button>
    </div>
  );
};

export default SearchInput;

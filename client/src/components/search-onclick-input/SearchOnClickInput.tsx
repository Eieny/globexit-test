import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../accets/icons/search.svg';
import css from './SearchOnClickInput.module.css';

type Props = {
  /**
   * Событие поиска юзеров.
   * @param value значение для поиска
   */
  onSearch: (value: string) => void;
};

/**
 * Поле поиска с кнопкой.
 */
const SearchOnClickInput = (props: Props) => {
  const { onSearch } = props;
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.trim());
  };

  // Поиск можно выполнить нажатием `Enter`
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    onSearch(value);
  };

  const handleClick = () => {
    onSearch(value);
  };

  return (
    <div className={css['container']}>
      <input
        id={css['search-input']}
        placeholder='Начните вводить имя...'
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
      <button
        id={css['search-button']}
        aria-label='Поиск'
        onClick={handleClick}
      >
        <SearchIcon className={css['icon']} />
      </button>
    </div>
  );
};

export default SearchOnClickInput;

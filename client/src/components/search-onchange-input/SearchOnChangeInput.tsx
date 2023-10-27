import _ from 'lodash';
import { ReactComponent as SearchIcon } from '../../accets/icons/search.svg';
import css from './SearchOnChangeInput.module.css';

type Props = {
  /**
   * Событие поиска юзеров.
   * @param value значение для поиска
   */
  onSearch: (value: string) => void;
};

/**
 * Поле поиска с фильтрацией при вводе.
 */
const SearchOnChangeInput = (props: Props) => {
  const { onSearch } = props;

  const handleDebouncedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };
  const debouncedSearch = _.debounce(handleDebouncedChange, 400);

  return (
    <div className={css['container']}>
      <input
        id={css['search-input']}
        placeholder='Начните вводить имя...'
        onChange={debouncedSearch}
      />
      <SearchIcon className={css['icon']} />
    </div>
  );
};

export default SearchOnChangeInput;

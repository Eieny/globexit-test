import SearchOnChangeInput from 'components/search-onchange-input/SearchOnChangeInput';
import SearchOnClickInput from 'components/search-onclick-input/SearchOnClickInput';

type Props = {
  onSearch: (value: string) => void;
  isInstantSearch?: boolean;
};

const SearchInput = (props: Props) => {
  const { isInstantSearch = false, onSearch } = props;

  if (isInstantSearch) return <SearchOnChangeInput onSearch={onSearch} />;
  return <SearchOnClickInput onSearch={onSearch} />;
};

export default SearchInput;

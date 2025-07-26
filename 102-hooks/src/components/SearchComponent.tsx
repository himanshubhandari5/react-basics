// const SearchComponent = () => {
function SearchComponent() {
  // const searchResults = (searchTerm: string) => {
  type searchResultFn = (searchTerm: string) => void;
  function searchResults(searchTerm: string) {
    console.log('searchTerm: ', searchTerm);
  }

  function debouncedSearchedResults(callback: searchResultFn, delay: number) {
    let timer: number;
    return function (event: React.ChangeEvent<HTMLInputElement>) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(event.target.value);
      }, delay);
    };
  }

  const debounceSearch = debouncedSearchedResults(searchResults, 500);

  return (
    <div>
      <input type="text" onChange={debounceSearch} />
    </div>
  );
}

export default SearchComponent;

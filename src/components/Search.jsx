import { Divider, Input } from 'antd';

// Iteration 5
function Search({ search, setSearch }) {
  return (
    <>
      <label>Search</label>
      <Input
        value={search}
        type="text"
        onChange={(e) => setSearch(e.target.value)
        }

      />

      <Divider></Divider>
    </>
  );
}

export default Search;

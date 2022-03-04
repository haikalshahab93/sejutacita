import React from "react";

const SearchBook = () => {
  const { books } = useContext(BookContext);

  <Container>
    <InputGroup className="mb-3">
      <InputGroup.Text id="title">Title</InputGroup.Text>
      <FormControl
        placeholder="Title"
        aria-label="Title"
        aria-describedby="basic-addon1"
        onChange={handleChange}
      />
    </InputGroup>

    <select>
      <option>Pilih data</option>
      {}
    </select>
  </Container>;
};

export default SearchBook;

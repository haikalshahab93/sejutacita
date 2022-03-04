export const bookSlice = (state, keyword) => {
    if (keyword) {
      const isKeywordExist = (array, string) => array.toLowerCase().includes(string);
      return state.notes.data.filter((note) => isKeywordExist(note.note, keyword) || isKeywordExist(note.title, keyword));
    }
    return state.notes.data;
  };
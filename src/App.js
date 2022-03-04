import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import CategoriesList from "./components/CategoriesList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BookProvider } from "./components/BookContext";
import MyBookList from "./components/MyBookList";
import DetailBook from "./components/DetailBook";

const App = () => (
  <BookProvider>  
    <div className="main">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/categories" element={<CategoriesList />}/>
          <Route  path="/detail/:id/:id" element={<DetailBook />}/>
          <Route  path="/mybookmark" element={<MyBookList />}/>
          
        </Routes> 
      </Router>
    </div>
  </BookProvider>
);

export default App;

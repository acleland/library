import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './views/Home/Home';
import BookList from './views/Books/BookList';
import BookDetail from './views/Books/BookDetail';
import './App.css';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/books">
            <BookList />
          </Route>
          <Route exact path="/books/:id">
            <Link to="/books">Back to Books</Link>
            <BookDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;

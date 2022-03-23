import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
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
            <BookList />
          </Route>
          <Route exact path="/books">
            <BookList />
          </Route>
          <Route exact path="/books/:id">
            <BookDetail />
            <Link to="/books">Back to Catalog</Link>
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;

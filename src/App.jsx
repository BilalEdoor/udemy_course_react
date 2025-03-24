import './App.css';
import Header from "./Componants/Header";
import Post from './Componants/Post';
import PostList from './Componants/PostList';

function App() {
  return (
    <div className="App">
      <Header />
      <PostList/>
      <Post />
    </div>
  );
}

export default App;

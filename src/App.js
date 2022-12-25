import React,{useEffect,useState} from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Articlepage from './Articlepage';
import Contact from './Contact';
import './App.css';

function App() {
  let [page, setPage]=useState("home");
  let [articles, setArticles]=useState([]);
  let [articleId,setArticleId]=useState(0);

  let content="";
  switch(page){
    case "home": content=<Home articles={articles} handler={handleArticleChange} />;break;
    case "article": content=<Articlepage articles={articles} id={articleId}/>;break;
    case "contact": content=<Contact />;break;
  }

  function handleArticleChange(id){
    console.log(id);
    setArticleId(()=> id);
    setPage("article");
  }



function handlerPageChange(newPage){
  console.log(newPage);
  setPage((page)=>newPage);
}


useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setArticles(()=>json))
    .catch(error => console.error(error));
  },[])





useEffect(()=>{
  window.history.pushState("object or string", "Title", "/"+page);
},[page])

 
  return (
    <div className="App">
      <header className='App-header'>
        <Navbar handler={handlerPageChange} activePage={page} />
      </header>
      {content}
    </div>
  );
}

export default App;

export default function Article({article,handler}){
    return(
        <div className="Article">
        <li>
            <h1>{article.title}</h1>
            <p>{article.body.slice(0,100)}...<button onClick={()=>handler(article.id)}>lire plus</button></p>
        </li>
        </div>
    )
}

//{articles.map((elem) => <Article handler={handler} key={elem.id} article={elem}/>)}


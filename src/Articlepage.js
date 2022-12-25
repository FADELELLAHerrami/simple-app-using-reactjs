export default function Articlepage({articles,id}){
    let article =articles.find(elem => (elem.id === id));
    
    return(
        <div className="Articlepage">
            <h1>Articlepage</h1>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
        </div>
    )
}
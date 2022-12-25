import Article from "./Article"
export default function Home({articles,handler}){
    return(
        <div className="Home">
            <h1>Home</h1>
            <ol>
                { articles.map((elem) => <Article handler={handler} key={elem.id} article={elem} />)}
            </ol>

        </div>
    )
}
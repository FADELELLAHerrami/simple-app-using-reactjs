import './Navbar.css'
export default function Navbar(props){
    return(
        <nav className="nav">
            <div className={props.activePage=="home"?"btn active" :"btn" } onClick={()=>props.handler("home")}>   Home   </div>
            <div className={props.activePage=="article" ?"btn active" :"btn" } onClick={()=>props.handler("article")}>article</div>
            <div className={props.activePage=="contact" ?"btn active" :"btn" } onClick={()=>props.handler("contact")}>contact</div>
        </nav>
    )
}
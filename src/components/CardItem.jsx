import "./CardItem.css";

function CardItem({ title, imgUrl, isVisited, children }) {
    return (
      <div className="card">
        <img src={imgUrl} alt="" />
        <div className="content">
          <h2 className="title">{title}</h2>
          <p className="description">{children}</p>
          {isVisited ? <span>Visitata</span> : <span>Non visitata</span>}
        </div>
      </div>
    );
  }
  
  export default CardItem;
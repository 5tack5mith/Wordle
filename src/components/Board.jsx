import Row from './Row.jsx';
function Board(){
    return(
        <div className="board">
            {Array(6).fill(null).map((_, index)=>(
                <Row key={index} />
            ))}
        </div>
    );
}
export default Board;
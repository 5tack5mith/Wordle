import Key from "./Key";
function KeyRow({letters}){
    return (
        <div className="key-row">
            {letters.map((letter,index)=>(
                <Key key={index} value={letter}/>
            ))}
        </div>
    );
}

export default KeyRow;
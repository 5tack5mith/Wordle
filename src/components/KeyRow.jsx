import Key from "./Key";
function KeyRow({letters,handleInput}){
    return (
        <div className="key-row">
            {letters.map((letter,index)=>(
                <Key
                key={index}
                value={letter}
                handleInput={handleInput}
                />
            ))}
        </div>
    );
}

export default KeyRow;
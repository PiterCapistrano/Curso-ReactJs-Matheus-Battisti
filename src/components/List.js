import Item from "./Item"

function List(){
return(
    <>
        <h1>Minha lista</h1>
        <ul>
            <Item marca="Ford" ano_lancamento={1985} />
            <Item marca="Honda" ano_lancamento={2010} />
            <Item marca="Fiat" />
            <Item marca="Chevrolet" ano_lancamento={1999} />
            <Item />
        </ul>
        
    </>
)
}

export default List
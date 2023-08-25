
export default function Input(obj){

    const result = obj.arr.map((el, index)=>

            <input type="text" placeholder={el} label = {el}/>
     
    )
    return (
        <>
            {result}
        </>
    )
}
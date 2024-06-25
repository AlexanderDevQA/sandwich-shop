import './input.css' 

type inputAssilonRequest = {
    value: string | number ,
    setValue: (value: any) => void,
    width?: number,
    height?: number
}

export default function InputAssilon({value, setValue, width, height }: inputAssilonRequest){
    const  pWidth = width ?? '32px'
    const  pHeight = height?? '32px'
    console.log(typeof(value))
    return <input type={typeof(value) == "number"? "number" : "text" } width={pWidth} height={pHeight}  className="value" value={(value)} onChange={(event) => setValue(event.target.value)}/>
    
}

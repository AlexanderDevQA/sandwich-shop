import Box from "../icons/box";
import Desktop from "../icons/desktop";
import Info from "../icons/info";
import Person from "../icons/person";
import Sliders from "../icons/sliders";


export default function Aside() {

    return <div className='flex flex-row h-full absolute bg-gray-500'>
        <Desktop height={16} width={16}/>
        <Box height={16} width={16}/>
        <Person height={16} width={16}/>
        <Sliders height={16} width={16}/>
        <Info height={16} width={16}/>
    </div>
}
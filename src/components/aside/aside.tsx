import Box from "../icons/box";
import Desktop from "../icons/desktop";
import Info from "../icons/info";
import Person from "../icons/person";
import Sliders from "../icons/sliders";


export default function Aside() {

    return <div className='flex flex-col w-[100px] h-full absolute justify-center items-center gap-16 pb-24 bg-gray-200 overflow-hidden'>
        <Desktop className="cursor-pointer p-1 rounded hover:bg-gray-300 hover:w-12 hover:h-12 relative hover:rounded-2xl hover:p-2 transition-all"/>
        <Box className="cursor-pointer p-1 rounded hover:bg-gray-300 hover:w-12 hover:h-12 relative hover:rounded-2xl hover:p-2 transition-all"/>
        <Person className="cursor-pointer p-1 rounded hover:bg-gray-300 hover:w-12 hover:h-12 relative hover:rounded-2xl hover:p-2 transition-all"/>
        <Sliders className="cursor-pointer p-1 rounded hover:bg-gray-300 hover:w-12 hover:h-12 relative hover:rounded-2xl hover:p-2 transition-all"/>
        <Info className="cursor-pointer p-1 rounded hover:bg-gray-300 hover:w-12 hover:h-12 relative hover:rounded-2xl hover:p-2 transition-all"/>
    </div>
}
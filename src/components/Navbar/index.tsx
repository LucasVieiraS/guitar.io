import { FaGuitar } from 'react-icons/fa';
import NavButton from './components/NavButton';

export default function Navbar() {
    return <>
        <nav className="w-full h-[8vh] bg-blue-600 p-3 px-3 flex gap-6">
            <a className="flex justify-start align-center my-auto w-fit h-max" href="/">
                <FaGuitar className='w-12 h-8 text-white'/>
                <h1 className="font-bold text-3xl text-white leading-none">GUITAR.IO</h1>
            </a>
            <div className="flex justify-start align-center w-1/2 h-max gap-2 my-auto">
                <NavButton title="TABS" route="/tabs"/>
                <NavButton title="STORE" route="/store"/>
            </div>
        </nav>
        <div className='bg-gradient-to-r from-blue-400 to-indigo-blue-700 w-full h-2'>
        </div>
    </>
}

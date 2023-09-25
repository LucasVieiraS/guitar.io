import { FaGuitar } from 'react-icons/fa';

export default function Navbar() {
    return <>
        <nav className="w-full h-[8vh] bg-blue-600 p-6 px-3">
            <div className="flex justify-start align-center">
                <FaGuitar className='w-12 h-8 text-white'/>
                <h1 className="font-bold text-3xl text-white leading-none">GUITAR.IO</h1>
            </div>
        </nav>
        <div className='bg-gradient-to-r from-blue-400 to-indigo-blue-700 w-full h-2'></div>
    </>
}
interface SongProps {
    name: string
    creator: string
}

export default function SongInfo({name = '???', creator = '???'}: SongProps) {
    return <div className="flex align-center justify-start flex-col w-full h-24 bg-blue-300 rounded shadow-sm p-6 gap-2">
        <h1 className="font-black text-2xl leading-none">{ name }</h1>
        <p className="text-gray-700 text-md leading-none">{ creator }</p>
    </div>
}


export default function AdventureMomentsDiv(props) {
    return (
        <div className="relative w-full h-full aspect-[1/1] rounded-lg">
            <div className="relative w-full h-full rounded-lg group overflow-hidden">
                <img react-lazyload className="w-full h-full rounded-lg object-cover transition duration-250 group-hover:scale-[110%]" src={props.foto} alt="name" loading="lazy" />
                <span className="text-gray-800 bg-white/90 shadow-sm text-xs px-2 py-0.5 rounded-lg absolute top-4 left-3">{props.type}</span>
                <span className="absolute bottom-3 left-4 text-sm text-white text-shadow-xs z-10">{props.namee}</span>
                <div class="absolute inset-0 w-full h-full rounded-lg bg-[linear-gradient(180deg,_rgba(0,0,0,0)_90%,_#000000_105%)]"></div>
                <div className="absolute hidden transition duration-300 group-hover:flex top-0 left-0 bg-[rgba(0,0,0,0.1)] rounded-lg w-full h-full flex-col items-center justify-center">
                    <i class="fa-solid fa-camera text-white text-3xl"></i>
                </div>
            </div>
        </div>
    )
}
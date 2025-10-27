import AdventureMomentsDiv from "./AdventureMomentsDiv"
import { useState } from "react"

export default function AdventureMoments() {
    let [filterType, setFilterType] = useState('All')
    let allInfo = [
        {
            namee: "Quad Biking Adventure",
            type: "Summer",
            foto: "https://images.unsplash.com/photo-1734942439222-6452df2fd480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFkJTIwYmlrZSUyMG1vdW50YWluJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc1ODczMDE4MXww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
            namee: "Mountain Horse Riding",
            type: "Spring",
            foto: "https://images.unsplash.com/photo-1697779803417-8ef90d8194b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMHJpZGluZyUyMG1vdW50YWluJTIwdHJhaWx8ZW58MXx8fHwxNzU4NzMwMTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
            namee: "Paragliding Over Mountains",
            type: "Summer",
            foto: "https://images.unsplash.com/photo-1616511384128-899bbf5ce275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJhZ2xpZGluZyUyMG1vdW50YWluJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc1ODczMDE4NHww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
            namee: "White Water Rafting",
            type: "Summer",
            foto: "https://images.unsplash.com/photo-1718383536473-72371285f250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZXdhdGVyJTIwcmFmdGluZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NTg3MzAxODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
            namee: "Winter Sports",
            type: "Winter",
            foto: "https://images.unsplash.com/photo-1586283060052-6ed3ee11a72c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lpbmclMjBzbm93Ym9hcmQlMjB3aW50ZXIlMjBtb3VudGFpbnxlbnwxfHx8fDE3NTg3MzAxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
            namee: "Mountain Hiking",
            type: "Autumn",
            foto: "https://images.unsplash.com/photo-1569058826153-6f42111a616d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMHRyYWlsJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc1ODczMDE4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
            namee: "Adventure Groups",
            type: "Summer",
            foto: "https://images.unsplash.com/photo-1652114068764-81abab2b83cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjB0b3VyaXNtJTIwZ3JvdXAlMjBwZW9wbGV8ZW58MXx8fHwxNzU4NzMwMTg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
            namee: "Mountain Villages",
            type: "Spring",
            foto: "https://images.unsplash.com/photo-1669379399096-586a21020826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHZW9yZ2lhbiUyMG1vdW50YWluJTIwdmlsbGFnZSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTg3MzAxODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
            namee: "Professional Guides",
            type: "All Year",
            foto: "https://images.unsplash.com/photo-1579603982264-d248efec97df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBndWlkZSUyMHByb2Zlc3Npb25hbCUyMG91dGRvb3J8ZW58MXx8fHwxNzU4NzMwMTkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
        }

    ]
    let [list, setList] = useState(allInfo)
    let checkFilterType = (Filter) => {
        if (Filter === 'All') {
            setList(allInfo)
        } else if (Filter === 'Spring') {
            setList(allInfo.filter(item => item.type === 'Spring'))
        } else if (Filter === 'Summer') {
            setList(allInfo.filter(item => item.type === 'Summer'))
        } else if (Filter === 'Autumn') {
            setList(allInfo.filter(item => item.type === 'Autumn'))
        } else if (Filter === 'Winter') {
            setList(allInfo.filter(item => item.type === 'Winter'))
        }
        return
    }
    return (
        <section className="w-full relative h-auto py-20 bg-gray-50 mt-20">
            <div className="container w-full max-w-[90%] mx-auto">
                <div className="w-full flex flex-col items-center justify-center text-center">

                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-lg font-normal">Gallery</span>
                    <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">Adventure Moments</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience the beauty and excitement of Georgian adventures through our collection of stunning photos. Every image tells a story of unforgettable moments.</p>

                    <ul className="bg-white shadow-sm p-2.5 flex flex-row items-center gap-2 rounded-lg mt-20">
                        <li className={`${filterType === 'All' ? "bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-2 rounded-lg font-bold" : 'text-black cursor-pointer hover:bg-[#e9ebef] hover:text-black text-sm px-3 py-2 rounded-lg font-bold'}`}
                            onClick={() => {
                                checkFilterType('All')
                                setFilterType('All')
                            }}>All</li>
                        <li className={`${filterType === 'Spring' ? "bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-2 rounded-lg font-bold" : 'text-black cursor-pointer hover:bg-[#e9ebef] hover:text-black text-sm px-3 py-2 rounded-lg font-bold'}`}
                            onClick={() => {
                                checkFilterType('Spring')
                                setFilterType('Spring')
                            }}
                        >Spring</li>
                        <li className={`${filterType === 'Summer' ? "bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-2 rounded-lg font-bold" : 'text-black cursor-pointer hover:bg-[#e9ebef] hover:text-black text-sm px-3 py-2 rounded-lg font-bold'}`}
                            onClick={() => {
                                checkFilterType('Summer')
                                setFilterType('Summer')
                            }}>Summer</li>
                        <li className={`${filterType === 'Autumn' ? "bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-2 rounded-lg font-bold" : 'text-black cursor-pointer hover:bg-[#e9ebef] hover:text-black text-sm px-3 py-2 rounded-lg font-bold'}`}
                            onClick={() => {
                                checkFilterType('Autumn')
                                setFilterType('Autumn')
                            }}>Autumn</li>
                        <li className={`${filterType === 'Winter' ? "bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-2 rounded-lg font-bold" : 'text-black cursor-pointer hover:bg-[#e9ebef] hover:text-black text-sm px-3 py-2 rounded-lg font-bold'}`}
                            onClick={() => {
                                checkFilterType('Winter')
                                setFilterType('Winter')
                            }}>Winter</li>
                    </ul>
                </div>


                <div className="w-full relative h-auto grid lg:grid-cols-4 gap-4 mt-10">
                    {
                        list.map(item => {
                            return <AdventureMomentsDiv namee={item.namee} type={item.type} foto={item.foto} />
                        })
                    }
                </div>

                <div className="w-full h-auto flex flex-row justify-center my-5">
                    <button className="bg-white border border-solid border-gray-100 px-4 py-2 rounded-lg text-sm">View More Photos</button>
                </div>

            </div>
        </section>
    )
}
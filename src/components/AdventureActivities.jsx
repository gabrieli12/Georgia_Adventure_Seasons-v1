import AdventureActiviesDiv from "./AdventureActiviesDiv"

function AdventureActivies() {
    return (
        <div className='w-full flex flex-col items-center px-[30px] py-[50px] gap-[15px] bg-[#f8f9fa]'>
            <h1 className='text-4xl md:text-[48px] mb-6 text-gray-900 text-center'>Adventure Activities</h1>
            <p className='text-xl text-gray-600 max-w-3xl text-center'>Experience the thrill of Georgian mountains through our diverse range of seasonal adventures. From adrenaline-pumping quad rides to peaceful horsbeback tours, we have something for every adventurer.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] md:w-[80%] lg:w-[95%] mt-[40px]">
                <AdventureActiviesDiv type='Easy' season='Sprind-Autumn' img='https://images.unsplash.com/photo-1734942439222-6452df2fd480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFkJTIwYmlrZSUyMG1vdW50YWluJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc1ODczMDE4MXww&ixlib=rb-4.1.0&q=80&w=1080' title='Quad Bike Adventures' p='Explore rugged mountain trails on powerful ATVs through scenic Georgian landscapes.' time='2-4 hours'  people='2-8 people' tags={['Professional guide', 'Safety equipment', 'Drone footage available']} price='$45' />

                <AdventureActiviesDiv type='Medium' season='All Year' img='https://images.unsplash.com/photo-1697779803417-8ef90d8194b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMHJpZGluZyUyMG1vdW50YWluJTIwdHJhaWx8ZW58MXx8fHwxNzU4NzMwMTgzfDA&ixlib=rb-4.1.0&q=80&w=1080' title='Horse Riding Tours' p='Traditional Georgian horseback adventures through mountain valleys and ancient trails.' time='1-6 hours' people='1-6 people' tags={['Experienced horses', 'Traditional Georgian style', 'Mountain views']} price='$35' />
                
                <AdventureActiviesDiv type='Easy' season='Spring-Autumn' img='https://images.unsplash.com/photo-1616511384128-899bbf5ce275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJhZ2xpZGluZyUyMG1vdW50YWluJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc1ODczMDE4NHww&ixlib=rb-4.1.0&q=80&w=1080' title='Paragliding Flights' p='Soar above Georgian mountains with experienced pilots for breathtaking aerial views.' time='30-60 min'  people='1-2 people' tags={['Certified pilot', 'HD video recording', 'Insurance included']} price='$85' />

                <AdventureActiviesDiv type='Medium' season='April-October' img='https://images.unsplash.com/photo-1718383536473-72371285f250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZXdhdGVyJTIwcmFmdGluZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NTg3MzAxODV8MA&ixlib=rb-4.1.0&q=80&w=1080' title='White Water Rafting' p='Navigate exciting rapids on Georgian rivers with professional rafting guides.' time='3-5 hours' people='4-12 people' tags={['Professional guides', 'All equipment', 'Waterproof photos']} price='$55' />

                <AdventureActiviesDiv type='Easy-Hard' season='December-March' img='https://images.unsplash.com/photo-1586283060052-6ed3ee11a72c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lpbmclMjBzbm93Ym9hcmQlMjB3aW50ZXIlMjBtb3VudGFpbnxlbnwxfHx8fDE3NTg3MzAxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080' title='Winter Sports' p='Skiing, snowboarding, and snowmobile adventures in Georgian mountain winter wonderland.'  time='1-8 hours' people='1-10 people' tags={['Equipment rental', 'Ski lessons', 'Hot drinks included']} price='$40' />

                <AdventureActiviesDiv type='Easy-Hard' season='All Year' img='https://images.unsplash.com/photo-1569058826153-6f42111a616d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMHRyYWlsJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc1ODczMDE4N3ww&ixlib=rb-4.1.0&q=80&w=1080' title='Mountain Hiking' p='Guided hiking tours through pristine Georgian mountain trails and ancient forests.'  time='2-8 hours' people='2-15 people' tags={['Local guide', 'Wildlife spotting','Traditional lunch']} price='$25' />



            </div>
            <button className='bg-[#f56500] text-white font-[600] w-[180px]  py-[10px] duration-200 cursor-pointer rounded hover:bg-orange-600 mt-[30px]'>View All Activities</button>
        </div>
    )
}
export default AdventureActivies
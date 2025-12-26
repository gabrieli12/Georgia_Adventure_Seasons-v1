import React from 'react'
import Carservice from './Carservice'
import Gridimgs from './Gridimgs'
import Restplaces from './Restplaces'

function Gmysec() {
    return (
        <>
            <section className='w-full'>
                <Gridimgs/>
                <Carservice/>
                {/* <Restplaces/> */}
            </section>
        </>
    )
}

export default Gmysec
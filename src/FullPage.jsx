import { lazy, Suspense } from 'react';

const Hero = lazy(() => import('./HOME/Hero/Hero'));
const AdventureActivities = lazy(() => import('./HOME/AdventureActivities/AdventureActivities'));
const Cottagescard = lazy(() => import('./HOME/Hotels&cotages/Cottagescard'));
const Gridimgs = lazy(() => import('./HOME/SmallGalery/Gridimgs'));
const Reviews = lazy(() => import('./HOME/Reviews/Reviews'));
const Carservice = lazy(() => import('./HOME/Carservices/Carservice'));
const Faq = lazy(() => import('./HOME/FAQ/Faq'));
const Map = lazy(() => import('./HOME/MAP/Map'));


import StringRunner from './HOME/Hero/StringRunner/StringRunner'
import LegalConsent from './Pages/important/LegalConsent'

function FullPage() {

    return (
        <>


            <LegalConsent />
            <main>

                    <Hero />
                    <AdventureActivities />
                    <Cottagescard />
                    {/* <Gridimgs /> */}
                    <Reviews />
                    <Carservice />
                    <Faq />
                    <div className="relative bg-[#0B1220] py-7">
                        <img loading="lazy" className="absolute w-48 z-10 -rotate-20 top-[50%] -translate-y-[50%] left-20 rounded-2xl max-md:hidden" src="https://flyingmag1.b-cdn.net/wp-content/uploads/sites/2/2025/05/dji-avata-featured.jpg" alt="" />
                        <StringRunner animationName={'marquee'} />
                        <StringRunner animationName={'marquee2'} />
                    </div>

                    <Map />

            </main>



        </>
    )
}

export default FullPage


import Marquee from 'react-fast-marquee';
import { VscSparkle } from 'react-icons/vsc'
import MarqueeComponent from './MarqueeComponent';
import "@devnomic/marquee/dist/index.css";
import { marqueeContent } from './data';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="h-screen overflow-hidden flex flex-col justify-between py-20 lg:gap-10 w-full">
            <div className="w-full flex flex-col items-center justify-center gap-5 px-10 min-h-[60%] xl:px-20 2xl:px-32">
                <div className="text-zinc-900 font-semibold leading-tight p-2 border border-dashed flex gap-3 items-center w-fit">
                    <VscSparkle className='text-violet-600' />
                    Interface AI・[V1.0]
                </div>
                <h1 className="text-violet-600 font-extrabold lowercase text-center xl:leading-[85px] text-6xl lg:text-7xl xl:text-8xl">
                    run your inventory on autopilot.
                </h1>
                <div className='flex items-center gap-10'>
                    <Link target='_blank' href={'https://calendly.com/rebhavbharadwaj/introductory-call'}>
                        <button className="justify-center border border-dashed border-neutral-400 items-center inline-flex text-center text-stone-900 text-xl font-bold leading-tight w-fit mt-5 py-4 px-6">
                            sign up
                        </button>
                    </Link>
                    <Link target='_blank' href={'https://calendly.com/rebhavbharadwaj/introductory-call'}>
                        <button className="bg-stone-900 justify-center items-center inline-flex text-center text-neutral-50 text-xl font-bold leading-tight w-fit mt-5 py-4 px-6">
                            book a 15-min call
                        </button>
                    </Link>
                </div>
            </div>
            <Marquee className='h-fit' autoFill direction='left'>
                {marqueeContent.map((content, index) => {
                    return (
                        <MarqueeComponent key={index} image={content.image} text={content.text} />
                    )
                })}
            </Marquee>
        </section>
    );
}

export default Hero;
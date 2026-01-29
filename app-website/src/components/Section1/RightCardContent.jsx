import React from 'react'

const RightCardContent = (props) => {

    console.log(props.color);
    
    return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-smooth'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center animate-pulse-glow'>{props.id+1}</h2>
            <div className='animate-fadeInUp'>
                <p className='text-shadow-2xs text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure accusamus cupiditate voluptatibus mollitia alias tempora.</p>
                <div className='flex justify-between gap-3'>
                    <button style={{backgroundColor:props.color}} className='text-white font-medium px-8 py-2 rounded-full transition-smooth hover:shadow-lg hover:scale-105 duration-300'>{props.tag}</button>
                    <button className='text-white font-medium px-3 py-2 rounded-full transition-smooth hover:bg-white/20 hover:scale-110 duration-300'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent

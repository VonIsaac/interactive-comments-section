import DATA from '../data.js';

export default function Maxblagun({onclicks}){

    return(
        <div className=' border-0 border-slate-950 w-[78%] p-4 mb-4 bg-slate-100 rounded-xl'>
            <div className='flex gap-3 mb-2'>
                <img src= {DATA[1].img} alt="maxblagun" className=' w-9 object-contain'/>
                <h2 className=' font-bold'>maxblagun</h2>
                <p className=' text-slate-500'>2 weeks ago</p>
                <button onClick = {onclicks} className=' ml-auto font-bold mb-3 cursor-pointer hover:text-sky-500'>Reply</button>
            </div>

            <p className=' font-sans text-slate-600 font-medium'>
                Woah, your project looks awesome! 
                How long have you been coding for? I'm still new, but think
                I want to dive into React as well soon. 
                Perhaps you can give me an insight on where I can learn React? Thanks!
            </p>
        </div>
    )
}
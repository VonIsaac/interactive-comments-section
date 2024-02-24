import DATA from '../data.js'
export default function  Ramsesmiron(){

    return(
        <div className=' border-0 border-slate-950 w-[73%] p-4 mb-4 bg-slate-100 rounded-xl ml-10'>
           <div  className=' flex gap-3 mb-2'>
                <img src={DATA[2].img} alt="ramsesmiron" className=' w-9 object-contain' />
                <h2 className=' font-bold'>ramsesmiron</h2>
                <p className=' text-slate-500'>1 week ago</p>
                <button className=' ml-auto font-bold mb-3 cursor-pointer hover:text-sky-500'>Reply</button>
           </div>
            <p className=' font-sans text-slate-600 font-medium'>
                <b className=' text-blue-600 cursor-pointer'>{DATA[2].names}</b> If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS,
                 and JS before considering React.
                It's very tempting to jump ahead but lay a solid foundation first.
             </p>
        </div>
    )
}
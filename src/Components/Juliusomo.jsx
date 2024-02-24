import DATA from '../data.js'
export default function  Juliusomo(){

    return(
        <div className=' border-0 border-slate-950 w-[73%] p-4 mb-4 bg-slate-100 rounded-xl ml-10'>
           <div className='flex gap-3 mb-2'>
                <img src={DATA[3].img} alt="juliusomo" className=' w-9 object-contain' />
                <h2 className=' font-bold'>juliusomo</h2>
                <p className=' text-slate-500'>2 days ago</p>
                <button className=' ml-auto font-bold mb-3 cursor-pointer hover:text-sky-500'>Delete</button>
           </div>
            <p className=' font-sans text-slate-600 font-medium'>
                <b className=' text-blue-600 cursor-pointer'>{DATA[3].names}</b> I couldn't agree more with this.
                 Everything moves so fast and it always seems like everyone knows the newest library/framework.
                 But the fundamentals are what stay constant.
             </p>
        </div>
    )
}
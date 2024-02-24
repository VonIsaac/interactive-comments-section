import DATA from '../data.js';

export default function Amyrobson({onclick}){

    return(
        <div className=' border-slate-950 w-[78%] p-4 mb-4 bg-slate-100 border-0 rounded-xl'>
           <div className=' flex gap-3 mb-2'>
                <img src={DATA[0].img} alt="amyrobson" className='w-9 object-contain' />
                <h2 className=' font-bold'>amyrobson</h2>
                <p className=' text-slate-500'>1 month ago</p>
                <button onClick={onclick} className=' ml-auto font-bold mb-3 cursor-pointer hover:text-sky-500'>Reply</button>
           </div>
         
            <p className=' font-sans text-slate-600 font-medium'>
                Impressive! Though it seems the drag feature could be improved.
                But overall it looks incredible.
                You've nailed the design and the responsiveness at various breakpoints works really well.
             </p>
        </div>
    )
}
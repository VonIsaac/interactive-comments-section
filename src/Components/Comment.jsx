import DATA from '../data.js';
import ModalDelete from './ModalDelete.jsx';
import { useRef } from 'react';
export default function Comment({comments, onDelete}){
    const openModalDelete = useRef();

    function opendModal(){
        openModalDelete.current.open()
    }

    return(
        <>

            <ul>     
                {comments.map((replycomment) => (
                    <div className='border-0 border-slate-950 w-[73%] p-4 mb-4 bg-slate-100 rounded-xl ml-10'>
                            <ModalDelete ref={openModalDelete} button = "NO CANCEL" onDeletes = {() => onDelete(replycomment.id)}  >
                                <h2 className=' text-stone-700 font-bold text-xl'>Delete comment</h2>
                                <p className='text-stone-600 mb-4 font-semibold'>Are you sure you want to delete this comment? This will remove the comment and cant be undone</p>
                            </ModalDelete>  

                        <li key={replycomment.id}>
                            <div  className='flex gap-4 mb-2'>
                                <img src={DATA[3].img} alt= 'icon' className='w-9 object-contain' />
                                <h1 className=' font-bold text-lg cursor-pointer'>juliusomo</h1>
                                <p className=' text-slate-500 font-medium mt-1'>Now</p>
                                <button onClick={opendModal} className=' ml-auto font-bold mb-3 cursor-pointer text-rose-700  hover:text-slate-950'>Delete</button>
                            </div>
                            <p className=" font-sans text-slate-600 font-medium ml-5">
                                <b className=' text-blue-600 cursor-pointer'>{DATA[0].names}</b> {replycomment.comment}
                            </p>
                    
                        </li>
                    </div>
                ))}
            </ul>    
        </>
    )
}

//() => onDelete(replycomment.id)
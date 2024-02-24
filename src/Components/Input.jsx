import DATA from '../data.js'
import { useRef } from 'react'
import Modal from './Modal.jsx';
export default function Input({onClickReply}){
     const inputComment =  useRef();
     const modalOpen = useRef()

    function handleReply(){
        const inputComments =  inputComment.current.value;

        if(inputComments.trim() === ""){
            modalOpen.current.open()
            return;
            
        }

        onClickReply({
            comment:inputComments
        })

    }

    return(
        <>
            <Modal ref={modalOpen} button = "CLOSE">
                <h2 className=" text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className=" text-stone-600 mb-4">Oops.... looks like you forgot to enter value</p>
                <p className=" text-stone-600 mb-4">Please make sure to provide a valid value for every input field</p>
            </Modal>
            <div className='border-0 border-slate-950 w-[78%] h-40 p-4 mb-10 bg-slate-100 rounded-xl'>
                <div className=' flex items-center'>
                    <img src= {DATA[3].img} alt='icon' className=' w-9 object-contain mb-7' />
                    <textarea  type="text" ref={inputComment} placeholder='Add a comment...' className=' h-24 w-[80%] ml-4 mt-2 bg-slate-200 rounded-sm p-3' />
                    <button onClick={handleReply} className=' ml-4 border bg-slate-950 text-white p-2 rounded font-medium hover:bg-zinc-600'>SEND</button>
                </div>
            </div>
        
        </>
        
    )
}
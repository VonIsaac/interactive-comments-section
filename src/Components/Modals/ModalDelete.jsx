
import { useRef, useEffect} from "react"
import { createPortal } from "react-dom";
import ProgressBar from "../ProgressTimer/ProgressBar";

const TIMER = 3000;
export default  function ModalDelete({children, button, onDeletes,deleteModal }){
    const modalDelete = useRef()
   
    useEffect(() => {
        if(deleteModal){
            modalDelete.current.showModal()
        }
       const timer = setTimeout(() => {
        console.log("Timer Set");
            modalDelete.current.close()
            
       }, TIMER)

       return () => {
        console.log('cleaning up timer')
        clearTimeout(timer)
       }
    }, [deleteModal])
   

    
    return createPortal(
        
            <dialog ref={modalDelete} className=" backdrop:bg-stone-900/90 p-4 rounded-md shadow-md w-[25%]">
                <ProgressBar key={deleteModal} timer = {TIMER} />
                {children}
                
                <form method="dialog" className= "gap-3">
                    <button className=" px-2 py-1 text-xs md:text-base rounded-md bg-stone-800 text-stone-400 hover:bg-stone-600 hover:text-stone-100 w-[27%]">{button}</button>
                    <button onClick={ onDeletes} className=" ml-3 bg-stone-800 text-stone-400 px-2 py-1 rounded hover:bg-stone-600 hover:text-stone-100">YES, DELETE</button>
                </form>
            </dialog>,
            document.getElementById('modal-delete')
    )
}

/*useImperativeHandle(ref,() => {
    return{
        open(){
            modalDelete.current.showModal()
        }
    }
})*/

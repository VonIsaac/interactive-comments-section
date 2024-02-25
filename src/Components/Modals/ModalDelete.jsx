
import { useRef, useImperativeHandle,forwardRef  } from "react"
import { createPortal } from "react-dom"
const ModalDelete = forwardRef( function ModalDelete({children, button, onDeletes}, ref){
    const modalDelete = useRef()


    useImperativeHandle(ref,() => {
        return{
            open(){
                modalDelete.current.showModal()
            }
        }
    })

    
    return createPortal(
        
            <dialog ref={modalDelete} className=" backdrop:bg-stone-900/90 p-4 rounded-md shadow-md w-[25%]">
                {children}
                
                <form method="dialog" className= "gap-3">
                    <button className=" px-2 py-1 text-xs md:text-base rounded-md bg-stone-800 text-stone-400 hover:bg-stone-600 hover:text-stone-100 w-[27%]">{button}</button>
                    <button onClick={ onDeletes} className=" ml-3 bg-stone-800 text-stone-400 px-2 py-1 rounded hover:bg-stone-600 hover:text-stone-100">YES, DELETE</button>
                </form>
            </dialog>,
            document.getElementById('modal-delete')
    )
})

export default ModalDelete

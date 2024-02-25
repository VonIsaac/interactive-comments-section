
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
        
            <dialog ref={modalDelete} className=" backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
                {children}
                <button onClick={ onDeletes}>YES</button>
                <form method="dialog">
              
                    <button className=" px-4 py-2 text-xs md:text-base rounded-md bg-stone-800 text-stone-400 hover:bg-stone-600 hover:text-stone-100 ">{button}</button>
                </form>
            </dialog>,
            document.getElementById('modal-delete')
    )
})

export default ModalDelete

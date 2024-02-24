export default function Button({children, ...props}){

    return(
        <button {...props} className="">{children}</button>
    )
}
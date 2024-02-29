import './App.css'
import Amyrobson from './Components/Amyrobson.jsx'
import Maxblagun from './Components/Maxblagun.jsx';
import Ramsesmiron from './Components/Ramsesmiron.jsx';
import Juliusomo from './Components/Juliusomo.jsx';
import Input from './Components/Inputs/Input.jsx';
import Comment from './Components/Comments/Comment.jsx';
import InputBox from './Components/Inputs/InputBox.jsx';
import CommentBox from './Components/Comments/CommentBox.jsx';
import { useState, useCallback } from 'react';

function App() {
  const [replyComment, setReplyComment] = useState({
    selectedReply: undefined,
    selectedReplys: false,
    reply: [],
    replys: [],
    deletComment: true,
    
});

  function handleADdComment(prevReply){
      setReplyComment((prevAddComment) => {
        const replyId = Math.random()
        const myReplys =  {
           id:replyId,
           comment:prevReply.comment

        }
        return{
          ...prevAddComment,
          selectedReply: undefined,
          reply:[...prevAddComment.reply,myReplys]
        }
      })
  };


  function addComments(prevReply){
    setReplyComment((prevAddComment) => {
      const replyId = Math.random()
      const myReplys =  {
         id:replyId,
         comment:prevReply.comment

      }
      return{
        ...prevAddComment,
        selectedReplys: false,
        replys:[...prevAddComment.replys,myReplys]
      }
    })
};

  function handleClickReply(){
    setReplyComment((prevComment) => {
      return{
        ...prevComment,
        selectedReply: null
      }
    })

    
  };




  const handleDeleteReply = useCallback( function handleDeleteReply (id){
    setReplyComment((prevDeleteReply) => {
      return{
        ...prevDeleteReply,
        reply: replyComment.reply.filter((reply) => reply.id !== id )
      }

    })
  }, [])


  function deleteReplys (id){
    setReplyComment((prevDeleteReply) => {
      return{
        ...prevDeleteReply,
        replys: replyComment.replys.filter((replys) => replys.id !== id )
      }

    })
  };

  function deleteComment(){
    setReplyComment((prevDeleteComment) => {
      return{
        ...prevDeleteComment,
        deletComment: false
      }
    })
  }

 //const commentReply = replyComment.reply.find(reply => reply.reply === replyComment.selectedReply )

  let comment  =  (
    <Comment
      comments = {replyComment.reply} 
      onDelete={handleDeleteReply} 
     
    />)
  if(replyComment.selectedReply === null){
    comment = <Input onClickReply = {handleADdComment} />
    
  }

    let comments; 
    if(replyComment.replys){
        comments = <CommentBox comments = {replyComment.replys} onDeletes={deleteReplys}/>
    }
  
    let deleteComments;
    if(replyComment.deletComment === true){
      deleteComments =  <Juliusomo onDeleteComment = {deleteComment} />
    }
   
  return (
    <>
      <main className='  flex justify-center items-center mt-8 mb-10' >
       <div className=' border-0 border-slate-950 w-[50%] h-[85%] p-5'>
          <Amyrobson onclick = {handleClickReply}/>
            {comment}
          <Maxblagun  /> 
          <Ramsesmiron />
          {deleteComments}
          {comments}
          <InputBox onReply={addComments}/>
       </div>
      </main>
    </>
  )
}

export default App


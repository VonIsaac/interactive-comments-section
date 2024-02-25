import './App.css'
import Amyrobson from './Components/Amyrobson.jsx'
import Maxblagun from './Components/Maxblagun.jsx';
import Ramsesmiron from './Components/Ramsesmiron.jsx';
import Juliusomo from './Components/Juliusomo.jsx';
import Input from './Components/Input.jsx';
import Comment from './Components/Comment.jsx';
import InputBox from './Components/InputBox.jsx';
import CommentBox from './Components/CommentBox.jsx';
import { useState } from 'react';

function App() {
  const [replyComment, setReplyComment] = useState({
    selectedReply: undefined,
    selectedReplys: false,
    reply: [],
    replys: []
    
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


  function handleClickReplys(){
    setReplyComment((prevComment) => {
      return{
        ...prevComment,
        selectedReplys: true
      }
    })

    
  };

  function handleDeleteReply (id){
    setReplyComment((prevDeleteReply) => {
      return{
        ...prevDeleteReply,
        reply: replyComment.reply.filter((reply) => reply.id !== id )
      }

    })
  }


  function deleteReplys (id){
    setReplyComment((prevDeleteReply) => {
      return{
        ...prevDeleteReply,
        replys: replyComment.replys.filter((replys) => replys.id !== id )
      }

    })
  }

 //const commentReply = replyComment.reply.find(reply => reply.reply === replyComment.selectedReply )

  let comment  =  <Comment comments = {replyComment.reply} onDelete={handleDeleteReply} />
  if(replyComment.selectedReply === null){
    comment = <Input onClickReply = {handleADdComment} />
    
  }

 
  let comments = <CommentBox comments = {replyComment.replys} onDeletes={deleteReplys}/>
  if(replyComment.selectedReplys === true){
    comments =   <InputBox onReply={addComments}/>
  }
   
  return (
    <>
      <main className='  flex justify-center items-center mt-8 mb-10' >
       <div className=' border-0 border-slate-950 w-[50%] h-[85%] p-5'>
          <Amyrobson onclick = {handleClickReply}/>
            {comment}
          <Maxblagun onclicks = {handleClickReplys} /> 
          <Ramsesmiron />
          <Juliusomo />
          {comments}
       </div>
      </main>
    </>
  )
}

export default App

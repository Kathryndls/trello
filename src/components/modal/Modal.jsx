import React, { useState } from "react";
import "./Modal.css"
import PostApi from "../../api/post.api";

export const Modal = ({editCardId,isVisible, onHide, createCardHandler, status, editPostData}) => {
   const [title, setTitle] = useState(editPostData?.title ?? '');
   const [description, setDescription] = useState(editPostData?.description ?? '');
   const [error, setError] = useState(false);

   const onCreateCardHandler = () => {
      if (title && description) {
         createCardHandler((prev) => {
            let oldPost = prev.find(posts => posts.id === editCardId);
            console.log(prev)
            if (oldPost) {
               oldPost = {
                  ...oldPost,
                  title,
                  description,
                  status
               }

               const updatedCard = PostApi.putPost(oldPost).then(result => result);
               console.log('newCard', updatedCard);

               return [
                   ...prev.filter(item => item.id !== editCardId),
                  oldPost
               ]
            } else {
               const newPost = {
                  id: Date.now(),
                  title,
                  description,
                  status
               };

               createCardHandler(prev => [
                  ...prev,
                  newPost
               ]);

               const updatedCard = PostApi.postPost(newPost).then(result => result);
               console.log('newCard', newPost);
            }
         })

         setTitle('');
         setDescription('');
         onHide(false);
         setError(false);
      } else {
         setError(true);
      }
   }

   return (
      <>
         {isVisible
         ? (
            <div className="overlay">
               <div className="modal__wrapper">
                  <div className="modal__header">
                     <h1>Create card</h1>
                     <button onClick={() => onHide(false)}>&times;</button>
                  </div>

                  <input
                      type="text"
                      placeholder="Title"
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                  />
                  <textarea
                      placeholder="Description"
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                  />
                  <button className="btn__create" onClick={onCreateCardHandler}>Create</button>
                  {error ? <span>Все поля должны быть заполнены!</span> : null}
               </div>
            </div>
         )
         : null}
      </>
   )
}

export default Modal;

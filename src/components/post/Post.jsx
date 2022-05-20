import React, {useState} from "react";
import Modal from "../modal/Modal";
import PostService from "../../services/postService";
import "./Post.css"

const Post = ({data, posts, setPosts, status}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editCardId, setEditCardId] = useState(null);

    const onDelete = async (id) => {
        await PostService.removePost(id, setPosts)
   }

   const onEdit = async (id) => {
        setEditCardId(id);
      setIsModalVisible(prevState => !prevState)
   }

   return (
      <div className="dashboard__column-item">
         <div className="dashboard__column_card-header">
            <h3>{data.title}</h3>
                <div className="button__wrapper">
                    <button className="btn__post" onClick={() => onEdit(data.id)}>edit</button>
                    <button className="btn__post" onClick={() => onDelete(data.id)}>delete</button>
                </div>
         </div>

         <p>{data.description}</p>

          <Modal
             editCardId={editCardId}
             isVisible={isModalVisible}
             setPosts={setPosts}
             onHide={() => setIsModalVisible(false)}
             allPosts={posts}
             createCardHandler={setPosts}
             status={status}
             editPostData={{title: data.title, description: data.description}}
          />
      </div>
   )
}

export default Post;

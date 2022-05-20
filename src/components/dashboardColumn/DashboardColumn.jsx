import React, { useState } from "react";
import Post from "../post/Post";
import Modal from "../modal/Modal";
import "./DashboardColumn.css"

const DashboardColumn = ({title, titleColor, posts, allColunms, setPosts, status}) => {
   const [isModalVisible, setIsModalVisible] = useState(false);

   return (
      <div className="dashboard__column">
         <div className="dashboard__column-header">
            <h2 className="dashboard__column-title" style={{color: titleColor}}>{title}</h2>

            <div className="dashboard__column-action">
               <button onClick={() => setIsModalVisible(prevState => !prevState)}>add</button>
            </div>
         </div>

         <div className="dashboard__column-body">
            {posts.map(post =>
               <Post posts={posts}
                     key={post.id}
                     data={post}
                     status={status}
                     setPosts={setPosts}
                     setIsModalVisible={setIsModalVisible}
               />
            )}
         </div>

         <Modal
             isVisible={isModalVisible}
             onHide={() => setIsModalVisible(false)}
             allColunms={allColunms}
             createCardHandler={setPosts}
             status={status}
         />
      </div>
   );
}

export default DashboardColumn;

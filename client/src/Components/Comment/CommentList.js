import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_comments } from "../../Redux/Action/CommentAction";


import CommentCard from "./CommentCard";
const CommentList = ({el}) => {
  console.log(el._id,"ousil")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_comments());
  }, []);
  const  comment  = useSelector((state) => state.CommentReducer.comments);
  const { articles } = useSelector((state) => state.articleReducer);
 
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      
   
      {comment.map((comments) => (
        el._id==comments.articleId._id ?
        <div key={comments._id}>
          <CommentCard comments={comments} />
        </div> :"no comments"
      ))}
    </div>
  );
};

export default CommentList;

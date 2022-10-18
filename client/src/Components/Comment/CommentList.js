import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_comments } from "../../Redux/Action/CommentAction";


import CommentCard from "./CommentCard";
const CommentList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_comments());
  }, []);
  const  comment  = useSelector((state) => state.CommentReducer.comments);
  console.log("vyify_ffy", comment);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {comment.map((el) => (
        <div key={el._id}>
          <CommentCard el={el} />
        </div>
      ))}
    </div>
  );
};

export default CommentList;

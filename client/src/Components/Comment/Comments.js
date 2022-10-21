import React, { useEffect } from "react";
import { useState } from "react";

import CommentList from "./CommentList";

const Comments = ({el}) => {
  const [showResults, setShowResults] =useState(false)
  const onClick = () => setShowResults(!showResults)


 
  return (
    <div>
   <input type="submit" value="comments" onClick={onClick} />
      { showResults ? <CommentList el={el}/> : null }
    </div>
  );
};

export default Comments;
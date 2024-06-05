import { useNavigate } from "react-router-dom";
import { postType } from "../Utils/Types";
import { useEffect } from "react";

const PostCard = ({ userId, id, title, body }: postType) => {
  const navigate = useNavigate();
const INTRO_BODY_CARD_LIMIT = 20

  useEffect(() => {
   console.log(userId,body)
  }, [])
  
  const onCardClicked = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div
      onClick={() => {
        onCardClicked();
      }}
      className="rounded-md p-8 shadow-lg p-12 text-2xl bg-white m-2"
    >
      <div className="font-semibold ">{title}</div>
      <div>{body.length>INTRO_BODY_CARD_LIMIT?`${body.substring(0,INTRO_BODY_CARD_LIMIT)}...`:body}</div>
    </div>
  );
};

export default PostCard;

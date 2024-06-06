import { useNavigate } from "react-router-dom";
import { postType } from "../Utils/Types";
import { INTRO_BODY_CARD_LIMIT } from "../Utils/Constants";

const PostCard = ({  id, title, body }: postType) => {
  const navigate = useNavigate();


  
  const onCardClicked = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div
      onClick={() => {
        onCardClicked();
      }}
      className="hover:cursor-pointer  rounded-md p-8 shadow-lg p-12 text-2xl bg-white m-2 flex flex-col justify-between items-start"
    >
            <div className="self-end"><img src="src/assets/RavenPack_Logo.jpeg" alt="Img for doc"/></div>

      <div className="font-semibold mb-2">{title}</div>
      <div>{body.length>INTRO_BODY_CARD_LIMIT?`${body.substring(0,INTRO_BODY_CARD_LIMIT)}...`:body}</div>
    </div>
  );
};

export default PostCard;

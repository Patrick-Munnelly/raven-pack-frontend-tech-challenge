import { CommentType } from "../Utils/Types";
import Comments from "./Comments";

type Props = {
    comments:CommentType[]
};

const CommentsSection = ({ comments }: Props) => {
  return (
    <div className="bg-white px-3 py-5  rounded-lg mb-20">
      <div className="mt-1 font-bold">Comments</div>
      <div>
        <Comments comments={comments} />
      </div>
    </div>
  );
};

export default CommentsSection;

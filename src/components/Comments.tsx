import { CommentType } from "../Utils/Types";
import { randomColour } from "../Utils/utils";

type Props = {
  comments: CommentType[];
};

const Comments = ({ comments }: Props) => {
  return (
    <>
      {comments.map((comment: CommentType, index:number) => {
        return (
          <div key={`comment-${index}`} className="border border-gray-200 px-3 py-2 mt-2">
            <div className="flex flex-row justify-centeer items-center">
              <span className="text-lg">
                {" "}
                <span className={`rounded-full ${randomColour()} mr-3 py-1 px-2 border border-1 border-black`}>
              {  `${comment.name.split(' ')[0][0]} ${comment.name.split(' ')[1][0]}`}
                </span>
                {/* <Avatar {...stringAvatar(comment.name)} />{" "} */}
              </span>
              {comment.name}
            </div>
            <div className="">{comment.body}</div>
          </div>
        );
      })}
    </>
  );
};

export default Comments;

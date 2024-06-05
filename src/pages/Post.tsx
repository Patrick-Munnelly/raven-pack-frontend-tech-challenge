import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getPost, getPostComments } from "../api/posts";
import CommentsSection from "../components/CommentsSection";

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();

  const postsQuery = useQuery({
    queryKey: ["post"],
    queryFn: () => getPost(id?.toString()),
  });

  const postCommentsQuery = useQuery({
    queryKey: ["postComments"],
    queryFn: () => getPostComments(id?.toString()),
  });

  if (postsQuery.isLoading) {
    return <div>Loading</div>;
  }
  if (postsQuery.isError) {
    return <div>Error</div>;
  }

  const returnToPosts = () => {
    navigate(`/`);
  };
  return (
    <div className="mx-5 h-full bg-gray-200 mb-5">
      <div className="flex flex-row">
        {" "}
        <div className="text-4xl">{postsQuery.data?.title}</div>
      </div>
      <button
        className="border-1 border border-gray-500 mx-5 px-2 rounded-md mx-2"
        aria-label={"return-to-posts-button"}
        onClick={() => {
          returnToPosts();
        }}
      >
        Return to blogs{" "}
      </button>
      <div className="bg-white p-3 rounded-lg   mb-5 mt-5">{postsQuery.data?.body}</div>
      <CommentsSection comments={postCommentsQuery.data} />
    </div>
  );
}

export default Post;

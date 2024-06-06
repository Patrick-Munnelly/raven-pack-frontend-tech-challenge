import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getPost, getPostComments } from "../api/posts";
import CommentsSection from "../components/CommentsSection";
import { scrollToTopOfPage } from "../Utils/utils";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";

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
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (postsQuery.isError) {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }

  const returnToPosts = () => {
    navigate(`/`);
  };

  return (
    <div className="mx-5 h-full  mt-5">

      <div className="flex flex-row">
        <div className="text-4xl">{postsQuery.data?.title}</div>
      </div>
      <div className={"mt-2"}>
        <button
          type="button"
          className="border-1 border border-gray-500  px-2 rounded-md bg-white hover:bg-yellow-300 "
          aria-label={"return-to-posts-button"}
          onClick={() => {
            returnToPosts();
          }}
        >
          Return to blogs
        </button>
      </div>
      <div className="bg-white p-3 rounded-lg   mb-5 mt-5">
        {postsQuery.data?.body}
      </div>
      <CommentsSection comments={postCommentsQuery.data} />
      <div>
        <button
          type="button"
          className="hover:font-semibold px-2"
          onClick={() => {
            scrollToTopOfPage();
          }}
        >
          Return to top of page
        </button>
      </div>
    </div>
  );
}

export default Post;

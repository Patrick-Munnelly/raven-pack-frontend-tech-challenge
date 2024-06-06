import PostCard from "../components/PostCard";

import { postType } from "../Utils/Types";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import PosterFilter from "../components/PosterFilter";
import { getPosts } from "../api/posts";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";

const ListOfPosts = () => {

  const postsQuery = useQuery({
    queryKey: ["listOfPosts"],
    queryFn:getPosts,
  });


  const [selectedPosters, setSelectedPosters] = useState<string[]>([]);
  const [posters, setPosters] = useState<string[]>([]);
  const [postsShown, setPostsShown] = useState<postType[]>([]);

  useEffect(() => {
   const  PostersFound: string[]=[];
   postsQuery.data?.map((post:postType)=>{
      PostersFound.includes(`${post.userId}`)?null:PostersFound.push(`${post.userId}`);
    })

    setPosters(PostersFound);
  }, [postsQuery.data]);


useEffect(() => {
  selectedPosters.length===0?
  setPostsShown(postsQuery.data?postsQuery.data:[])
  :
  setPostsShown(postsQuery.data? postsQuery.data.filter((post:postType)=>{
    return selectedPosters.includes(`${post.userId}`)
  }):[selectedPosters])

}, [selectedPosters,postsQuery.data])


  if (postsQuery.isLoading) {
    return <div><Loading/></div>;
  }
  if (postsQuery.isError) {
    return <div><ErrorPage/></div>;
  }
  return (
    <div className="mt-4 mx-5 h-full ">
      <div className="mt-5 mr-5 ml-2">
        <PosterFilter
          filterName={'Posters Filter'}
          posters={posters}
          selectedPosters={selectedPosters}
          setPosters={setSelectedPosters}
        />
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-1">
        {postsQuery.data &&
         postsShown.map((item: postType,index:number) => {
            return (
              <PostCard
              key={`blog-${index}`}
                title={item.title}
                id={item.id}
                userId={item.userId}
                body={item.body}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ListOfPosts;

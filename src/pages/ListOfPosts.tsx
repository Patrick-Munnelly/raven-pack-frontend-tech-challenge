import PostCard from "../components/PostCard";

import { postType } from "../Utils/Types";
import {  postsHarcoded } from "../Utils/Constants";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import PosterFilter from "../components/PosterFilter";
import { getPosts } from "../api/posts";

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
   postsQuery.data?.map((post)=>{
      PostersFound.includes(`${post.userId}`)?null:PostersFound.push(`${post.userId}`);
    })

    setPosters(PostersFound);
  }, [postsQuery]);


useEffect(() => {
  selectedPosters.length===0?
  setPostsShown(postsQuery.data?postsQuery.data:[])
  :
  setPostsShown(postsQuery.data? postsQuery.data.filter((post)=>{
    return selectedPosters.includes(`${post.userId}`)
  }):[])

}, [selectedPosters,postsQuery])


  if (postsQuery.isLoading) {
    return <div>Loading</div>;
  }
  if (postsQuery.isError) {
    return <div>Error</div>;
  }
  return (
    <div className=" mx-5 h-full bg-grey-500">
      <div className="mt-5 mr-5 ml-2">
        <PosterFilter
          filterName={'Posters Filter'}
          posters={posters}
          selectedPosters={selectedPosters}
          setPosters={setSelectedPosters}
        />
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1">
        {postsQuery.data &&
         postsShown.map((item: postType) => {
            return (
              <PostCard
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

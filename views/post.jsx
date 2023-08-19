const Post = ({ post, user, comments }) => (
       <Main>
         {/* <div className="absolute w-[60em] z-[-10] bottom-[-400px] left-[-200px]">
            <Settwo />
          </div>
          <div className="absolute w-[60em] z-[-10] top-[-400px] right-[-400px]">
            <Setone />
          </div> */}
        <Nav /> 
        <div className="max-sm:hidden mt-8"></div>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-4/5 lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md lg:max-w-2xl xl:p-0 ">
            <div className="h-fit p-6 space-y-4 md:space-y-6 sm:p-8">
              <h2 className="text-2xl">{post.title}</h2>
              <div className="bg-stone-100">
                <img className="max-h-[500px] m-auto " src={post.image} />
              </div>
              <div className="flex w-full justify-between">
                <div className="flex">
                  <form
                    className="text-xl text-stone-600 hover:text-lime-60
                    |"
                 action={`/post/likePost/${post.id}?_method=PUT`}
                    method="POST"
                  >
                    <button
                      className="text-2xl mt-[2px] fa fa-heart text-teal-500 hover:text-teal-200 transition duration-150 ease-in-out"
                      type="submit"
                    ></button>
                  </form>
                  <h3 className=" text-xl ml-2">
                    <span> {post.likes} </span>
                    {post.likes == 1 ? "Like" : "Likes"}
                  </h3>
             </div>
                {post.user == user.id && (
                  <form
                    action={`/post/deletePost/${post.id}?_method=DELETE`}
                    method="POST"
                    className="col-3 text-xl text-stone-50 hover:text-white"
                  >
                    <button
                      className="drop-shadow  bg-teal-400 rounded p-3 fa fa-trash"
                      type="submit"
                    ></button>
                 </form>
                )}
              </div>
            </div>
            <div className="mx-6 bg-stone-100 p-2 rounded-lg text-md">
              <p>
                Condition <span className="text-teal-600">{post.condition}</span>
             </p>
             <p>{post.caption}</p>
           </div>

          <div className="px-6 py-4 ">
             <p>
             <span className=""> {comments.length} </span>
                {comments.length == 1 ? "Comment" : "Comments"}
              </p>
              <ul>
                {comments.map((comment) => (
                  <li className="flex">
                    <p className="text-teal-700">{comment.userName}</p>
                    {/* href={`/profile/${comment.user}`} for use in link later*/}
                    <span className="pl-2">{comment.comment}</span>
                  </li>
                ))}
              </ul>
            </div>
   
            <div className="px-6 pt-3 flex flex-col">
              <form action={`/comment/createComment/${post._id}`} method="POST">
                <div className="mb-3">
                  <label for="comment" className=""></label>
                <input
                    type="text"
                    className="bg-stone-100  text-gray-900 sm:text-sm rounded-t-xl focus:outline-none block w-full p-2.5"
                    id="comment"
                    name="comment"
                    placeholder="Write a comment..."
                  />
                  <div className="flex justify-end bg-stone-100  text-gray-900 sm:text-sm rounded-b-xl block w-full p-3 ">
                    <button
                      type="submit"
                      className="text-xl fa fa-paper-plane mr-2 text-gray-500 hover:text-teal-400 transition duration-175 ease-in-out"
                    ></button>
               </div>
             </div>
           </form>
            </div>

           <div className="px-6 pb-4 pt-6">
           <a
             className="btn btn-primary text-stone-500 hover:text-teal-400 transition duration-150 ease-in-out"
             href="/feed"
             >
             <span className="fa fa-arrow-left pr-1 "></span>
               Return to Feed
             </a>
           </div>
         </div>
     </div>
       <div className="mb-12"></div>
     </Main>
   );
   export default Post;
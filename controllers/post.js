const Post = require('../models/Post') // TODO: adding post on the models dir
const Comment = require('../models/Comments') //TODO: adding comments on the models dir 

module.exports = {
    getProfile: async (req,res)=>{
        console.log(req.user)
        try{
            const posts = await Post.find({userId:req.user.id})
            //const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            res.render('profile', {posts: posts, user: req.user})
        }catch(err){
            console.log(err)
        }
    },

   getFeed: async (req, res) => {
    try{
        const post = await Post.find().sort({ createdAt: "desc" }).lean();
        res.render("feed", {posts: post});
    } catch (err){
    console.log(err);
    }
   },

    getPost: async (req, res) => {
        try{
            const post = await Post.findById(req.params.id);
            const comments = await Comment.find({ post: req.params.id}).sort({
        createdAt: "desc",
    });
     res.render("post", {
        post: post,
        user: req.user,
        comments: comments,
     });
        } catch (err){
            console.log(err);
        }
    },
    
    getCreate: async (req, res) => {
        try{
            res.render("createpost", {
                title: "Create Post",
                user: req.user,
            });
        }catch(err){
            console.log(err)
        } 
    },
    
    likePost: async(req, res) =>{
        try{
            await Post.findOneAndUpdate(
            { _id: req.params.id},
            {
                $inc: {likes: 1},
            }
            );
            console.log("Likes + 1")
            res.redirect(`/post/${req.params.id}`);
        } catch (err){
            console.log(err)
        }
    },

    deletePost: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Post')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
};    
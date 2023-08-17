const Comment = require ("../models/Comments")//adding comments on models folder laterrrrr

module.exports = {
    createComment: async (req, res) => {
        try{
            await Comment.create({
                Comment: req.body.comment,
                likes: 0,
                post: req.params.id,
                user: req.user.id,
                userName: req.user.userName,
            });
            console.log("A comment has been added!");
            res.redierct(`/post/${req.params.id}`);
        }catch (err){
            console.log(err)
        }
    },
};
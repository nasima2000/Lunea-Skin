

   const adminMiddleware =(req,res,next)=> {

    if (req.user &&req.user.role === "admin")  {
        return next (); 
    }
    return res.status (403).json ( {
        message:"Access deenied . Admin only "
    }) } ;

   module.exports =adminMiddleware ;
const log = (req,res,next)=>{
    console.log('Request ',req.url, new Date());
    next();
};
module.exports = log;



// const asyncHandler =  () => {}
// const asyncHandler = (func) => {}
// const asyncHandler = (func) => () => {}


const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).
        catch((err) => next(err))
    }
}
    // So this is a Wrapper Function which will be used in every Other File to Handle Request - As a Middleware

// const asyncHandler = (func) => async (req,res,next) => {
//     try{
//         await func(req,res,next)
//     }
//     catch(error){
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }

export {asyncHandler}



export default async function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  const {method} = req
  if(method==='POST'){
    try{
      const datos = await req.body
      
      res.status(200).json({ status:'success'})
    }catch(err){
        console.log(err)
        console.log('ocurrio un error')
    }
  }
}

// export const config = {
//   api: {
//     bodyParser: false, // Disallow body parsing, consume as stream
//   },
// };

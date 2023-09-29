const Message=require('../model/message');

const find_All = async (req, res) => {
    try {
  
      // Use the select method to specify the fields to retrieve
      let messages = await Message.find({}, {_id:0, createdAt:0, updatedAt:0, __v:0}).lean();
  
      return res.status(200).json({ msg: "success", data: messages });
    } catch (error) {
      console.log({ error });
      return res.status(500).json({ msg: "failed" });
    }
  };
  

const create= async(req, res)=>{
    try {
        console.log("ghjkl", req.body);
        let message = await Message.create(req.body);
        console.log({message});
        return res.status(200).json({mesg:"success", data:message});
    } catch (error) {
        console.log({error});
        return res.status(500).json({msg:"failed"});
    }
}

module.exports={find_All, create};
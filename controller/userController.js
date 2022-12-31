
const NewUser = require("../model/userModel")

//const User = require("../models/userModel");

exports.home = (req,res)=>{
    res.send("this is new comb hello")
};

exports.createUser = async (req,res) => {
    try {
        const { title, tasks }  = req.body;

        if(!title || !tasks){
            throw new Error("Enter both title and tasks");
        }
        const newUser = await NewUser.create({ title, tasks });
        res.status(201).json({
            success:true,
            message: "User Created Successfully",
            newUser,
        });

    } catch (error) {
        console.log(error);
    }

}


exports.getUsers = async (req, res) =>{
	try {
		const newusers= await NewUser.find();
		res.status(200).json({
			success:true,
			newusers,
		})

	} catch (error) {
		console.log(error)
		res.status(400).json({
		success:false,
		message:error.message
	})

	}
}

exports.editUser = async (req, res) => {
	try {
	  const newuser = await NewUser.findByIdAndUpdate(req.params.id, req.body);
	  res.status(200).json({
		success: true,
		message: "User updated Successfully",
		
	  });
	} catch (error) {
	  console.log(error);
	  res.status(401).json({
		success: false,
		message: error.message,
	  });
	}
  };

  exports.deleteUser = async(req,res) =>{
	try {
		const newId=req.params.id;
		const newuser = await NewUser.findByIdAndDelete(newId);
		res.status(200).json({
			success:true,
			message:"User deleted successfully",
		})
	} catch (error) {
		console.log(error);
		res.status(400).json({
			success:false,
			message:error.message
		})
	}
  }

  exports.addnewtask = async(req,res)=>{
	try {
		//const newId=req.params.id;
		const { title, tasks} = req.body
		await NewUser.findOneAndUpdate({
			title:title,
		},
		{
			$addToSet: {
				tasks: tasks,
			}
		}
	)
	res.status(200).json({
		success:true,
		message:"New Task added",
		
	})
	} catch (error) {
		res.status(400).json({
			success:false,
			message:error.message
		})
	}
	
  }
  exports.removetask = async(req,res)=>{
	try {
		//const newId=req.params.id;
		const { title, tasks} = req.body
		await NewUser.findOneAndUpdate({
			title:title,
		},
		{
			$pull: {
				tasks: tasks,
			}
		}
	)
	res.status(200).json({
		success:true,
		message:"Task is removed",
		
	})
	} catch (error) {
		res.status(400).json({
			success:false,
			message:error.message
		})
	}
	
  }

  exports.searchtask = async (req,res)=>{
	//const {title} = req.body
	try {
		const newuser = await NewUser.findById(req.params.id)
		if(!newuser){
			res.status(401).json({
				success:failure,
				message:"Title is already present"
			})
		}
		res.status(200).json({
			success:true,
			message:"Todo Found",
			newuser
		})
	} catch (error) {
		res.status(400).json({
			success:false,
			message: "Task not found"
		})
	}
  }
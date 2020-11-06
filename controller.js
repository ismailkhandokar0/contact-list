
const Contact = require('./Contact')


exports.getAllContacts = (req,res) =>{
    Contact.find()
        .then(contacts =>{
            res.render('index',{contacts,title:'Main Page',error:{}})
        })
        .catch(err =>{
            console.log(err)
            res.json({
                message:'Error Occourred all'
            })
        })
}

exports.getContactById =(req,res) =>{

}

exports.createContact = (req,res) =>{
    // console.log(req.body)
    let {name,email,phone,id} = req.body
    let createContact = new Contact({
        name,
        phone,
        email,
        id
    })

    // console.log(req.body)
    // return

    let error = {}

    if(!name){
        error.name = 'Provide your Name'
    }

    if(!phone){
        error.phone = 'Provide your Phone Number'
    }

    if(!email){
        error.email = 'Provide your Email address'
    }

    let isError = Object.keys(error).length >0

    if(id){
        Contact.findOneAndUpdate(
            {_id: id},
            {$set:{
                name,
                phone,
                email
            }}
        )
        // console.log(req.body)
        .then(() =>{
            Contact.find()
                .then(contacts =>{
                    res.render('index',{contacts,title:'one',error:{}})
                })
                .catch(err =>{
                    console.log(err)
                })
        })
        .catch(err =>{
            console.log(err)
            res.json({
                message:'Error Generate form create update'
            })
        })
    }else{
        createContact.save()
        .then(() =>{
            Contact.find()
            .then(contacts =>{
                res.render('index',{contacts,title:'HOme Page',error:{}})
            })
        })
        .catch(err =>{
            console.log(err)
            if(isError){
                Contact.find()
                .then(contacts =>{
                    res.render('index',{contacts,title:'About Page',error})
                })
                .catch(errr =>{
                    console.log(errr)
                    res.json({
                        message:'Error Occured isError'
                    })
                })
            }
        })
    }
}

exports.updateContact = (req,res) =>{

}

exports.deleteContact = (req,res) =>{
    let {id} = req.params
    Contact.findOneAndDelete({_id:id})
        .then(() =>{
            Contact.find()
            .then(contacts =>{
                res.render('index',{contacts,title:'Render Page',error:{}})
            })
        })
        .catch(err=>{
            console.log(err)
            res.json({
                message:'Error Occoured delet'
            })
        })
}













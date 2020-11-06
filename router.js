
const router = require('express').Router()

const{
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
} = require('./controller')

router.get('/',getAllContacts)
router.get('/:id',getContactById)
router.get('/delete/:id',deleteContact)
router.post('/',createContact)
router.put('/:id',updateContact)
// router.delete('/:id',deleteContact)



module.exports = router
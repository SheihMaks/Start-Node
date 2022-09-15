// const path=require('path')
// const contactsPath1=path.join(__dirname,"./contacts")
const contacts=require("./contacts")
// console.log(contactsPath1)

// const fs=require("fs/promises")
// const {listContacts}=require("./contacts")
const invoke=async()=>{
const allContacts=await contacts.listContacts()
console.log(allContacts)
}

invoke()
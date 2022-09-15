const path=require('path')
const contacts=path.join(__dirname,"contacts.js")
console.log(contacts)

// const fs=require("fs/promises")
// const {listContacts}=require("./contacts")
const invoke=async()=>{
const allContacts=await contacts.listContacts()
console.log(allContacts)
}

invoke()
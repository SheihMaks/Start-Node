// const path=require('path')
// const contacts=path.join(__dirname,"contacts.js")

const contacts=require("./contacts")
// console.log(contacts)
// const fs=require("fs/promises")
// const {listContacts}=require("./contacts")
const invokeAction=async({action,contactId})=>{
    switch(action) {
        case "listContacts":
const allContacts=await contacts.listContacts()
console.log(allContacts)
break
case "getContactById":
    const contact=await contacts.getContactById(contactId)
    console.log(contact)
    break
case "removeContact":
    const newContacts=await contacts.removeContact(contactId)
    console.log(newContacts)
    return newContacts
    break
default:console.log("Uknown action")
}
}

// invokeAction({action:"listContacts"})
// invokeAction({action:"removeContact",contactId:"5"})
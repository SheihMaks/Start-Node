const {program}=require("commander")
const contacts=require("./contacts")

const invokeAction=async({action,id})=>{
    switch(action) {
        case "getContacts":
const allContacts=await contacts.listContacts()
console.log(allContacts)
break
case "getContactById":
    const contact=await contacts.getContactById(id)
    console.log(contact)
    break
case "removeContact":
    const newContacts=await contacts.removeContact(id)
    console.log(newContacts)
    break
default:console.log("Uknown action")
}
}

program
.option("-a, --action <type>")
.option("-i,--id <type>")

program.parse(process.argv)

const options=program.opts()
console.log(options)
invokeAction(options)

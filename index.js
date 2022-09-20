const {program}=require("commander")
const contacts=require("./contacts")

const invokeAction=async({action,id,name,email,phone})=>{
    switch(action) {
        case "list":
const allContacts=await contacts.listContacts()
console.log(allContacts)
break
case "get":
    const contact=await contacts.getContactById(id)
    console.log(contact)
    break
    case "add":
        const updatedContacts=await contacts.addContact({name,email,phone})
        console.log(updatedContacts)
        break
case "remove":
    const newContacts=await contacts.removeContact(id)
    console.log(newContacts)
    break
default:console.warn("\x1B[31m Unknown action type!");
}
}

program
.option("-a, --action <type>")
.option("-i,--id <type>")
.option("-n,--name <type>")
.option("-e, email <type>")
.option("-p,--phone <type>")

program.parse(process.argv)

const options=program.opts()
// console.log(options)
invokeAction(options)

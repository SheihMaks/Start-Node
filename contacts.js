const fs=require("fs/promises")
const path=require("path")
const {program}=require("commander")
const contactsPath=path.join(__dirname,"db/contacts.json")
program
.option('--listContacts <type>')


// console.log(contactsPath)

const listContacts=async()=>{
    const data=await fs.readFile(contactsPath, "utf-8");
return JSON.parse(data)
}

const getContactById = async(contactId)=>{
    const data=await listContacts()
    const result=data.find(item=> item.id===contactId)
    return result || null
}

const removeContact=async(contactId)=>{
    const data=await listContacts()
    // console.log(data)
    const index=await data.findIndex(item=>item.id === contactId)
    if(index===-1){
        return null
    }
    const [result]=data.splice(index,1)
    await fs.writeFile(contactsPath,JSON.stringify(data,null,2))
    return result
}

module.exports={
    listContacts,
    getContactById,
    removeContact,
}


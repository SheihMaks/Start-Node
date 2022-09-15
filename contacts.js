const fs=require(fs/promises)
const path=require('path')
const contactsPath=path.join(__dirname,"./db/contacts.json")

const listContacts=async()=>{
    console.log(contactsPath)
const data=await fs.readFile(contactsPath, "utf8")
return JSON.parse(data)
}

module.exports={
    listContacts
}


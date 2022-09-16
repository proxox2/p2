import React ,{ useState }  from 'react'
 import TextField from '@mui/material/TextField';
 import Button from '@mui/material/Button';
import { toast } from 'react-toastify'
 
 export default function Sidebar(){
    //create state
    const [FullName,setFullName ]=useState("") 
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [query,setQuery]=useState("")

   const [errors,setErrors] =useState({
    FullName:"",
    email:"",
    phone:"",
    query:""

   })
    const handleSubmit=(e)=>{
        //  alert("do you want to submit")
     e.preventDefault(); 
     let validate=false
     let errs={...errors}

   if(FullName.trim() === ""){
   errs.FullName="full name is required." 
   validate=true 
}
    if(email.trim() === ""){
        errs.email="Email Address is required." 
    validate=true     
    }
         if(phone.trim() === ""){ 
            errs.phone="Phone number is required" 
        validate=true     
        }
             if(query.trim() === ""){
                errs.query="query field is required.." 
            validate=true     
            }
            setErrors(errs)

                 if(validate){
                    toast("plz fill all the required fields")
                return
                }
    
    //call api
    setTimeout(()=>{
        toast("Thanks for contactng us ")
        setFullName("")
        setEmail("")
        setPhone("")
        setQuery("")
        setErrors({
            FullName:"",
            email:"",
            phone:"",
         query:"",
        })
    },2000)
}
    return(
        <aside>
        <h2>Contact us</h2>
                  
        <form onSubmit={handleSubmit}>
<div class="mb-3">
<TextField className='w-100' id='FullName' label='full name' variant='outlined' onChange={(e)=>{
    setFullName(e.target.value)
}}  value={FullName} error={errors.FullName? true : false } 
helperText ={errors.FullName? errors.FullName:""}/>

</div>

<div class="mb-3">
<TextField className='w-100' id='Email' label='Email Address' variant='outlined' onChange={(e)=>{
    setEmail(e.target.value); 
}} value={email}  error={errors.email? true : false } 
helperText ={errors.email? errors.email:""} /></div>
<div class="mb-3">
<TextField className='w-100' id='phone' label='Phone' variant='outlined' onChange={(e)=>{
    setPhone(e.target.value); 
}} value={phone}    error={errors.phone? true : false } 
helperText ={errors.phone? errors.phone:""}/>
</div>
<div class="mb-3"><TextField rows={3} multiline className='w-100' id='query' label='Your query' variant='outlined' onChange={(e)=>{
    setQuery(e.target.value); 
}} value={query} error={errors.query? true : false } 
helperText ={errors.query? errors.query:""}/>
</div>

<Button type="submit" variant='outlined'>Submit</Button>
</form>

</aside>    )

}
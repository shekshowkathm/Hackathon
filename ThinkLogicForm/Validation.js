import React from 'react'

function FormValidation(){
  const [name, setName] = useState("");
    const[error,setError] = useState("");

    const[sex, setSex]= useState("");
    const[sexError, setSexError]= useState("");

    const[location, setLocation]= useState("");
    const[locationError, setLocationError]= useState("");

    const[education, setEducation]= useState("");
    const[educationError, setEducationError]= useState("");

    const[resume, setResume]= useState("");
    const[resumeError, setResumeError]= useState("");

    const[marksheet, setMarksheet]= useState("");
    const[marksheetError, setMarksheetError]= useState("");

    const[city, setCity]= useState("");
    const[cityError, setCityError]= useState("");

    const[password, setPassword]= useState("");
    const[passwordError, setPasswordError]= useState("");
   
    const[number, setNumber]= useState("");
    const[numError, setNumError]= useState("");

    const[email, setMail]= useState("");
    const[mailError, setMailError]= useState("");



    const handleSubmit = (event) => {
      event.preventDefault();

      if(name==""&&"^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$"){
        setError("Invalid Username");  
      }else{ 
        setError("");
      }

    if(number==" " && /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/ ){
          setNumError("Invalid Password");
      }else{
          setNumError("");
      }

      if(email==""&& /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/){
        setMailError("Invalid Email");  
      }else{ 
        setMailError("");
      }

      if(sex==" "){
        setSexError("Field is empty");  
      }else{ 
        setSexError("");
      }  

      if(location==" "){
        setLocationError("Location field is empty");  
      }else{ 
        setLocationError("");
      }  

      if(education==" "){
        setEducationError("Education field is empty");  
      }else{ 
        setEducationError("");
      }  

      if(resume==" "){
        setResumeError("Resume field is empty");  
      }else{ 
        setResumeError("");
      }  

      if(marksheet==" "){
        setMarksheetError("Marksheet field is empty");  
      }else{ 
        setMarksheetError("");
      }  

      if(city==" "){
        setCityError("City field is empty");  
      }else{ 
        setCityError("");
      }  

      if(password==" " && "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"){
        setPasswordError("Password is empty");  
      }else{ 
        setPasswordError("");
      }  
  }
}

export default FormValidation

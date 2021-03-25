import axois from 'axios';

/*export const login = async (email, password) => {
    
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({ email, password });

    try {
         await axois.post("https://localhost:5001/api/ClientRegistrations", body, config)
         .then(res => {
            console.log(" tra working "+res.status)
             return res.status
            });
            alert(" login succes");
        
         
         
         
    } catch (error) {
        alert(" Check your Email or Password");
        console.log("catworking ");
        
    }
    

};
*/

export const ClientRegistration = async (ClientNIC, FirstName, LastName, Address, UserName,Email,MobileNo,Password,  ConfirmPassword) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({ClientNIC, FirstName, LastName, Address, UserName,Email,MobileNo,Password,  ConfirmPassword});

    if (Password!== ConfirmPassword){
        alert("Password didn't Match Try again...")
    }

  else {


        try {
            await axois.post("https://localhost:5001/api/Clients/Register", body, config).then((res)=>{
                
                console.log(res);
                if(res.status===201)
                {
                    alert("Your Have Successfully Registered ");
                    console.log("Client Registration is Successful")
                }
                else
                {
                    alert("This Email is found in the database. Please enter different Email or use Sign in instead ");
                   // alert("Please Check Your Information again ");
                   console.log("Duplicate Email was found"); 
                   console.log("Client Registration is Unsuccessful");
                    
                    
                }
            
            }).catch((err)=>{
                alert("Unable to Connect to Database Server");
                console.log(err);
                console.error(err);
                console.log("There is an error in Client Registration ")
            })
           // alert("Your Have Successfully Registered ");
            //console.log("Client Registration is Successful")
                   
        } catch (error) {
            alert("Unable to Connect to Database Server");
            console.log("Client Registration is Unsuccessful");
            console.log(error);
            
        }




    }

};

export const VendorRegistration = async (CompanyName, CompanyCategory, TelephoneNo, UserName,Email, Password,  ConfirmPassword) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({CompanyName, CompanyCategory, TelephoneNo, UserName,Email, Password,  ConfirmPassword});

    if (Password!== ConfirmPassword){
        alert("Password didn't Matched Try again..")
    }

  else {


        try {
            await axois.post("https://localhost:5001/api/VendorRegistrations", body, config);
            alert("Your Have Successfully Registered ");
            
            console.log("Vendor Registration is Successful")
    
        } catch (error) {
            alert("Please Check Your Information again ");
            console.log("Vendor Registration is Unsuccessful");
            console.log(error);
            
        }




    }
};


export const CardDetails = async (CardNo,CardholderName,ExpDate,CVV) => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({CardNo,CardholderName,ExpDate,CVV });
    if (CardNo === 'null' || CardholderName === 'null' || ExpDate === 'null' || CVV === 'null'  ){
        alert("Please fill Your Credit or Debit Card Information")
    }
    
    else {
        try {
            await axois.post("https://localhost:5001/api/Payments", body, config);
            alert("Card is being Verified ");
            
            console.log("Card Data has Successfully Recorded")
    
        } catch (error) {
            alert("Please Check Your Information again ");
            console.log("Card Details are Incorrect");
            console.log(error);
            
        }


    }
};

export const ClientLogins = async (UserName, Password) => {
    
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({ UserName, Password });

    try {
         await axois.post("https://localhost:5001/api/ClientLogins", body, config)
         .then(res => {
            console.log(" loging is  working "+res.status)
             return res.status
            });
            alert(" Login Success");
        
         
         
         
    } catch (error) {
        alert(" Check your Username or Password");
        console.log("catworking ");
        console.log(error)
        
    }
    

};



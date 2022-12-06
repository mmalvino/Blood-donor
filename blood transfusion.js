const GiveBlood = (donor,recipient) => {
    if (donor === "A-"){
        if (recipient === "A+" || recipient === "A-" || recipient === "AB-" || recipient === "AB+"){
            console.log("Blood Accepted");
        } 
        else{
            console.log("Blood Rejected");
        }
    } else if (donor === "A+"){
        if (recipient === "A+" || recipient === "AB+"){
            console.log("Blood Accepted");
        } 
        else{
            console.log("Blood Rejected");
        }
    }else if (donor === "B-"){
        if (recipient === "B+" || recipient === "B-" || recipient === "AB-" || recipient === "AB+"){
            console.log("Blood Accepted");
        } 
        else{
            console.log("Blood Rejected");
        }
    } else if (donor === "B+"){
        if (recipient === "B+" || recipient === "AB+"){
            console.log("Blood Accepted");
        } 
        else{
            console.log("Blood Rejected");
        }
    } else if (donor === "AB-"){
        if (recipient === "AB-" || recipient === "AB+"){
            console.log("Blood Accepted");
        } 
        else{
            console.log("Blood Rejected");
        }
    } else if (donor === "AB+"){
        if (recipient === "AB+"){
            console.log("Blood Accepted");
        } 
        else{
            console.log("Blood Rejected");
        }
    } else if (donor === "O-"){
        console.log("Blood Accepted");;
    } else if (donor === "O+"){
        if (recipient === "A+" || recipient === "B+" || recipient === "AB+" || recipient === "O+"){
            console.log("Blood Accepted");
        } 
        else{
            console.log("Blood Rejected");
        }
    } else{
        console.log("Invalid Blood Type.");
    }
}

//give examples
GiveBlood("O+","A+");
GiveBlood("A-","B-");
GiveBlood("A-", "AB+");
GiveBlood("A+", "A-");
GiveBlood("O+","AB+");

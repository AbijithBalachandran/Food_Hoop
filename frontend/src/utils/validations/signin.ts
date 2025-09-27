

export const validEmail = (email: string)=>{
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
};

export const validName = (name:string) =>{
    const regex = /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return regex.test(name)
};

export const validMobile = (mobile:string)=>{
    const regex = /^[6-9]\d{9}$/;
    return regex.test(mobile)

};

export const validPassword = (password:string)=>{
    const regex =  /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password)
};



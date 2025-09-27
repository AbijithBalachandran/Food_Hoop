
export const generate4digitOtp =():string=>{
    const randonNumber = Math.floor(1000+Math.random()*9000);
    const generateOtp  = randonNumber.toString();
    return generateOtp;
}
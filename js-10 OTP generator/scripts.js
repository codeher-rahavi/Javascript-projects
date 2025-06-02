let genrateOTP = () => {
    //define the length of the OTP
    const otpLength = 6;

    //generate random numeric otp usinf math.radom

    const otp = Math.floor(Math.random() * Math.pow(10,otpLength));

    //display the generated otp
    document.getElementById("otpDisplay").innerText = otp;

}

document.getElementById("generateBtn").addEventListener("click",genrateOTP);
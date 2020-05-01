export function main(event, context, callback) {
    let verify_email = `Please use the following Link to verify your account: https://25nlu.app.link/FxF2POZPJ4?email=${event.request.userAttributes.email}&verification_code=${event.request.codeParameter}`;

    let forgot_email = `Please use the following Link to reset your password: ${event.request.userAttributes.email}&verification_code=${event.request.codeParameter}`;

    if(event.triggerSource === "CustomMessage_SignUp") {
        event.response.emailSubject = "Your verification code";
        event.response.emailMessage = verify_email;
     } else if (event.triggerSource === "CustomMessage_ForgotPassword") {
        event.response.emailSubject = "Reset your password";
        event.response.emailMessage = forgot_email;
     }
    callback(null, event);
}
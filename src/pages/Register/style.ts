export const style = {
    errorMessage: "text-red-600 self-start ml-12",
    input: "w-80 h-10 p-6 mb-2 border-2 rounded-xl outline-none  border-main-blue"
}

export const regex = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    username: /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    phoneNumber: /(84|0[3|5|7|8|9])+([0-9]{8})\b/
}
const isValid = (notValid:string, checkStr: string)=>{
    for (let x = 0; x <= checkStr.length; x++) {
        if (notValid.indexOf(checkStr[x]) !== -1) {
            return false
        }
    }
    return true;
}

export const isValidInput = (text:string) => {
    const notValid = '\'"`*;\\!@#$%^& ';
    return isValid(notValid,text)
}

export const isValidPasswordInput = (text:string) => {
    if(!text.length) return false
    const notValid = '\'"/`\\ ';
    return isValid(notValid,text)
}
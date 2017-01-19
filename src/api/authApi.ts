export const LogIn = (login: string, password: string) => {
    return new Promise<string>((resolve, reject) => {
        let result: any = auth.find(a => {
            return login === a.login && password === a.password;
        }) 

        resolve(result ? result.userId : null);
    })
}

export const LogOut = (userId: string) => {
    return new Promise<boolean>((resolve, reject) => {
        resolve(true);
    })
}

let auth = [
    {
        "userId": "2",
        "login": "bazza",
        "password": "11111"
    },
    {
        "userId": "1",
        "login": "hendrix",
        "password": "11111"
    }
]
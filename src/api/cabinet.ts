export const getBasesInfo = (userId) => {
    return new Promise((resolve, reject)=>{
        resolve([
            {
                id: 1,
                name: "Hendrix",
                email: "hendrix@gmail.com",
                phone: "89157867823"
            },
            {
                id: 2,
                name: "Bazza.ru",
                email: "bazza.ru@gmail.com",
                phone: "89167869715"
            }
        ])
    });
};

export const getBaseRooms = (baseId: string) => {
    return new Promise((resolve, reject)=>{
        resolve([
            {
                id: 1,
                name: "Hendrix",
                email: "hendrix@gmail.com",
                phone: "89157867823"
            },
            {
                id: 2,
                name: "Bazza.ru",
                email: "bazza.ru@gmail.com",
                phone: "89167869715"
            }
        ])
    });
}
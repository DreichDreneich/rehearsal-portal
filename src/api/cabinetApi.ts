import {IBaseUser} from 'models';
import {IRoom} from 'models';

export const getBaseUserInfo = (userId) => {
    return new Promise<IBaseUser>((resolve, reject) => {
        let result: IBaseUser = {
            id: "1",
            name: "Hendrix",
            phones: ["89379876542", "80876753723"],
            bases: [
                {
                    id: "1",
                    name: "Hendrix 1905",
                    email: "hendrix1905@gmail.com",
                    phones: ["89157867823"]
                },
                {
                    id: "2",
                    name: "Hendrix Savok",
                    email: "hendrix_savok@gmail.com",
                    phones: ["89167869715"]
                }
            ]
        }

        resolve(result);
    })
}

export const getBaseRooms = (baseId: string) => {
    return new Promise<IRoom[]>((resolve, reject) => {
        resolve([
            {
                id: "1",
                name: "Curaga",
                area: 12,
                baseId: "1"
            },
            {
                id: "2",
                name: "Kompot",
                area: 12,
                baseId: "1"
            }
        ])
    });
}
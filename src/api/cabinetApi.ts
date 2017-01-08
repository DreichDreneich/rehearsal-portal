import {IBaseUser, IRoom, IBase, IRoomsRibbonFilter} from 'models';
import {includes, take, isEmpty} from 'lodash';

export const getBaseUserInfo = (userId: string) => {
    debugger;
    return new Promise<IBaseUser>((resolve, reject) => {
        let result: IBaseUser = baseUsers.find(bu => bu.id == userId);
        resolve(result);
    })
}

export const getBasesByBaseUserId = (userId: string) => {
    return new Promise<IBase[]>((resolve, reject) => {
        let result: IBase[] = bases.filter(b => b.baseUserId == userId);
        resolve(result);
    })
}

export const getBaseById = (baseId: string) => {
    return new Promise<IBase>((resolve, reject) => {
        let result: IBase = bases.find(b => b.id == baseId);
        resolve(result);
    })
}

export const getRoomsByBaseId = (baseId: string) => {
    return new Promise<IRoom[]>((resolve, reject) => {
        let result: IRoom[] = rooms.filter(r =>r.baseId == baseId);
        resolve(result);
    })
}

export const getRoomById = (roomId: string) => {
    return new Promise<IRoom>((resolve, reject) => {
        let result: IRoom = rooms.find(r => r.id == roomId);
        resolve(result);
    })
}

export const getRoomsByFilter = (filter: IRoomsRibbonFilter) => {
    return new Promise<[IRoom[], IBase[]]>((resolve, reject) => {
        let filteredRooms: IRoom[] = null;

        if(isEmpty(filter)) {
            filteredRooms = take(rooms, 50);
        } else {
            filteredRooms = rooms.filter(r => {
                return includes(r.name, filter.name)
            });
        }

        let filteredBases: IBase[] = bases.filter(b => {
            let includeName = filter && includes(b.name, filter.baseName);
            let inCity = filter && includes(b.city, filter.city);
            let haveFilteredRooms = filteredRooms && filteredRooms.map(r => r.baseId).find(bId => bId === b.id);

            

            let result = includeName || inCity || haveFilteredRooms;
            if(result && !haveFilteredRooms) {
                filteredRooms = filteredRooms.concat(rooms.filter(r =>r.baseId == b.id));
            }

            return result;
        })

        resolve([filteredRooms, filteredBases]);
    })
}

let baseUsers : IBaseUser[] = [
    {
        id: "1",
        name: "Hendrix",
        phones: ["89379876542", "80876753723"],
        pic: "./static/basePic.jpg",
    },
    {
        id: "2",
        name: "Bazza.ru",
        phones: ["89379897154"],
        pic: "./static/basePic.jpg",
    }     
]

let bases: IBase[] = [
    {
        id: "1",
        baseUserId: "1",
        name: "Hendrix 1905",
        email: "hendrix1905@gmail.com",
        phones: ["89157867823"],
        pic: "./static/basePic.jpg"
    },
    {
        id: "2",
        baseUserId: "1",
        name: "Hendrix Savok",
        email: "hendrix_savok@gmail.com",
        phones: ["89167869715"],
        pic: "./static/basePic.jpg"
    },
    {
        id: "3",
        baseUserId: "2",
        name: "Bazza.ru Savok",
        email: "hendrix_savok@gmail.com",
        phones: ["89167827514"],
        pic: "./static/basePic.jpg"
    }
]

let rooms: IRoom[] = [
    {
        id: "1",
        name: "Curaga",
        area: 12,
        baseId: "3",
        coverPic: "./static/basePic.jpg",
        pics: [
            "./static/basePic.jpg",
            "./static/basePic.jpg",
            "./static/basePic.jpg",
            "./static/basePic.jpg",
            "./static/basePic.jpg",
            "./static/basePic.jpg"
        ]
    },
    {
        id: "2",
        name: "Kompot",
        area: 22,
        baseId: "3",
        coverPic: "./static/basePic.jpg",
        pics: [
            "./static/basePic.jpg",
            "./static/basePic.jpg"
        ]
    },
    {
        id: "3",
        name: "Bolshaya",
        area: 25,
        baseId: "1",
        coverPic: "./static/basePic.jpg",
        pics: [
            "./static/basePic.jpg",
            "./static/basePic.jpg",
            "./static/basePic.jpg",
            "./static/basePic.jpg",
            "./static/basePic.jpg",
            "./static/basePic.jpg"
        ]
    },
    {
        id: "4",
        name: "Malaya",
        area: 25,
        baseId: "1",
        pics: [
            "./static/basePic.jpg",
            "./static/basePic.jpg",
            "./static/basePic.jpg",
            "./static/basePic.jpg",
            "./static/basePic.jpg"
        ]
    },
    {
        id: "5",
        name: "Medium",
        area: 25,
        baseId: "1",
        coverPic: "./static/basePic.jpg"
    },
    {
        id: "6",
        name: "Kefir",
        area: 25,
        baseId: "2",
        coverPic: "./static/basePic.jpg",
        pics: [
            "./static/basePic.jpg",
            "./static/basePic.jpg",
            "./static/basePic.jpg",
            "./static/basePic.jpg",
            "./static/basePic.jpg",
            "./static/basePic.jpg"
        ]
    },
    {
        id: "7",
        name: "Yellow",
        area: 25,
        baseId: "2",
        pics: [
            "./static/basePic.jpg",
            "./static/basePic.jpg",
            "./static/basePic.jpg",
            "./static/basePic.jpg",

        ]
    }
]
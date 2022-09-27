"use strict"

class UserStorage{
   static #users = {
        id: ["hyuni2020", "장재현", "황윤승"],
        password: ["1234", "1234", "123456"],
        name: ["장차장", "장차장", "황이사"],
        rank: ["차장", "차장", "이사"],
    };

    static getUsers(...fields) {
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        
        return newUsers
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.rank.push(userInfo.rank);
        users.password.push(userInfo.password);
        return { success: true};
    }
}

module.exports = UserStorage;

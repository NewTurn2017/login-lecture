"use strict"

class UserStorage{
   static #users = {
        id: ["hyuni2020", "장재현", "황윤승"],
        password: ["1234", "1234", "123456"],
        name: ["장차장", "장차장", "황이사"],
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
}

module.exports = UserStorage;

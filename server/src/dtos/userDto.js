module.exports = class UserDto {
    login;
    email;
    id;
    isActivated;

    constructor(model) {
        this.login = model.login;
        this.email = model.email;
        this.id = model.id;
        this.isActivated = model.isActivated;
    }
}
const {User } = require("../../src/app/models")
describe('Autentication', () =>{
    it('should sum two numbers', async () =>{
        const user = await User.create({
            name : "Felipe dosa Goiabeira",
            email: "deoaf@goa.d",
            password_hash: "123123"
        })
    console.log(user);

    expect(user.email).toBe("deoaf@goa.d");

    });
});
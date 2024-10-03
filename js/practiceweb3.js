function createUser(username, password){
    let user={
        username: username,
        password: password,
    }
    return user;

}
console.log(createUser("Alice","password123"));
var peter = { id: 'abc-123', name: 'Peter Pan', email: 'peter@pan.com', username: 'peterpan', password: '123123123' };
var wendy = { id: 'def-456', name: 'Wendy Darling', email: 'wendy@darling.com', username: 'wendydarling', password: '123123123' };
var pepito = { id: 'ghi-789', name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123123123' };
var campa = { id: 'jkl-012', name: 'Campa Nilla', email: 'campa@nilla.com', username: 'campanilla', password: '123123123' };
var post1 = { id: 'mno-345', author: 'abc-123', image: 'https://www.quever.news/u/fotografias/m/2023/6/19/f850x638-53579_131068_5443.jpg', text: 'this is me', date: new Date() };
// const users: Array<User> = []
var users = []; //users contains elements of User type 
var posts = [];
users.push(peter);
users.push(wendy);
users.push(pepito);
users.push(campa);
posts.push(post1);
console.table(users);
console.table(posts);

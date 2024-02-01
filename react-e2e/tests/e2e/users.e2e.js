const UsersPage = require('../pages/users.page');

describe('Users page', () => {

    it('test 1 - load data', async () => {
        await UsersPage.loadData();
    });

    it('test 2 - delete user', async () => {
        await UsersPage.loadData();
        await UsersPage.deleteUser();
    });
});

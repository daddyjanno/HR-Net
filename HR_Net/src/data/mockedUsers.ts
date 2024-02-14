import MOCK_DATA from './MOCK_DATA.json'

export function createMockedUsers() {
    const mockedUsers: Array<object> = []

    MOCK_DATA.forEach((item) => mockedUsers.push(item))

    return mockedUsers
}

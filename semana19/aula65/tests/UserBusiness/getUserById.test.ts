import { UserBusiness } from "../../src/business/UserBusiness"
import { User, stringToUserRole, UserRole } from "../../src/model/User"

describe('Testing get user bt id', () => {
  let userDatabase = {}
  let hashGenerator = {}
  let tokenGenerator = {}
  let idGenerator = {}

  test('User not found must return the correct code and message', async () => {
    expect.assertions(2)
    try {
      const getUserById = jest.fn()
      userDatabase = {getUserById}

      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      )
      await userBusiness.getUserById('02')
    } catch (error) {
      expect(error.errorCode).toBe(404)
      expect(error.message).toBe('User not found')
    }
  })

  test('The success response must be the user passed', async () => {
    expect.assertions(2)
    const getUserById = jest.fn(
      (id: string) => new User(
        '001',
        'Paulo Aguiar',
        'paulo@gmail.com',
        'senhahash',
        stringToUserRole('ADMIN')
      )
    )

    userDatabase = {getUserById}

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    )

    const user = await userBusiness.getUserById('001')

    expect(getUserById).toHaveBeenCalledWith('001')
    expect(user).toEqual({
      id: '001',
      name: 'Paulo Aguiar',
      email: 'paulo@gmail.com',
      role: UserRole.ADMIN
    })
  })


}) 
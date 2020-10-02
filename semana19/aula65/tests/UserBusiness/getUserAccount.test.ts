import { UserBusiness } from "../../src/business/UserBusiness"
import { User, stringToUserRole, UserRole } from "../../src/model/User"

describe('Tests for get user account',() => {
  let userDatabase = {}
  let hashGenerator = {}
  let tokenGenerator = {}
  let idGenerator = {}

  test('If user doest exist, must return the correct error code and message', async () => {
    try {
      const getUserById = jest.fn()
      userDatabase = {getUserById}

      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      )
      await userBusiness.getUserById('001')
    } catch (error) {
      expect(error.errorCode).toBe(404)
      expect(error.message).toBe('User not found')
    }
  })

  test('In case of success, the response must be the user atributes', async () => {
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
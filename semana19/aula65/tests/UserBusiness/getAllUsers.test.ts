import { UserBusiness } from "../../src/business/UserBusiness"
import { UserRole, User, stringToUserRole } from "../../src/model/User"

describe('Testing get all users', () => {
  let userDatabase = {}
  let hashGenerator = {}
  let tokenGenerator = {}
  let idGenerator = {}

  test('Error code and error message must be the correct ones', async () => {
    expect.assertions(2) 
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      )
      await userBusiness.getAllUsers(UserRole.NORMAL)
    } catch (error) {
      expect(error.errorCode).toBe(403)
      expect(error.message).toBe('You need admin credentials for this')
    }
  })

  test('In case os success the result must be returned correctly', async () => {
    // expect.assertions(2) 
    
    const getAllUsers = jest.fn(() => [
      new User(
        '001',
        'Paulo Aguiar',
        'paulo@gmail.com',
        'senhahash',
        stringToUserRole('ADMIN')
      )
    ])

    userDatabase = {getAllUsers}

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    )

    const result = await userBusiness.getAllUsers(UserRole.ADMIN)

    expect(getAllUsers).toHaveBeenCalledTimes(1)
    expect(result).toContainEqual({
      id: '001',
      name: 'Paulo Aguiar',
      email: 'paulo@gmail.com',
      role: UserRole.ADMIN
    })
  })
})
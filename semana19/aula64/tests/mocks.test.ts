test('Return true validate mock', () => {
  const validateCharacterMock = jest.fn(() => {
    return true
  })
})

test('Return false validade mock', () => {
  const validateCharacterMock = jest.fn(() => {
    return false
  })
})
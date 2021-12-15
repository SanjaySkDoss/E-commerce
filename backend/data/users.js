import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'sk',
    email: 'sk@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'msk',
    email: 'msk@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'csk',
    email: 'csk@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users

// const bcrypt = require('bcrypt');
import bcrypt from 'bcrypt';
//  const bcrypt = require('bcrypt');
export const hashpassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

export const comparePassword = async (password, hashedPassword) => {
  try {
    const passwordMatch = await bcrypt.compare(password, hashedPassword);
    return passwordMatch;
  } catch (error) {
    throw error;
  }
};
// export const comparePassword;
// ;hashpassword=hashpassword
//     hashpassword,
//     comparePassword,
// };
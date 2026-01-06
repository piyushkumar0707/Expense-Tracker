// Simulated user database
const USERS = [
  {
    email: "test@example.com",
    password: "123456",
    role: "user"
  },
  {
    email: "admin@example.com",
    password: "admin123",
    role: "admin"
  }
];

// Fake JWT generator
const generateFakeJWT = (user) => {
  return btoa(
    JSON.stringify({
      email: user.email,
      role: user.role,
      exp: Date.now() + 60 * 60 * 1000 // 1 hour expiry
    })
  );
};

// Mock login API
export const mockLogin = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = USERS.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        reject("Invalid credentials");
      }

      const token = generateFakeJWT(user);

      resolve({
        token,
        user: {
          email: user.email,
          role: user.role
        }
      });
    }, 800); // simulate network delay
  });
};

require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const Expense = require("./models/Expense");

mongoose.connect(process.env.MONGO_URI).then(async () => {
  // Clear existing data
  await User.deleteMany();
  await Expense.deleteMany();

  // Create users
  const users = await User.create([
    {
      email: "test@example.com",
      password: bcrypt.hashSync("123456", 10),
      role: "user"
    },
    {
      email: "admin@example.com",
      password: bcrypt.hashSync("admin123", 10),
      role: "admin"
    }
  ]);

  // Create sample expenses for the test user
  await Expense.create([
    {
      title: "Groceries",
      amount: 150.50,
      category: "Food",
      userId: users[0]._id
    },
    {
      title: "Electric Bill",
      amount: 85.00,
      category: "Utilities",
      userId: users[0]._id
    },
    {
      title: "Gas",
      amount: 45.75,
      category: "Transportation",
      userId: users[0]._id
    },
    {
      title: "Netflix Subscription",
      amount: 15.99,
      category: "Entertainment",
      userId: users[0]._id
    },
    {
      title: "Restaurant Dinner",
      amount: 68.20,
      category: "Food",
      userId: users[0]._id
    },
    {
      title: "Gym Membership",
      amount: 50.00,
      category: "Health",
      userId: users[0]._id
    },
    {
      title: "Coffee Shop",
      amount: 12.50,
      category: "Food",
      userId: users[0]._id
    },
    {
      title: "Water Bill",
      amount: 35.00,
      category: "Utilities",
      userId: users[0]._id
    },
    {
      title: "Movie Tickets",
      amount: 28.00,
      category: "Entertainment",
      userId: users[0]._id
    },
    {
      title: "Uber Ride",
      amount: 22.50,
      category: "Transportation",
      userId: users[0]._id
    }
  ]);

  console.log("✅ Users and expenses seeded successfully!");
  console.log("\nLogin credentials:");
  console.log("User: test@example.com / 123456");
  console.log("Admin: admin@example.com / admin123");
  process.exit();
});

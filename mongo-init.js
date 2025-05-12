db.createUser({
  user: "admin",
  password: "admin",
  roles: [{ role: "readWrite", db: "test_db" }],
});

const getAdmins = (Map) => {
  let admins = [];

  for ([key, value] of Map) {
    if (value === "ADMIN") {
      admins.push(key);
    }
  }
  return admins;
};

const USERS = new Map();

USERS.set("David", "ADMIN");
USERS.set("Mussun", "SUDO");
USERS.set("Mark", "SUDO");
USERS.set("Dechamps", "ADMIN");
USERS.set("Matheus", "ADMIN");
USERS.set("Junior", "SUDO");
USERS.set("Thúlio", "ADMIN");

console.log(getAdmins(USERS));

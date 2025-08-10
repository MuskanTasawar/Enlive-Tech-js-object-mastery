// ===== 1. Object.seal() =====
const user = { name: "John", age: 30 };
Object.seal(user);

user.age = 31;      // ✅ Works (can modify existing values)
user.gender = "M";  // ❌ Fails silently (cannot add new properties)
delete user.name;   // ❌ Fails silently (cannot delete properties)

console.log(user);  // { name: "John", age: 31 }

// ===== 2. Object.freeze() =====
const admin = { role: "admin" };
Object.freeze(admin);

admin.role = "user"; // ❌ Fails silently (no modifications allowed)
admin.name = "John"; // ❌ Fails (cannot add properties)
console.log(admin);  // { role: "admin" }

// ===== Key Difference =====
// - seal(): Allows value changes, but prevents add/delete
// - freeze(): Complete immutability (no changes/add/delete)
// Both are SHALLOW (nested objects can still be modified)
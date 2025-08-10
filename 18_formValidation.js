// formValidation.js
const formData = {
    username: 'john_doe123',
    email: 'john@example.com',
    password: 'SecurePass123!',
    age: 25,
    termsAccepted: true
  };
  
  // Validation Rules
  const validationRules = {
    username: val => val.length >= 5 && !val.includes(' '),
    email: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    password: val => val.length >= 8 && /[A-Z]/.test(val) && /[0-9]/.test(val),
    age: val => val >= 18,
    termsAccepted: val => val === true
  };
  
  // Validate using every() - all fields must pass
  function validateForm(form, rules) {
    return Object.keys(rules).every(key => rules[key](form[key]));
  }
  
  // Check for any errors using some()
  function findErrors(form, rules) {
    return Object.keys(rules).filter(key => !rules[key](form[key]));
  }
  
  // Test
  console.log('Form Valid:', validateForm(formData, validationRules));
  console.log('Errors:', findErrors(formData, validationRules));
  
  // Example with invalid data
  const invalidData = {
    ...formData,
    email: 'invalid-email',
    age: 17
  };
  console.log('\nWith Invalid Data:');
  console.log('Form Valid:', validateForm(invalidData, validationRules));
  console.log('Errors:', findErrors(invalidData, validationRules));
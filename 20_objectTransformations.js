// objectTransformationsAlt.js

// ===== 1. Key Formatting with reduce =====
const user = {
    first_name: 'John',
    last_name: 'Doe',
    contact_info: { 
      email: 'john@example.com',
      phone: '123-456-7890'
    }
  };
  
  const camelCaseKeys = Object.entries(user).reduce((acc, [key, value]) => {
    const newKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
    return { ...acc, [newKey]: value };
  }, {});
  
  console.log('Camel Case (reduce):', camelCaseKeys);
  
  // ===== 2. Filtering Numerics with reduce =====
  const product = {
    id: 101,
    name: 'Laptop',
    price: 999.99,
    inStock: true,
    discount: 0.1
  };
  
  const numericValues = Object.entries(product).reduce((acc, [key, value]) => {
    if (typeof value === 'number') {
      return { ...acc, [key]: value * 2 };
    }
    return acc;
  }, {});
  
  console.log('Numeric Values x2 (reduce):', numericValues);
  
  // ===== 3. Complex Transformation with reduce =====
  const apiResponse = {
    USER_ID: 42,
    USER_ROLE: 'admin',
    USER_PERMISSIONS: ['read', 'write']
  };
  
  const normalized = Object.entries(apiResponse).reduce((acc, [key, value]) => {
    const newKey = key.toLowerCase().replace('user_', '');
    const newValue = Array.isArray(value) ? value.join(', ') : value;
    return { ...acc, [newKey]: newValue };
  }, {});
  
  console.log('Normalized (reduce):', normalized);
// clonePerformance.js
const bigObj = { 
    data: Array(10000).fill({ nested: Array(1000).fill(1) }) 
  };
  
  // Shallow copy test
  console.time('shallow');
  const shallow = { ...bigObj };
  console.timeEnd('shallow'); // ~1ms
  
  // Deep copy test
  console.time('deep');
  const deep = JSON.parse(JSON.stringify(bigObj));
  console.timeEnd('deep'); // ~500ms
  
  console.log('Shallow copy retains references:', shallow.data === bigObj.data);
  console.log('Deep copy breaks references:', deep.data !== bigObj.data);
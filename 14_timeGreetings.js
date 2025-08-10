// timeGreetings.js
function createGreeter() {
    const currentHour = new Date().getHours();
    
    // Closure remembers the time when greeter was created
    return {
      getGreeting: () => {
        if (currentHour < 12) return "Good Morning! 🌞";
        if (currentHour < 18) return "Good Afternoon! ☕";
        return "Good Evening! 🌙";
      },
      getTimeStamp: () => `Created at ${currentHour}:00`
    };
  }
  
  // Usage Example:
  const greeter = createGreeter();
  console.log(greeter.getGreeting()); // Depends on current time
  console.log(greeter.getTimeStamp()); // Shows creation hour
  
  // Advanced Version (with configurable greetings):
  function createCustomGreeter(morningMsg, afternoonMsg, eveningMsg) {
    const hour = new Date().getHours();
    
    return {
      greet: () => {
        if (hour < 12) return morningMsg;
        if (hour < 18) return afternoonMsg;
        return eveningMsg;
      }
    };
  }
  
  const customGreeter = createCustomGreeter(
    "Rise and Shine!",
    "Lunch time!",
    "Sleepy time!"
  );
  console.log(customGreeter.greet());
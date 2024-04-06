/**
 * Returns a random greeting message to inspire productivity.
 * @returns {string} A random greeting message with optional emoji code.
 */
export const getRandomGreeting = (): string => {
  const hoursLeft = 24 - new Date().getHours();

  const greetingsText: string[] = [
    "Let's make today count! **1f680**",
    "Get things done and conquer the day!",
    "Embrace the power of productivity!",
    "Set your goals, crush them, repeat.",
    "Today is a new opportunity to be productive!",
    "Make every moment count.",
    "Stay organized, stay ahead.",
    "Take charge of your day!",
    "One task at a time, you've got this!",
    "Productivity is the key to success. **1f511**",
    "Let's turn plans into accomplishments!",
    "Start small, achieve big.",
    "Be efficient, be productive.",
    "Harness the power of productivity!",
    "Get ready to make things happen!",
    "It's time to check off those tasks! **2705**",
    "Start your day with a plan! **1f5d3-fe0f**",
    "Stay focused, stay productive.",
    "Unlock your productivity potential. **1f513**",
    "Turn your to-do list into a to-done list! **1f4dd**",
    "Let's seize the day and make every moment count! 💫",
    "Crush your to-do list and conquer the day ahead! 🚀",
    "Embrace the power of productivity and watch your dreams unfold! 💪",
    "Set ambitious goals, smash them, and set new ones! 🎯",
    "Today is brimming with opportunities for productivity and success! 🌟",
    "Transform every minute into a masterpiece of achievement! 🎨",
    "Stay ahead of the game with impeccable organization and efficiency! 📈",
    "Take the reins of your day and steer it towards success! 🌟",
    "One task at a time, paving the path to greatness! 🛤️",
    "Unlock the gates to success with the key of productivity! 🔑",
    "Let's turn aspirations into remarkable accomplishments! 🏆",
    "Start small, dream big, and achieve beyond expectations! 🚀",
    "Efficiency breeds productivity; let's be champions of both! ⏱️",
    "Tap into the boundless potential of productivity and watch magic unfold! ✨",
    "Gear up to make waves and manifest your aspirations into reality! 🌊",
    "It's time to triumph over tasks and bask in the glory of completion! ✅",
    "Begin your day armed with a strategic plan for ultimate success! 📋",
    "Stay laser-focused on your objectives and let productivity lead the way! 🔍",
    "Unlock the hidden reservoirs of productivity within you! 🗝️",
    "Turn your to-do list into a celebration of achievements! 🎉",

    `Have a wonderful  ${new Date().toLocaleDateString("en", {
      weekday: "long",
    })}!`,
    `Happy ${new Date().toLocaleDateString("en", {
      month: "long",
    })}! A great month for productivity!`,
    hoursLeft > 4
      ? `${hoursLeft} hours left in the day. Use them wisely!`
      : `Only ${hoursLeft} hours left in the day`,
  ];

  const randomIndex = Math.floor(Math.random() * greetingsText.length);
  return greetingsText[randomIndex];
};

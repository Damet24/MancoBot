
module.exports = {
  name: 'messageCreate',
  once: false,
  execute: async (message) => {
    console.log(`message: ${message}`)
  }
}

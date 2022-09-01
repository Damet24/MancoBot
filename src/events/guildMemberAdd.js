module.exports = {
  name: 'guildMemberAdd',
  once: false,
  execute: async (event) => {
    await event.send(`Hola ${event.user.username}. \nBienvenido a ${event.guild.name}`)
  }
}

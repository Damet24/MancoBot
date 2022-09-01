module.exports = {
  name: 'guildMemberRemove',
  once: false,
  execute: async (event) => {
    console.log(event)
    const dm = await event.createDM()
    await dm.send('Chao malparido UnU')
  }
}

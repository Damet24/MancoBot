const fs = require('node:fs')
const path = require('node:path')
const { Routes } = require('discord.js')
const { REST } = require('@discordjs/rest')

module.exports = {
  name: 'guildCreate',
  once: false,
  execute (client) {
    const guildId = client.commands.permissions.guildId

    const commands = []
    const commandsPath = path.join(__dirname, '../commands')
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file)
      const command = require(filePath)
      commands.push(command.data.toJSON())
    }

    const rest = new REST({ version: '10' }).setToken(process.env.APP_TOKEN)

    rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, guildId), { body: [] })
      .then(() => console.log('Successfully deleted all guild commands.'))
      .catch(console.error)

    rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: [] })
      .then(() => console.log('Successfully deleted all application commands.'))
      .catch(console.error)

    rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, guildId), { body: commands })
      .then(() => console.log('Successfully registered application commands.'))
      .catch(console.error)
  }
}

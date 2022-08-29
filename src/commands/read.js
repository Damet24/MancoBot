
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder().setName('read').setDescription('read command'),
  async execute (interaction) {
    await interaction.reply('lee esto malparido!')
  }
}

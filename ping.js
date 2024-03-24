module.export = {
  name: 'ping',
  description: "Replies with bot ping!"
  callback: async (client, interaction) => {
  await interaction.deferReply();

  const reply = await interaction.fetchReply();

  const ping = reply.createdTimestamp - interaction.createdtimestamp;

  interaction.editReply(
    `Pong! Client ${ping}ms | Websocket: ${client.ws.ping}ms`   
  );
 },
};  
  

export const generatePrograms = () => {
    return {
        date_begin: "2021/08/12 20:02:56",
        date_end: "2021/08/12 21:02:56",
        description: null,
        duration: "01:00:00",
        name: "NA"
    };
};

export const generateChannels = () => {
  const channels = [];
  const program = generatePrograms();
  const channel = {
    programs: [program],
    image: "https://clarovideocdn3.clarovideo.net/PELICULAS/CANALIBEROAMERICANO/EXPORTACION_WEB/SS/CANALIBEROAMERICANO_t-290x163.png",
    name: "Channel 1",
    number: "1"
  };
  channels.push(channel);
  return channels;
};
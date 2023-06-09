interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: 'Mess',
  details: {
    author: 'Ed Sheeran',
    year: 2015,
  },
};

const { song: anotherSong } = audioPlayer;

const { details } = audioPlayer;

const { author } = details;

console.log(anotherSong);
console.log(author);

const [p1, p2, trunks = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('personaje 3:', trunks || 'Personaje no encontrado');

export {};

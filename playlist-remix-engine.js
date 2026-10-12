const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

function flattenPlaylists(arrPlaylist) {
  if (!Array.isArray(arrPlaylist)) {
    return [];
  }

  const newPlaylist = [];

  for (let i = 0; i < arrPlaylist.length; i++) {
    for (let j = 0; j < arrPlaylist[i].length; j++) {
      const song = {
        ...arrPlaylist[i][j],
        source: [i, j],
      };

      newPlaylist.push(song);
    }
  }

  return newPlaylist;
}

function scoreTracks(arrTrack) {
  const newTrack = [];
  for (let i = 0; i < arrTrack.length; i++) {
    const song = {
      ...arrTrack[i],
      score: arrTrack[i].votes * 10 - Math.abs(arrTrack[i].bpm - 120),
    };
    newTrack.push(song);
  }
  return newTrack;
}

function dedupeTracks(arrTrack) {
  const newTrack = [];

  for (let i = 0; i < arrTrack.length; i++) {
    if (!newTrack.some((track) => track.trackId === arrTrack[i].trackId)) {
      newTrack.push(arrTrack[i]);
    }
  }

  return newTrack;
}

function enforceArtistQuota(arrTrack, maxOccurrences) {
  const newTrack = [];
  const artistCount = {};

  for (let i = 0; i < arrTrack.length; i++) {
    const artist = arrTrack[i].artist;

    if (!artistCount[artist]) {
      artistCount[artist] = 0;
    }

    if (artistCount[artist] < maxOccurrences) {
      newTrack.push(arrTrack[i]);
      artistCount[artist]++;
    }
  }

  return newTrack;
}

function buildSchedule(arrTrack) {
  const schedule = [];

  for (let i = 0; i < arrTrack.length; i++) {
    schedule.push({
      slot: i + 1,
      trackId: arrTrack[i].trackId,
    });
  }

  return schedule;
}

function remixPlaylist(playlists, maxOccurrences) {
  const flattened = flattenPlaylists(playlists);
  const scored = scoreTracks(flattened);
  const deduped = dedupeTracks(scored);
  const quotaTracks = enforceArtistQuota(deduped, maxOccurrences);

  return buildSchedule(quotaTracks);
}

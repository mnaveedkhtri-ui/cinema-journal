export type Chapter = {
  n: string;
  title: string;
  desc: string;
  body: string;
  month: string;
  read: number;
};

export const chapters: Chapter[] = [
  { n: '01', title: 'On duration', month: 'Oct', read: 4,
    desc: 'Why a film that holds a shot longer than is comfortable is doing you a kindness.',
    body: 'The shot that lasts longer than you expect begins as discomfort and ends, if the filmmaker is patient enough, as a kind of attention you did not know you were capable of. Tarkovsky measured this in what he called the pressure of time within the frame. The long take is not slow cinema. It is the cinema of refusing to look away.' },
  { n: '02', title: 'On light', month: 'Sep', read: 6,
    desc: 'The difference between light and lighting, and why only one of them is cinematic.',
    body: 'There is light, and there is lighting. The first is what the world gives you. The second is what you give the world back. Cinema begins, technically, in the second, but the films that last are the ones that learn to forget the difference.' },
  { n: '03', title: 'On the cut', month: 'Aug', read: 5,
    desc: 'A history of the cut, from Eisenstein to the algorithm. A small ethics of interruption.',
    body: "The cut is the only act that is entirely cinema's own. Photography has the frame. Theater has the room. But only cinema has the cut, the deliberate interruption of one piece of time by another. Eisenstein knew this. So did Hitchcock. So does every editor who has ever held a shot three frames longer than was comfortable." },
  { n: '04', title: 'On the frame', month: 'Jul', read: 4,
    desc: 'What the camera chooses to leave out is more honest than what it includes.',
    body: 'Every frame is a refusal. The camera points here, which means it does not point there. The art of framing is the art of choosing what to leave out, and the most honest filmmakers are the ones who let you feel the absence of what they have excluded.' },
  { n: '05', title: 'On sound', month: 'Jul', read: 7,
    desc: 'The invisible half of cinema, and the discipline of listening to a film.',
    body: 'Half of cinema is invisible. The image is what we discuss. The sound is what we remember. A film with bad image and good sound is watchable. A film with good image and bad sound is unwatchable. This is the first and last lesson of the medium.' },
  { n: '06', title: 'On the room', month: 'Jun', read: 5,
    desc: 'A theory of interior space, with reference to hotel rooms, kitchens, and waiting rooms.',
    body: 'The room is the smallest unit of cinema. Not the shot, the room. A room has light, has sound, has duration, has weather of its own. A film is, finally, a sequence of rooms, and the cut is the door between them.' },
  { n: '07', title: 'On the face', month: 'May', read: 6,
    desc: 'The close up as the central invention of cinema. Nothing else is so radical.',
    body: 'The close up is the central invention of cinema. Everything else, sound, color, the cut, the tracking shot, is an elaboration. The close up is the thing that cinema alone can do, and it is the thing that cinema is for.' },
  { n: '08', title: 'On silence', month: 'May', read: 4,
    desc: 'A defense of the quiet film, and a small attack on the score.',
    body: 'Silence in cinema is not the absence of sound. It is the presence of attention. A quiet film is not a film without sound, it is a film in which every sound has been chosen, and in which the chosen sounds have been given room to be heard.' },
  { n: '09', title: 'On weather', month: 'Apr', read: 5,
    desc: 'Rain, fog, snow: how cinema learned to borrow weather as a dramaturgical tool.',
    body: 'Weather is the only actor cinema did not invent. Rain, fog, snow, the long blue of evening are borrowed from the world, and they are borrowed because they do something no performance can do. They make the frame honest.' },
  { n: '10', title: 'On ending', month: 'Mar', read: 8,
    desc: 'The last shot, the last cut, the last frame. Why endings are a moral problem.',
    body: 'The ending is the moral problem of every film. Where you cut, and when, is the final statement of what the film believes about its subject. Most films end too early, or too late. The ones that end exactly when they should are the ones we cannot stop thinking about.' },
];

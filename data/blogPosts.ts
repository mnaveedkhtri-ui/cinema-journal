export type BlogPost = {
  slug: string;
  tag: string;
  title: string;
  date: string;
  read: string;
  excerpt: string;
  content: string; // HTML string, rendered with dangerouslySetInnerHTML
};

// ==================================================
// BLOG CMS: APNE DAILY BLOGS YAHAN ADD KAREIN
// Naya post add karne ke liye, neeche template copy karein
// aur array mein sabse upar (ya jahan chahein) paste kar dein.
// ==================================================
export const blogPosts: BlogPost[] = [
  {
    slug: 'the-hotel-room-as-a-unit-of-time',
    tag: 'Location',
    title: 'The hotel room as a unit of time',
    date: 'Nov 14, 2025',
    read: '8 min',
    excerpt:
      'On Tarkovsky, Marker, and the temporary architecture of staying somewhere unfamiliar.',
    content: `
      <p>The first hotel room I remember was in a town I cannot name. I was seven. The curtains were orange. There was a print of a ship on the wall, and a television that received only one channel clearly. I do not remember what we had come to that town to do. I remember only the room, and the particular quality of the light through the orange curtains at five in the afternoon.</p>
      <p>Years later, watching <em>Stalker</em> for the first time, I recognized something. Not the room because Tarkovsky's room was nothing like the one I had stayed in. But the duration. The way the camera refuses to leave the room before it has finished being a room. The way the light, given enough time, becomes a character.</p>
      <div class="pullquote">A hotel room is the only architecture built specifically to be left. Every other building is a refusal of departure.</div>
      <p>Chris Marker understood this. <em>Sans Soleil</em> is, among other things, a film composed entirely of hotel rooms, not as locations but as units of time. Each room is a stay, and each stay is a frame, and the film is the assembly of those frames into something that resembles a life observed from the inside.</p>
    `,
  },
  {
    slug: 'color-scripts-and-the-long-memory',
    tag: 'Craft',
    title: 'Color scripts and the long memory of a film',
    date: 'Nov 09, 2025',
    read: '12 min',
    excerpt: 'How Pixar built a discipline of color that the rest of cinema is still catching up to.',
    content: `
      <p>Color in cinema is often treated as an afterthought, a layer of polish applied in post production. But the discipline of color scripting treats it as structure. A film is not just a sequence of events, it is a sequence of temperatures.</p>
      <p>When Pixar began using color scripts for films like <em>Finding Nemo</em> and <em>Up</em>, they were borrowing from classical animation. But they elevated it to a science of emotion. Every scene was mapped on a spectrum before a single frame was animated.</p>
      <p>This is the long memory of a film. The audience may not consciously notice the shift from cold blues to warm ambers, but their body does. The film remembers, even if the mind does not.</p>
    `,
  },
  // Naya blog yahan add karein. Akhri entry ke baad comma (,) zaroor lagayen.
];

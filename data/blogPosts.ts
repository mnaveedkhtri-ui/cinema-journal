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
    slug: 'the-best-slow-burn-movies-and-why-we-return-to-them',
    tag: 'Watching',
    title: 'Best Slow Burn Movies and Why We Keep Returning',
    date: 'Nov 20, 2025',
    read: '14 min',
    excerpt:
      'A working list of slow burn films worth the wait, and what patience gives back once you stop resisting it.',
    content: `
      <p>There is a particular kind of restlessness that arrives about twenty minutes into a slow film, a small voice asking when something is going to happen. We have learned, slowly and against our own instincts, to sit with that voice rather than obey it. What follows on the other side of that restlessness is usually the point of the film, not an obstacle standing between you and it.</p>
      <p>This is not a ranking. It is closer to a working notebook, the kind we keep for the Field Guide, except aimed at specific films rather than the elements underneath them. Some of these are famous. A few are not. All of them ask for patience and pay it back with something that a faster film could not give.</p>
      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">Paris, Texas (1984)</h2>
      <p>Wim Wenders opens on a man walking out of the desert with no memory anyone can name, and the film spends nearly two and a half hours letting him become legible again, one silence at a time. The <a style="color:#c9a876; text-decoration:underline; text-underline-offset:3px;" href="https://www.criterion.com/films/1502-paris-texas" target="_blank" rel="noopener noreferrer">Criterion Collection's own notes</a> on the film describe it as an exquisite exploration of a crumbling American landscape, and that landscape is doing as much narrative work as any line of dialogue. Harry Dean Stanton barely speaks for the first half hour. When he finally does, the wait has done something to your ear that no amount of exposition could replicate.</p>
      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">Stalker (1979)</h2>
      <p>Tarkovsky treats a room as though it has not finished being a room, and Stalker is the fullest expression of that instinct stretched across an entire film. Three men walk into a forbidden zone toward a room that is said to grant wishes, and the walking is the film. Nothing about the pace apologizes for itself. The patience the film demands is inseparable from what it is actually about, a slow erosion of certainty in three men who came looking for something simpler than what they find. If duration as a subject interests you beyond this list, our <a style="color:#c9a876; text-decoration:underline; text-underline-offset:3px;" href="/guide">Field Guide</a> has a working chapter on it.</p>
      <div class="pullquote">A slow film does not withhold its ending. It simply refuses to pretend the middle does not matter.</div>
      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">Jeanne Dielman, 23 quai du Commerce, 1080 Bruxelles (1975)</h2>
      <p>Chantal Akerman films three days in the life of a widow who cooks, cleans, and receives clients in the afternoon with the same unhurried attention to each task. In 2022, more than sixteen hundred critics and programmers voting in the <a style="color:#c9a876; text-decoration:underline; text-underline-offset:3px;" href="https://www.bfi.org.uk/sight-and-sound/features/greatest-film-all-time-jeanne-dielman-23-quai-du-commerce-1080-bruxelles" target="_blank" rel="noopener noreferrer">Sight and Sound poll</a> named it the greatest film ever made, the first time a film directed by a woman had taken the top spot in the poll's seventy year history. The routine on screen is almost unbearably precise, and that precision is exactly what makes the eventual break in it land as hard as it does.</p>
      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">The Turin Horse (2011)</h2>
      <p>Béla Tarr's final film follows a farmer, his daughter, and their horse across six days as the world outside their house seems to be quietly ending. Long takes here are not a flourish. They are the argument. A meal of a single boiled potato, eaten with the hands, in real time, tells you more about deprivation than a montage ever could.</p>
      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">A Ghost Story (2017)</h2>
      <p>David Lowery's film contains a shot of a woman eating an entire pie on her kitchen floor, in grief, that runs long enough to become genuinely uncomfortable before it becomes something closer to devotional. The film's central image, a figure under a sheet with two cut eyeholes, could have been a joke. Given enough time and stillness, it becomes one of the more effective meditations on loss and permanence that the decade produced.</p>
      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">Uncle Boonmee Who Can Recall His Past Lives (2010)</h2>
      <p>Apichatpong Weerasethakul's film moves through a dying man's final days with a logic that borrows as much from folklore and dream as from conventional narrative. Ghosts arrive at the dinner table without any dramatic music cueing their entrance. The film simply lets them sit down, and asks you to adjust rather than explaining itself to you.</p>
      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">What the Waiting Is Actually For</h2>
      <p>None of these films are slow because they have nothing to say. They are slow because what they have to say resists compression. A grief that arrives in a single cut feels like information. A grief that arrives after forty unhurried minutes feels like something closer to experience. That difference is, as far as we can tell, the entire case for this kind of cinema. Our <a style="color:#c9a876; text-decoration:underline; text-underline-offset:3px;" href="/route">Routes</a> section maps a few of the physical locations behind films like these, for anyone who wants to stand where the waiting actually happened.</p>
      <p>We will keep adding to this list slowly, the way we do most things. Our <a style="color:#c9a876; text-decoration:underline; text-underline-offset:3px;" href="/about">About</a> page has more on why we write like this, and our <a style="color:#c9a876; text-decoration:underline; text-underline-offset:3px;" href="/blog">other dispatches</a> are a reasonable place to see what we tend to notice next. If you have a film that belongs here, get in touch and tell us what we missed.</p>
      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">A Few Questions We Get Asked</h2>
      <p><strong>What actually makes a film a slow burn, rather than just slow?</strong><br/>
      A slow burn earns its pace. The duration is doing something, building tension, letting a feeling accumulate, forcing you to sit inside a moment rather than move past it. A film can simply be slow without any of that intent behind it. The distinction matters more than the runtime.</p>
      <p><strong>Do slow burn movies reward multiple viewings?</strong><br/>
      Often more than faster films do. Once you already know where a slow film is going, you stop waiting for plot and start noticing texture, framing, the small decisions that a first viewing tends to rush past in anticipation of what happens next.</p>
      <p><strong>Where should someone new to slow cinema start?</strong><br/>
      Paris, Texas is usually our first recommendation. It has a clear emotional throughline even at its most unhurried, which makes the pacing easier to trust than something like The Turin Horse on a first attempt.</p>
      <p><strong>Is there a difference between slow cinema and a slow burn thriller?</strong><br/>
      Some overlap, but not entirely. A slow burn thriller usually still resolves around suspense and payoff. Slow cinema, as we mean it here, is often less concerned with payoff at all, and more interested in duration as its own kind of subject.</p>
    `,
  },
  // Naya blog yahan add karein. Akhri entry ke baad comma (,) zaroor lagayen.
];

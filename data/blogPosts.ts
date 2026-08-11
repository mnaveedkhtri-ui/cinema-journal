export type BlogPost = {
  slug: string;
  tag: string;
  title: string;
  date: string;
  read: string;
  excerpt: string;
  image?: string; // NEW — hero image URL (optional)
  imageAlt?: string; // NEW — alt text (optional, falls back to title)
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
    image: 'https://images.unsplash.com/photo-1713514116766-d9be318edaf8?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'An empty cinema theater with red curtains and rows of seats',
    content: `
      <p>There is a particular kind of restlessness that arrives about twenty minutes into a slow film, a small voice asking when something is going to happen. We have learned, slowly and against our own instincts, to sit with that voice rather than obey it. What follows on the other side of that restlessness is usually the point of the film, not an obstacle standing between you and it.</p>
      <p>This is not a ranking. It is closer to a working notebook, the kind we keep for the Field Guide, except aimed at specific films rather than the elements underneath them. Some of these are famous. A few are not. All of them ask for patience and pay it back with something that a faster film could not give.</p>
      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">Paris, Texas (1984)</h2>
      <p>Wim Wenders opens on a man walking out of the desert with no memory anyone can name, and the film spends nearly two and a half hours letting him become legible again, one silence at a time. The <a style="color:#c9a876; text-decoration:underline; text-underline-offset:3px;" href="https://www.criterion.com/films/1502-paris-texas" target="_blank" rel="noopener noreferrer">Criterion Collection's own notes</a> on the film describe it as an exquisite exploration of a crumbling American landscape, and that landscape is doing as much narrative work as any line of dialogue. Harry Dean Stanton barely speaks for the first half hour. When he finally does, the wait has done something to your ear that no amount of exposition could replicate.</p>
      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">Stalker (1979)</h2>
      <p>Tarkovsky treats a room as though it has not finished being a room, and Stalker is the fullest expression of that instinct stretched across an entire film. Three men walk into a forbidden zone toward a room that is said to grant wishes, and the walking is the film. Nothing about the pace apologizes for itself. The patience the film demands is inseparable from what it is actually about, a slow erosion of certainty in three men who came looking for something simpler than what they find. If duration as a subject interests you beyond this list, our <a style="color:#c9a876; text-decoration:underline; text-underline-offset:3px;" href="/guide">Field Guide</a> has a working chapter on it.</p>
      <div class="pullquote">A slow film does not withhold its ending. It simply refuses to pretend the middle does not matter.</div>
      <figure class="article-figure">
        <img src="https://images.unsplash.com/photo-1623556607706-2997713b0d2a?q=80&w=1400&auto=format&fit=crop" alt="An old film projector resting on a table, mid-reel" />
        <figcaption>The projector waits between reels the same way a slow film waits between cuts.</figcaption>
      </figure>
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
      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">Conclusion</h2>
      <p>None of the films on this list ask for patience as a formality. They ask for it because there is genuinely nowhere else the feeling they are building toward could live. Cut any of them down and you would still have a story, but you would lose the thing that made sitting through it worth doing in the first place. That is, as far as we can tell, the whole argument for slow cinema, made one film at a time rather than all at once.</p>
      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">A Few Questions We Get Asked</h2>
      <h3 style="font-size:1.15rem; font-weight:600; margin-top:1.5rem; margin-bottom:0.5rem;">What actually makes a film a slow burn, rather than just slow?</h3>
      <p>The pace earns its keep. It builds tension or lets a feeling accumulate instead of just passing time.</p>
      <h3 style="font-size:1.15rem; font-weight:600; margin-top:1.5rem; margin-bottom:0.5rem;">Do slow burn movies reward multiple viewings?</h3>
      <p>Usually more than faster films. Once you know where it's going, you notice texture instead of waiting for plot.</p>
      <h3 style="font-size:1.15rem; font-weight:600; margin-top:1.5rem; margin-bottom:0.5rem;">Where should someone new to slow cinema start?</h3>
      <p>Paris, Texas. Its emotional throughline makes the pacing easier to trust than something like The Turin Horse.</p>
      <h3 style="font-size:1.15rem; font-weight:600; margin-top:1.5rem; margin-bottom:0.5rem;">Is there a difference between slow cinema and a slow burn thriller?</h3>
      <p>Some overlap, but a thriller still resolves around suspense. Slow cinema is often less concerned with payoff at all.</p>
    `,
  },
  {
    slug: 'what-is-a-long-take-in-film',
    tag: 'Craft',
    title: 'What Is a Long Take in Film? The Shot Behind Our Name',
    date: 'Aug 10, 2026',
    read: '10 min',
    excerpt:
      'A long take is a single, uninterrupted shot held far past the point most films would cut. Here is what actually makes one work, and why we named this journal after it.',
    image: 'https://images.unsplash.com/photo-1635360381874-edd74cbd57f3?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'A filmmaker holding a camera steady while recording a continuous shot',
    content: `
      <p>A long take, sometimes called a continuous shot or a oner, is a single unbroken shot held for a duration far past what conventional editing pace would allow. There is no official stopwatch cutoff that turns a normal shot into a long take. What defines it is intention: the filmmaker chooses not to cut, and everything the scene needs, blocking, movement, performance, has to happen inside that one continuous frame instead of being assembled afterward in an edit bay.</p>

      <p><strong>In short:</strong> a long take earns its length. It is not simply a shot that runs long, it is a shot where the absence of a cut is doing real work, building tension, tracking a space in full, or refusing to let the audience look away. The rest of this piece looks at where the technique came from, how filmmakers actually pull one off, and a few of the films most worth watching for it. This is also, not coincidentally, where this journal takes its name.</p>

      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">Long Take vs Long Shot: A Common Mix-Up</h2>
      <p>These two terms get confused constantly, and they describe completely different things. A long shot refers to camera distance, how far the camera sits from its subject. A long take refers to duration, how much time passes before the shot cuts. A film can have a long take that is also a close-up, and a long shot that lasts two seconds. According to <a style="color:#c9a876; text-decoration:underline; text-underline-offset:3px;" href="https://en.wikipedia.org/wiki/Long_take" target="_blank" rel="noopener noreferrer">Wikipedia's entry on the long take</a>, the technique's length was originally limited by how much film a camera magazine could physically hold, not by any creative choice, before digital video removed that ceiling almost entirely.</p>

      <div style="overflow-x:auto; margin:2rem 0;">
        <table style="width:100%; border-collapse:collapse; font-size:0.95rem;">
          <thead>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.2);">
              <th style="text-align:left; padding:0.85rem 1rem; font-weight:600; color:#f5f5f5;">&nbsp;</th>
              <th style="text-align:left; padding:0.85rem 1rem; font-weight:600; color:#c9a876;">Long Take</th>
              <th style="text-align:left; padding:0.85rem 1rem; font-weight:600; color:#f5f5f5;">Long Shot</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
              <td style="padding:0.85rem 1rem; color:rgba(255,255,255,0.6);">What it measures</td>
              <td style="padding:0.85rem 1rem;">Duration, how long the shot runs before cutting</td>
              <td style="padding:0.85rem 1rem;">Distance, how far the camera sits from its subject</td>
            </tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
              <td style="padding:0.85rem 1rem; color:rgba(255,255,255,0.6);">Also known as</td>
              <td style="padding:0.85rem 1rem;">Continuous shot, oner, sequence shot</td>
              <td style="padding:0.85rem 1rem;">Wide shot, establishing shot</td>
            </tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
              <td style="padding:0.85rem 1rem; color:rgba(255,255,255,0.6);">Can it be a close-up?</td>
              <td style="padding:0.85rem 1rem;">Yes, a long take can hold on any framing at all</td>
              <td style="padding:0.85rem 1rem;">No, a long shot is wide by definition</td>
            </tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.1);">
              <td style="padding:0.85rem 1rem; color:rgba(255,255,255,0.6);">Classic example</td>
              <td style="padding:0.85rem 1rem;">The opening crane shot in Touch of Evil (1958)</td>
              <td style="padding:0.85rem 1rem;">The desert vistas in Lawrence of Arabia (1962)</td>
            </tr>
            <tr>
              <td style="padding:0.85rem 1rem; color:rgba(255,255,255,0.6);">Primary purpose</td>
              <td style="padding:0.85rem 1rem;">Preserving unbroken time and tension</td>
              <td style="padding:0.85rem 1rem;">Establishing scale and geography</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">Where the Technique Comes From</h2>
      <p>The long take was not born as an artistic statement. Early cinema had no editing at all, a single reel simply ran until it ran out, so the earliest films were, by necessity, one continuous take. As editing developed as a craft through the 1920s and 1930s, the long take slowly became a deliberate choice rather than a limitation.</p>
      <p>The film theorist André Bazin was the technique's most influential early champion, arguing that the long take, paired with deep focus, preserved a kind of cinematic reality that heavy editing destroyed. <a style="color:#c9a876; text-decoration:underline; text-underline-offset:3px;" href="https://filmglossary.ccnmtl.columbia.edu/term/long-take" target="_blank" rel="noopener noreferrer">Columbia University's film glossary</a> traces this directly through Jean Renoir and Orson Welles, whose deep-focus long takes in Citizen Kane became a reference point for decades of filmmakers who followed. Alfred Hitchcock pushed the format's physical limits in Rope in 1948, structuring the entire film around takes as long as ten minutes, the maximum a single roll of 35mm film could hold at the time.</p>

      <figure class="article-figure">
        <img src="https://images.unsplash.com/photo-1640043889108-648c3d4d2d94?q=80&w=1400&auto=format&fit=crop" alt="Close-up of a cinema camera lens, representing the continuous framing of a long take" />
        <figcaption>Every long take lives or dies by what stays inside this frame for as long as the shot runs.</figcaption>
      </figure>

      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">Why Directors Choose Not to Cut</h2>
      <p>A cut is useful precisely because it hides things. It lets a film skip time, change location, or reset an actor's position without the audience noticing the seam. A long take gives up all of that convenience on purpose, and it does so for a specific reason each time.</p>
      <p>In action or tension, a long take denies the audience the relief a cut usually provides, which is why it shows up so often in horror and thriller filmmaking. In drama, it keeps a conversation unbroken in a way that mirrors how conversations actually happen in real life, without the invisible edits our own memory usually smooths over. In a film essay on duration, which is really what a long take is asking you to sit with, our own <a style="color:#c9a876; text-decoration:underline; text-underline-offset:3px;" href="/guide">Field Guide chapter on the subject</a> goes further into why extended time on screen changes how an audience processes what they are watching.</p>

      <div class="pullquote">A cut is an editor's decision made in advance. A long take is a bet made live, on set, with no second chance to fix it in the room where it happens.</div>

      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">How a Long Take Actually Gets Made</h2>
      <p>Executing a long take is closer to live theater than typical filmmaking. Every mark, light cue, and piece of choreography has to work in one continuous pass, because there is no cut to hide a mistake behind. This usually means:</p>
      <p><strong>Extensive rehearsal.</strong> Cast and crew often block and rehearse a long take dozens of times before it is ever filmed, since a single error late in a ten-minute take means starting completely over.</p>
      <p><strong>Camera support built for movement.</strong> Steadicams, dollies on tracks, and increasingly drones let the camera travel through a space smoothly without visible shake, since a static long take is a much rarer choice than a moving one.</p>
      <p><strong>Hidden cuts, when the illusion demands it.</strong> Many famous one-shot films, including 1917, are not literally a single unbroken take. They use invisible cuts, hidden behind a passing wall or a whip pan, stitched together digitally so the audience never notices the seam. The illusion of a long take can matter as much as the technical reality of one.</p>

      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">Long Takes Worth Watching For</h2>
      <p>Orson Welles opens Touch of Evil with a three-and-a-half-minute crane shot that follows a car across a border town toward an explosion, establishing an entire world before a single cut arrives. Alfonso Cuarón's Children of Men contains a combat sequence shot to look like one continuous take, blood spatter and all, that puts the audience inside the chaos rather than assembling it from safer angles. Sam Mendes built all of 1917 around the illusion of two continuous takes across an entire feature. For slower, more contemplative uses of the same idea, our own piece on <a style="color:#c9a876; text-decoration:underline; text-underline-offset:3px;" href="/blog/the-best-slow-burn-movies-and-why-we-return-to-them">slow burn films worth the wait</a> covers several directors, Tarkovsky and Béla Tarr among them, who use extended duration for stillness rather than spectacle.</p>

      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">Why We Named This Journal After It</h2>
      <p>The long take, to us, is less a technique than a stance. It is a refusal to cut away from something before you have actually finished looking at it, which is close to the whole editorial philosophy behind this journal. Our <a style="color:#c9a876; text-decoration:underline; text-underline-offset:3px;" href="/about">About page</a> goes further into that idea, and our piece on <a style="color:#c9a876; text-decoration:underline; text-underline-offset:3px;" href="/blog/color-scripts-and-the-long-memory">color scripts and the long memory of a film</a> is another example of the same instinct, applied to a different part of the frame.</p>

      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">Conclusion</h2>
      <p>A long take is not a gimmick, even though it is sometimes used like one. At its best, it is a director trading the safety of the edit for something a cut cannot give: unbroken time, held in front of an audience long enough that they stop watching a performance and start feeling like they are inside the room where it happened. That trade is the entire case for the technique, and it is the reason the shot has outlasted almost a century of changing fashions in how films get made.</p>

      <h2 style="font-size:1.6rem; font-weight:600; margin-top:2.5rem; margin-bottom:1rem; letter-spacing:0.02em;">A Few Questions We Get Asked</h2>
      <h3 style="font-size:1.15rem; font-weight:600; margin-top:1.5rem; margin-bottom:0.5rem;">How long does a shot have to be before it counts as a long take?</h3>
      <p>There is no fixed number. Some definitions use 40 seconds as a rough threshold, but what actually matters is whether the shot runs well past the film's normal editing rhythm on purpose.</p>
      <h3 style="font-size:1.15rem; font-weight:600; margin-top:1.5rem; margin-bottom:0.5rem;">Are films like 1917 really shot in one continuous take?</h3>
      <p>Mostly not literally. Most modern one-shot films use hidden cuts disguised behind objects, walls, or darkness, digitally stitched together so the seam is invisible to the audience.</p>
      <h3 style="font-size:1.15rem; font-weight:600; margin-top:1.5rem; margin-bottom:0.5rem;">What equipment do filmmakers use for a moving long take?</h3>
      <p>Steadicams and dolly tracks are the most common tools, with gimbals and drones increasingly used for takes that need to move through more complex or open spaces.</p>
      <h3 style="font-size:1.15rem; font-weight:600; margin-top:1.5rem; margin-bottom:0.5rem;">Is a long take the same thing as a sequence shot?</h3>
      <p>Close, but not identical. A sequence shot is a long take that specifically contains what would normally be several separate scenes or story beats, all captured without a cut.</p>
      <h3 style="font-size:1.15rem; font-weight:600; margin-top:1.5rem; margin-bottom:0.5rem;">Where should I start if I want to see more long takes done well?</h3>
      <p>Touch of Evil's opening shot and Children of Men are two of the most studied examples. Our <a style="color:#c9a876; text-decoration:underline; text-underline-offset:3px;" href="/blog">other dispatches</a> and <a style="color:#c9a876; text-decoration:underline; text-underline-offset:3px;" href="/guide">Field Guide</a> both circle back to duration as a subject fairly often.</p>
    `,
  },
];

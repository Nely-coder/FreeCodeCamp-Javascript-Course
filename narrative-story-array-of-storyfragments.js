const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments (arrFrag) {
  let newArray = [];
  let foundUndefined = false;
  for (let i = 0; i < arrFrag.length; i++) {
    if (arrFrag[i] === undefined) {
        foundUndefined = true;
    } else {
        newArray.push(arrFrag[i]);
      }
    }
    if (foundUndefined) {
      console.log("[COMPACTED]")
    }
  return newArray;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);
// console.log(compactedShuffledFragments)

function sortFragments(fragments) {
  const sorted = [];

  for (let i = 0; i < fragments.length; i++) {
    const current = fragments[i];
    let inserted = false;

    for (let j = 0; j < sorted.length; j++) {
      if (current.id < sorted[j].id) {
        sorted.splice(j, 0, current);
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      sorted.push(current);
    }
  }

  return sorted;
}

const sortedFragments = sortFragments(compactedShuffledFragments);

function dedupeFragments(fragments) {
  const deduped = [];

  for (let i = 0; i < fragments.length; i++) {
    if (i === 0 || fragments[i].id !== fragments[i - 1].id) {
      deduped.push(fragments[i]);
    } else {
      console.log(`[DEDUPED] ${fragments[i].id}`);
    }
  }

  return deduped;
}

const dedupedFragments = dedupeFragments(sortedFragments);

function fillMissingFragments(fragments) {
  const filled = [];

  for (let i = 0; i < fragments.length; i++) {
    // Check if there is a gap before the current fragment
    if (i > 0) {
      let previousId = fragments[i - 1].id;
      let currentId = fragments[i].id;

      for (let id = previousId + 1; id < currentId; id++) {
        filled.push({
          id: id,
          text: "[...]"
        });

        console.log(`[FILLED] ${id}`);
      }
    }

    // Add the actual fragment
    filled.push(fragments[i]);
  }

  return filled;
}

const filledFragments = fillMissingFragments(dedupedFragments);

function assembleStory(fragments) {
  const story = [];

  for (let i = 0; i < fragments.length; i++) {
    story.push(fragments[i].text);
  }

  return story.join("\n");
}

console.log(assembleStory(filledFragments));
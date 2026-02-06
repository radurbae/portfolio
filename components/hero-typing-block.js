const HEADLINE_STAGGER_MS = 20;
const DESCRIPTION_STAGGER_MS = 11;
const HEADLINE_START_DELAY_MS = 120;
const DESCRIPTION_BUFFER_MS = 420;

function getHighlightCharacterIndexes(text, phrase) {
  const highlighted = new Set();

  if (!phrase || !text) {
    return highlighted;
  }

  const source = text.toLowerCase();
  const target = phrase.toLowerCase();
  let fromIndex = 0;

  while (fromIndex < source.length) {
    const matchIndex = source.indexOf(target, fromIndex);

    if (matchIndex === -1) {
      break;
    }

    for (let index = matchIndex; index < matchIndex + target.length; index += 1) {
      if (source[index] !== " ") {
        highlighted.add(index);
      }
    }

    fromIndex = matchIndex + target.length;
  }

  return highlighted;
}

function renderCharacterReveal(text, baseDelay, staggerDelay, highlightedIndexes = new Set()) {
  const words = text.split(" ");
  let charIndex = 0;

  return words.map((word, wordIndex) => {
    const characters = Array.from(word).map((char, indexInWord) => {
      const currentIndex = charIndex;
      const delay = baseDelay + charIndex * staggerDelay;
      charIndex += 1;
      const charClassName = highlightedIndexes.has(currentIndex)
        ? "hero-char hero-char-highlight"
        : "hero-char";

      return (
        <span
          key={`${wordIndex}-${indexInWord}-${char}`}
          aria-hidden="true"
          className={charClassName}
          style={{ "--char-delay": `${delay}ms` }}
        >
          {char}
        </span>
      );
    });

    if (wordIndex < words.length - 1) {
      const spaceDelay = baseDelay + charIndex * staggerDelay;
      charIndex += 1;

      characters.push(
        <span
          key={`${wordIndex}-space`}
          aria-hidden="true"
          className="hero-char hero-space"
          style={{ "--char-delay": `${spaceDelay}ms` }}
        >
          {"\u00A0"}
        </span>
      );
    }

    return (
      <span key={`word-${wordIndex}`} className="hero-word">
        {characters}
      </span>
    );
  });
}

export default function HeroTypingBlock({ headline, description, headlineHighlight }) {
  const headlineDuration = HEADLINE_START_DELAY_MS + Array.from(headline).length * HEADLINE_STAGGER_MS;
  const descriptionStart = headlineDuration + DESCRIPTION_BUFFER_MS;
  const headlineHighlightIndexes = getHighlightCharacterIndexes(headline, headlineHighlight);

  return (
    <>
      <h1
        aria-label={headline}
        className="mx-auto min-h-[6.8rem] max-w-[1120px] text-balance text-[clamp(1.85rem,5.2vw,4.25rem)] font-semibold leading-[1] tracking-[-0.02em] md:min-h-[9.8rem]"
      >
        {renderCharacterReveal(headline, HEADLINE_START_DELAY_MS, HEADLINE_STAGGER_MS, headlineHighlightIndexes)}
      </h1>

      <p
        aria-label={description}
        className="mx-auto mt-5 min-h-[6rem] max-w-[900px] text-balance text-[0.98rem] text-[#4c4c4c] md:min-h-[6.8rem] md:text-xl"
      >
        {renderCharacterReveal(description, descriptionStart, DESCRIPTION_STAGGER_MS)}
      </p>
    </>
  );
}

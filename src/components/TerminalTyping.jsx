import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import useViewportProfile from "../hooks/useViewportProfile";

const TerminalTyping = ({ lines }) => {
  const prefersReducedMotion = useReducedMotion();
  const { isMobile, isTablet } = useViewportProfile();
  const [displayedLines, setDisplayedLines] = useState(() => lines.map(() => ""));
  const [activeLine, setActiveLine] = useState(0);
  const [activeChar, setActiveChar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const timing = useMemo(
    () => ({
      charDelay: isMobile ? 28 : isTablet ? 24 : 20,
      lineDelay: isMobile ? 260 : 220
    }),
    [isMobile, isTablet]
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedLines(lines);
      setIsComplete(true);
      return undefined;
    }

    if (isComplete) {
      return undefined;
    }

    const currentLineText = lines[activeLine];

    if (!currentLineText) {
      setIsComplete(true);
      return undefined;
    }

    let timeoutId = 0;

    if (activeChar < currentLineText.length) {
      timeoutId = window.setTimeout(() => {
        setDisplayedLines((current) =>
          current.map((line, index) =>
            index === activeLine ? currentLineText.slice(0, activeChar + 1) : line
          )
        );
        setActiveChar((current) => current + 1);
      }, timing.charDelay);
    } else if (activeLine < lines.length - 1) {
      timeoutId = window.setTimeout(() => {
        setActiveLine((current) => current + 1);
        setActiveChar(0);
      }, timing.lineDelay);
    } else {
      setIsComplete(true);
    }

    return () => window.clearTimeout(timeoutId);
  }, [activeChar, activeLine, isComplete, lines, prefersReducedMotion, timing]);

  return (
    <div className="terminal-typing" aria-label="Terminal intro">
      <div className="terminal-typing__bar">
        <span />
        <span />
        <span />
      </div>
      <div className="terminal-typing__screen">
        {displayedLines.map((line, index) => {
          const isCurrentLine = index === activeLine && !isComplete;
          const showCursor = isCurrentLine || (isComplete && index === displayedLines.length - 1);

          return (
            <p key={`${index}-${lines[index]}`} className="terminal-typing__line">
              <span className="terminal-typing__prompt">&gt;</span>
              <span>{line}</span>
              {showCursor ? <span className="terminal-typing__cursor" aria-hidden="true" /> : null}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default TerminalTyping;

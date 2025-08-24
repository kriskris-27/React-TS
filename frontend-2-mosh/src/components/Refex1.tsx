import { useEffect, useRef } from "react";

export default function Refex1() {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div style={{ maxHeight: "150px", overflowY: "auto" }}>
      {[...Array(20)].map((_, i) => (
        <p key={i}>Message {i + 1}</p>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}

import { Fragment, useMemo } from "react";

/** 読解「④ 文法解説」内で論理接続語を検知して装飾する対象（データ側は変更しない） */
const CONNECTOR_PHRASES = [
  "However",
  "In contrast",
  "Despite",
  "Although",
  "But",
  "Nevertheless",
  "Because",
  "Due to",
  "Therefore",
  "As a result",
  "Consequently",
  "Led to",
  "For example",
  "Such as",
  "Additionally",
  "Furthermore",
  "Moreover",
  "In order to",
  "So that",
] as const;

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildConnectorRegex(): RegExp {
  const sorted = [...CONNECTOR_PHRASES].sort((a, b) => b.length - a.length);
  return new RegExp(`\\b(${sorted.map((p) => escapeRegExp(p)).join("|")})\\b`, "gi");
}

const CONNECTOR_RE = buildConnectorRegex();

function splitWithConnectors(text: string): { text: string; isConnector: boolean }[] {
  const parts = text.split(CONNECTOR_RE);
  const out: { text: string; isConnector: boolean }[] = [];
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part === undefined || part === "") continue;
    const isConnector = i % 2 === 1;
    out.push({ text: part, isConnector });
  }
  return out;
}

const markClass =
  "rounded-sm bg-amber-100 px-0.5 font-semibold text-slate-900 underline decoration-amber-700/70 underline-offset-2";

type LogicalConnectorTextProps = {
  text: string;
  className?: string;
};

/**
 * 解説テキスト内の論理接続語をハイライト（読解④専用で呼び出す想定）
 */
export function LogicalConnectorText({ text, className }: LogicalConnectorTextProps) {
  const segments = useMemo(() => splitWithConnectors(text), [text]);

  if (!text) {
    return <span className={className} />;
  }

  return (
    <span className={className}>
      {segments.map((seg, i) =>
        seg.isConnector ? (
          <mark key={i} className={markClass}>
            {seg.text}
          </mark>
        ) : (
          <Fragment key={i}>{seg.text}</Fragment>
        )
      )}
    </span>
  );
}

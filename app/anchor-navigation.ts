import type { MouseEvent } from "react";

export function navigateToAnchor(
  event: MouseEvent<HTMLAnchorElement>,
  id: string,
  focusTarget = false,
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return false;
  }

  const target = document.getElementById(id);
  if (!target) return false;

  event.preventDefault();
  const url = new URL(window.location.href);
  url.hash = id;
  window.history.replaceState(window.history.state, "", url);
  target.scrollIntoView({ block: "start" });
  if (focusTarget) target.focus({ preventScroll: true });
  return true;
}

"use client";

import { useEffect } from "react";

const soundCooldownMs = 80;
let audioContext: AudioContext | null = null;
let lastSoundAt = 0;

const isNavigationLink = (link: HTMLAnchorElement) => {
  const href = link.getAttribute("href");

  if (!href || href.startsWith("#")) return false;

  const destination = new URL(href, window.location.href);
  const currentPage = new URL(window.location.href);

  return destination.href !== currentPage.href;
};

const playClickSound = () => {
  const now = performance.now();

  if (now - lastSoundAt < soundCooldownMs) return;

  try {
    audioContext ??= new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(720, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
      440,
      audioContext.currentTime + 0.045,
    );
    gain.gain.setValueAtTime(0.025, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audioContext.currentTime + 0.055,
    );

    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.055);
    lastSoundAt = now;
  } catch {
    // Audio is an enhancement; unavailable browser audio must not affect interaction.
  }
};

export default function PortfolioSoundEffects() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.defaultPrevented) return;

      const target = event.target;

      if (!(target instanceof Element)) return;

      const interactiveElement = target.closest("a, button");

      if (
        !interactiveElement ||
        interactiveElement.matches(
          '[disabled], [aria-disabled="true"], [data-sound="off"]',
        )
      ) {
        return;
      }

      if (
        interactiveElement instanceof HTMLAnchorElement &&
        !isNavigationLink(interactiveElement)
      ) {
        return;
      }

      playClickSound();
    };

    document.addEventListener("click", handleClick, { capture: true });

    return () =>
      document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}

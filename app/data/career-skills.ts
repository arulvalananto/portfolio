import "server-only";

import { join } from "node:path";
import { readFile } from "node:fs/promises";

import { cache } from "react";

import type { CareerSkill } from "./types";

const skillsCatalogPath = join(process.cwd(), "content", "skills.md");

const getSkillColor = (title: string): string => {
  let hash = 5381;

  for (const character of title) {
    hash = (hash * 33) ^ character.charCodeAt(0);
  }

  const value = hash >>> 0;
  const hue = value % 360;
  const saturation = 64 + ((value >>> 8) % 22);
  const lightness = 43 + ((value >>> 16) % 15);

  return `hsl(${hue} ${saturation}% ${lightness}%)`;
};

export const parseCareerSkillsMarkdown = (markdown: string): CareerSkill[] => {
  const skills: CareerSkill[] = [];
  const seenTitles = new Set<string>();
  let category: string | null = null;

  for (const line of markdown.split("\n")) {
    const heading = /^##\s+(.+?)\s*$/.exec(line);

    if (heading) {
      category = heading[1];
      continue;
    }

    const item = /^-\s+(.+?)\s*$/.exec(line);

    if (!item) {
      continue;
    }

    if (!category) {
      throw new Error(
        `A skill entry must appear below a level-two category heading: ${item[1]}`,
      );
    }

    const title = item[1];
    const normalizedTitle = title.toLocaleLowerCase();

    if (seenTitles.has(normalizedTitle)) {
      throw new Error(`Duplicate career skill: ${title}`);
    }

    seenTitles.add(normalizedTitle);
    skills.push({ title, color: getSkillColor(title) });
  }

  if (skills.length === 0) {
    throw new Error(
      "The career skills catalog does not contain any skill entries.",
    );
  }

  return skills;
};

export const getCareerSkills = cache(async (): Promise<CareerSkill[]> => {
  const markdown = await readFile(skillsCatalogPath, "utf8");

  return parseCareerSkillsMarkdown(markdown);
});

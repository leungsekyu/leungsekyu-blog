import { atom } from 'nanostores'

export const selectedTags = atom<Set<string>>(new Set())

export function toggleTag(tag: string) {
  const currentTags = selectedTags.get()
  if (currentTags.has(tag)) {
    currentTags.delete(tag)
  } else {
    currentTags.add(tag)
  }
  selectedTags.set(new Set(currentTags))
}

export function indiaDate(now = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(now);
}

export function isPublished(data: { draft?: boolean; published: string }, today = indiaDate()): boolean {
  return !data.draft && data.published <= today;
}

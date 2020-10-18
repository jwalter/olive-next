function isoDateFormat(date: Date): string {
  return new Intl.DateTimeFormat('sv-SE').format(date);
}

export { isoDateFormat }

export function generateClassRooms(from: number, to: number, step: number, repeat: number) {
  const res: Array<{ code: string }> = [];

  for (let i = 1; i <= repeat; i++) {
    for (let j = from + i * step; j <= to + i * step; j++) {
      res.push({ code: j.toString() });
    }
  }

  return res;
}

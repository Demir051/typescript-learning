function getAvarage(...a: number[]): number {
    let total = 0;
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    const result = total / count;
    return result;
}
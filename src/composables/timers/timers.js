// Default delay
const DEBOUNCE_DELAY = 300;
// - Pass function and desired delay time
// - Returns Timer id, which can passed into clearTimeout() to terminate it early
// - The timer should also be called when the passed function is finished, 
// unless looping your logic is desired
export function DelayedCall(func, delay = DEBOUNCE_DELAY) {
    return setTimeout(func, delay);
  }
  
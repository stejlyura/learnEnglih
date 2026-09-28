/**
 * Safe client-side Web Speech API utterance
 */
export function speakText(text: string, rate: number = 0.92): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Clean slot notations like [X] or [verb-ing] for natural speech
  const cleanPronounce = text
    .replace(/\[X\]/gi, "something")
    .replace(/\[verb-ing\]/gi, "doing that")
    .replace(/\[verb\]/gi, "do that")
    .replace(/\[past participle\]/gi, "done that")
    .replace(/\[time\]/gi, "yesterday")
    .replace(/[\[\]]/g, "")
    .trim();

  const utterance = new SpeechSynthesisUtterance(cleanPronounce);
  utterance.rate = rate;
  utterance.pitch = 1.0;

  // Prefer English voices
  const voices = window.speechSynthesis.getVoices();
  const englishVoice = voices.find(
    (v) => (v.lang.startsWith("en-US") || v.lang.startsWith("en-GB")) && (v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Siri"))
  ) || voices.find((v) => v.lang.startsWith("en"));

  if (englishVoice) {
    utterance.voice = englishVoice;
  }

  window.speechSynthesis.speak(utterance);
}

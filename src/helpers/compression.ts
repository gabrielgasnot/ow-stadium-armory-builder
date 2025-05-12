import pako from "pako";

function strToUint8(str: string) {
  return new TextEncoder().encode(str);
}

function uint8ToStr(uint8: Uint8Array) {
  return new TextDecoder().decode(uint8);
}

export function compressString(input: string) {
  const compressed = pako.deflate(strToUint8(input));
  return btoa(String.fromCharCode(...compressed)); // Base64 encode
}

export function decompressString(input: string) {
  try {
    const binaryString = atob(input);
    const compressed = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      compressed[i] = binaryString.charCodeAt(i);
    }
    const decompressed = pako.inflate(compressed);
    return uint8ToStr(decompressed);
  } catch (error) {
    return null;
  }
}

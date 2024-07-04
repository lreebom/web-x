export declare const waitNextFrame: () => Promise<void>;
export declare const base64ToArrayBuffer: (base64: string) => ArrayBufferLike;
export declare const base64ToAudioBuffer: (base64: string) => Promise<AudioBuffer>;
/**
 * PCM数据转成 wav buffer
 * @param pcmData PCM 数据 例如new Int16Array([11,25,88,998])
 * @param sampleRate 采样率 例如44100
 * @param numChannels 通道数 例如2
 * @param bitsPerSample 位宽 例如16
 */
export declare const encodeWav: (pcmData: Int16Array, sampleRate: number, numChannels: number, bitsPerSample: number) => ArrayBuffer;

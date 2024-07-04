export const waitNextFrame = async (): Promise<void> => {
    return new Promise(resolve => {
        requestAnimationFrame(() => {
            resolve()
        })
    })
}

export const base64ToArrayBuffer = (base64: string): ArrayBufferLike => {
    let binaryString = window.atob(base64)
    let len = binaryString.length
    let bytes = new Uint8Array(len)
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i)
    }
    return bytes.buffer
}

export const base64ToAudioBuffer = async (base64: string): Promise<AudioBuffer> => {
    base64 = "data:audio/wav;base64," + base64
    const fetchResult = await fetch(base64)
    const audioArrayBuffer = await fetchResult.arrayBuffer()
    const audioContext = new AudioContext()
    return await audioContext.decodeAudioData(audioArrayBuffer)
}

/**
 * PCM数据转成 wav buffer
 * @param pcmData PCM 数据 例如new Int16Array([11,25,88,998])
 * @param sampleRate 采样率 例如44100
 * @param numChannels 通道数 例如2
 * @param bitsPerSample 位宽 例如16
 */
export const encodeWav = (pcmData: Int16Array, sampleRate: number, numChannels: number, bitsPerSample: number): ArrayBuffer => {
    const blockAlign = numChannels * bitsPerSample / 8
    const byteRate = sampleRate * blockAlign
    const dataSize = pcmData.length * (bitsPerSample / 8)
    const buffer = new ArrayBuffer(44 + dataSize)
    const view = new DataView(buffer)

    function writeString(view: DataView, offset: number, str: string): void {
        for (let i = 0; i < str.length; i++) {
            view.setUint8(offset + i, str.charCodeAt(i))
        }
    }

    // RIFF header
    writeString(view, 0, "RIFF")
    view.setUint32(4, 32 + dataSize, true)
    writeString(view, 8, "WAVE")

    // fmt subchunk
    writeString(view, 12, "fmt ")
    view.setUint32(16, 16, true)  // SubChunk1Size
    view.setUint16(20, 1, true)   // PCM = 1
    view.setUint16(22, numChannels, true)
    view.setUint32(24, sampleRate, true)
    view.setUint32(28, byteRate, true)
    view.setUint16(32, blockAlign, true)
    view.setUint16(34, bitsPerSample, true)

    // data subchunk
    writeString(view, 36, "data")
    view.setUint32(40, dataSize, true)

    // Write PCM data
    let offset = 44
    for (let i = 0; i < pcmData.length; i++) {
        view.setInt16(offset, pcmData[i], true)
        offset += 2
    }

    return buffer
}

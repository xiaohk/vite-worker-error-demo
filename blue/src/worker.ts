import { pipeline } from '@xenova/transformers';

/**
 * Helper function to handle calls from the main thread
 * @param e Message event
 */
self.onmessage = (e: MessageEvent) => {
  // Use pipeline to avoid TS error
  console.log(pipeline);
  console.log('Hello from the blue worker!', e);
};

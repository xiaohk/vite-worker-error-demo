import BlueWorker from './worker.ts?worker&inline';

const worker = new BlueWorker();
worker.postMessage({ message: 'start' });

export const greet = () => {
  console.log('Hello from the blue main!');
};

greet();

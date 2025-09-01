/* @refresh reload */
import { render } from 'solid-js/web';
import { createSignal } from 'solid-js';
import './style.css';

function App() {
  const [count, setCount] = createSignal(0);
  return (
    <main class="min-h-screen bg-gray-50 text-gray-900 p-8">
      <h1 class="text-3xl font-bold">SolidJS + Tailwind</h1>
      <p class="mt-2 text-gray-600">Vite + Solid + Tailwind in Turborepo</p>
      <button
        class="mt-6 rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        onClick={() => setCount(count() + 1)}
      >
        Count: {count()}
      </button>
    </main>
  );
}

render(() => <App />, document.getElementById('root')!);



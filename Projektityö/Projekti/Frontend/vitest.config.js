import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles:'./Frontend/vitest.setup.js',
        include: ['Tests_unit/**/*.{test,spec}.{js,ts,jsx,tsx}'], // Oikea kansio!
        exclude: ['Tests_e2e', 'e2e', 'node_modules'],   
    },
});
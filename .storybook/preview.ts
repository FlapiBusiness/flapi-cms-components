import type { Preview } from '@storybook/vue3'
import '../src-app/assets/css/tailwind.css'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    docs: {
      toc: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview

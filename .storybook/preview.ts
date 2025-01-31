import type { Preview } from '@storybook/vue3'
import '../src/runtime/assets/css/tailwind.css'
import configureVeeValidate from '#/plugins/VeeValidate'

/*vee-validate*/
configureVeeValidate()

const preview: Preview = {
  //👇 Enables auto-generated documentation for all stories
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#101623' },
      ],
    },
    docs: {
      toc: true, // 👈 Enables the table of contents
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

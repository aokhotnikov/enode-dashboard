module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.ts'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
	extend: {
	  colors: {
		primary: 'var(--color-primary)',
		secondary: 'var(--color-secondary)',
		danger: 'var(--color-danger)',
	  },
	  backgroundColor: {
		primary: 'var(--color-primary-background)',
		toolbar: 'var(--color-toolbar-background)',
	  },
	  borderColor: {
		primary: 'var(--color-primary-border)',
	  },
	  fontFamily: {
		'body': ['-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Roboto', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
	  }
	},
  },
  variants: {
    extend: {
	  backgroundColor: ['active'],
    },
  },
  plugins: [],
};

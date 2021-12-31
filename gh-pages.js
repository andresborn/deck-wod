var ghpages = require('gh-pages');

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/andresborn/deck-wod', // Update to point to your repository
		user: {
			name: 'andresborn', // update to use your name
			email: 'andresborn@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);

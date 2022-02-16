You can checkout the page generated for this repo here: https://wahyurahmaniar.github.io

## Making your own CV

To make your own GitHub hosted CV:

1. Fork this repo into your github account 
2. Click the "Settings" button in your new forked repository (in the menu on the right), and change the repository's name to {{yourusername}}.github.io, replacing yourusername with your GitHub user name.
3. Update /_config.yml with the details of your CV - the comments will explain what is required
4. Visit https://{{yourusername}}.github.io to check it out
5. Share your new CV/Profile with the world!

Additional from me:
1. Publications --> /_includes/section_github.html
2. Achievement and Awards --> /_includes/section_coursera.html
3. Previous Research --> /_includes/section_blogs.html
4. Work Experience --> /_includes/section_additionalinfo.html
5. Guest Lecture --> /_includes/section_speakerdeck.html
6. Resume --> /_includes/section_stackoverflow.html


If you want to test it locally, install Ruby & Jekyll, clone the repository locally and run "jekyll serve" from the repo root directoy.

If you want to host the page on your own web hosting, you will need to run it locally and jekyll will build the site files to the /_site directory which you can then push to your hosting provider - See https://jekyllrb.com/ for details.



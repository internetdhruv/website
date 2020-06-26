# My Personal Website

This is the source to my [website](https://dhruv-sharma.com).

Currently, I host this through a VPS, but I have previously done it using free services like netlify without any problems.

## Can I use this as a template for my own website?

Yes. HOWEVER, you must credit me for the design. I spent my own time making this and while I don't have any issue with someone copying it, not citing me will be both unethical and in violation of my license. I require that the footer of this website remains entirely unchanged. Any forks of this repository that make any modifcations will have the same requirement. Also, leave a star on this repo if you like it / are using the design. While that doesn't directly help me in any meaningful way, it tells me that people are using this design and motivates me to fix bugs, respond to issues, and improve it.

Everything I said here is in addition to the license provided in the source.

## How do I edit this to put my own content in

Almost all of the configuration is done through files in `src/config`. Theme colors can be changed in `src/components/Themes.js`. If you can't change something that you would like to change using the config files, try looking at appropriately named files in `src/components`. If you cannot find it easily, look ar `src/App.js` and go from there, looking at each component being rendered. If you still need help, open an issue or contact me directly; though I would prefer opening an issue.

The website is designed in a way that makes it fairly easy to change content. However, you will still have to play around with things; remove stuff you dont want, add stuff you want, change a bit of the design. If you think theres a way to move things into the config files to make the site easier to edit (there are; I just didn't feel the need to do it when I made it), open a pull request.

Off the top of my head, stuff in `public/*.html` and `public/faviconData` etc needs to be changed manually. I also use some scripts on my server that render favicons for different platforms and keep them up to date. You'll have to figure out a solution for that if you want the same features. I also have google analytics tracking, and a simple `.env` file will activate that for you. Read the source to figure out what environment variables you will need.

## How to run this?

`yarn install` to install packages.
`yarn start` for local development.
`yarn build` to build.

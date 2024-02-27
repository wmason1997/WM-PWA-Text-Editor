# WM-PWA-Text-Editor


## Table of Contents
* [Description](#description)
* [Deployed Application](#deployed-application)
* [Installation](#installation-instructions)
* [Usage](#usage-instructions)
* [Screenshots](#screenshots)
* [Credits](#credits)
* [Contributing](#contribution-guidelines)
* [Questions](#questions)

## Description <a name="description"></a> 
This is a single-page application that meets Progressive Web Application (PWA) criteria. J.A.T.E. features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application also functions offline.

In building this text editor, I started with an existing application from the 19-PWA folder of [UCSD-VIRT-FSF-PT-09-2023-U-LOLC](https://git.bootcampcontent.com/University-of-California---San-Diego/UCSD-VIRT-FSF-PT-09-2023-U-LOLC). I used Webpack and a package called `idb`, which is a lightweight wrapper around the IndexedDB API. It features a number of methods that are useful for storing and retrieving data, and is used by companies like Google and Mozilla.

## Deployed Application <a name="deployed-application"></a>
Deployed application on Render is here: [https://wm-pwa-text-editor.onrender.com/](https://wm-pwa-text-editor.onrender.com/).

## Installation <a name="installation-instructions"></a>
Clone this repository locally. Then in terminal, run:
```md
npm i
```

## Usage <a name="usage-instructions"></a>
In terminal, run:
```md
npm run start
```

and open in browser at the specified port. In this case, it is 3000.

## Screenshots <a name="screenshots"></a>
![Screenshot 1](/Assets/WM-PWA-Text-Editor-1.png)
![Screenshot 2](/Assets/WM-PWA-Text-Editor-2.png)


## Credits <a name = "credits"></a>
I started with an existing application from the 19-PWA folder of [UCSD-VIRT-FSF-PT-09-2023-U-LOLC](https://git.bootcampcontent.com/University-of-California---San-Diego/UCSD-VIRT-FSF-PT-09-2023-U-LOLC) Gitlab repository.

I met with tutor Jacob Carver on Saturday (02/24/2024) and they helped me to successfully deploy my current iteration of the project on Render. It turns out I was using the wrong PORT (10000) and an incorrect NODE_VERSION in my environment variables. Jacob helped me to figure out that I needed to include ```opt/render/project/src/server/client/dist/index.html``` as an included path in my settings on Render based on some error messages that were in the logs. Thanks, Jacob!


## Contributing <a name="contribution-guidelines"></a>
Be respectful and please reach out if you have any suggestions. Thank you.


## Questions <a name="questions"></a>
Please feel free to reach out to me with questions or suggestions for this app.<br>
My GitHub user name is wmason1997 and here is my profile: [https://github.com/wmason1997](https://github.com/wmason1997).<br>
My email is williamcmason1997@gmail.com.
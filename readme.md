# _Mr Robogers Neighborhood_

#### _An application that will return a greeting to the user, 6.12.2020_

#### By _**Taylor Phillips**_

## Description

_This web application was a friday project that required the use of a JavaScript loop.  When a user enters a number and pushes submit, a range of numbers will be returned that go from 0 to the number selected/inputted by the user.  Additionally, in that return, every number containing a 1 will be returned as a "Beep!" instead of that number.  If the number value contains a 2 in the list of numbers then that number will instead be returned as the word, "Boop." . And if the number in the list has a 3, then it will be returned as "Won't you be my neighbor?" For this web application, "3's" will override the return action of the 2 and the 1, and "2's" will override the return action of the 1_

   ### Application Specs

| Behavior  | Sample Input | Output |
| :--------:  | :---------: | :-----: |
| When user provides a number, a range of numbers will be returned in the order of 0 to that number given  |  7 | 0,1,2,3,4,5,6,7  |
| When a number in the list contains a 1, it will be returned as "Beep!"  | 5 | 0,Beep!,2,3,4,5 |
| If a number in the returned list of numbers contains a 2 then it will return "Boop."  | 7 | 0,Beep!,Boop.,3,4,5,6,7 |
| When there is a 3 within a number, it will be switched to "Won't you be my neighbor?" | 3 | 0,Beep!,Boop.,Won't you be my neighbor? |
| Within the returned number range, Number's containing 2's will ovverride 1's  | 12  | 0,.....8,9,Beep!,Beep!,Boop.  |
| As 2's override 1's, number's containing a 3 will override both 1's and 2's to return "Won't you be my neighbor" | 132 | 0,.......,Won't you be my neighbor? |

## Setup/Installation Requirements

* _Install Git Bash_
* _Using a Terminal on desktop, user will need to type git init_
* _go to this repository and clone then Open in Desktop_
* _Will likely need Git for Desktop which can be found here: https://help.github.com/en/desktop/getting-started-with-github-desktop/installing-github-desktop_
* _Clone file to desktop from repo on github_
* _run index.html with web browser_
* _Other option is to go to Repository on git hub and download zip_
* _Retrieve zip file in downloads on computer and double click to unpack_
* _Find the project folder on desktop or downloads folder_
* _Run index.html with web browserThis is a great place_

## Known Bugs

_There are no known bugs_

## Support and contact details

_You can contact me through my github page_

## Technologies Used

_HTML_
_CSS_
_Bootstrap_
_JavaScript_
_jQuery_
_VSCode_

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2020 **_Taylor Phillips_**

const year = new Date().getFullYear();

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case 'Apache':
      return "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
    case 'GPL v3':
      return "https://img.shields.io/badge/License-GPLv3-blue.svg";
    case 'BSD 2-Clause':
      return "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg";
    case 'BSD 3-Clause':
      return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
    default:
      return "";
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";

  switch (license) {
    case 'MIT':
      link = "https://opensource.org/licenses/MIT";
      break;
    case 'Apache':
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
    case 'GPL v3':
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case 'BSD 2-Clause':
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case 'BSD 3-Clause':
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    default:
      return "";
  };

  let badge = renderLicenseBadge(license);
  let licenseBadge = "[![License: " + license + "](" + badge + ")](" + link + ")";

  return licenseBadge;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  let licenseText = "";

  if (!license) {
    return "";
  } else {
    switch (license) {

      case 'MIT':
        licenseText = `Copyright ${year} ${name}

        Permission is hereby granted, free of charge, to any person obtaining a copy of this 
        software and associated documentation files (the "Software"), to deal in the Software 
        without restriction, including without limitation the rights to use, copy, modify, 
        merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
        permit persons to whom the Software is furnished to do so, subject to the following 
        conditions:
        
        The above copyright notice and this permission notice shall be included in all 
        copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
        INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
        PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
        FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
        OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
        DEALINGS IN THE SOFTWARE.`;
        break;

      case 'Apache':
        licenseText = `Copyright ${year} ${name}

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
     
          http://www.apache.org/licenses/LICENSE-2.0
     
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.`;
        break;

      case 'GPL v3':
        licenseText = `Copyright (C) ${year}  ${name}

        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.
    
        You should have received a copy of the GNU General Public License
        along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
        break;

      case 'BSD 2-Clause':
        licenseText = `Copyright ${year} ${name}

        Redistribution and use in source and binary forms, with or without 
        modification, are permitted provided that the following conditions are met:
        
        1. Redistributions of source code must retain the above copyright notice, 
        this list of conditions and the following disclaimer.
        
        2. Redistributions in binary form must reproduce the above copyright notice, 
        this list of conditions and the following disclaimer in the documentation 
        and/or other materials provided with the distribution.
        
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
        AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
        WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. 
        IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, 
        INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES 
        (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; 
        LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND 
        ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT 
        (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS 
        SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
        break;

      case 'BSD 3-Clause':
        license = `Copyright ${year} ${name}

        Redistribution and use in source and binary forms, with or without modification,
        are permitted provided that the following conditions are met:
        
        1. Redistributions of source code must retain the above copyright notice, 
        this list of conditions and the following disclaimer.
        
        2. Redistributions in binary form must reproduce the above copyright notice, 
        this list of conditions and the following disclaimer in the documentation 
        and/or other materials provided with the distribution.
        
        3. Neither the name of the copyright holder nor the names of its contributors 
        may be used to endorse or promote products derived from this software without 
        specific prior written permission.
        
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
        AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED 
        WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. 
        IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, 
        INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, 
        BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, 
        DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, 
        WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
        ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
        break;

      default:
        return "";
    };
  };

  return licenseText;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  return `  # ${data.title}

  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Tests
  ${data.testing}

  ## Questions
  Any questions can be directed at the primary author via: <br>
  [GitHub](https://github.com/${data.github}) <br>
  [Contact Me!](mailto:${data.email})

  ## Credits
  ${data.contributors}

  ## License
  ${renderLicenseSection(data.license, data.contributors)}
`;
}

module.exports = generateMarkdown;

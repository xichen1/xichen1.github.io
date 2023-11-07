"use strict";(self.webpackChunkppx_gatsby_blog=self.webpackChunkppx_gatsby_blog||[]).push([[389],{1716:function(e,t,n){n.r(t),n.d(t,{Head:function(){return h},default:function(){return u}});var l=n(6736),a=n(959);function r(e){const t=Object.assign({h2:"h2",ol:"ol",li:"li",pre:"pre",code:"code"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h2,null,"Prepare the Raspberry Pi"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"install the Raspberry Pi os into the microSD card, setup the username/password before write into card"),"\n",a.createElement(t.li,null,"power on the Pi and plug in the network cable"),"\n",a.createElement(t.li,null,"get the ip address of the Pi through the router admin page"),"\n",a.createElement(t.li,null,"on another machine ssh into the Pi"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"ssh pi@<ip address of pi>\n")),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"enable tcp forwarding for ssh(if you want to use vscode to remote work on it)"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"sudo vim /etc/ssh/sshd_config\n\n# Change AllowTcpForwarding to yes\n")),"\n",a.createElement(t.h2,null,"Write a service using express and nodeJS"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"prepare the work space"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"mkdir dev\ncd dev\nnpm init -y\nnpm install express\ntouch server.js\n")),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"write the welcome service"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'# in server.js\nconst express = require("express");\nconst app = express();\n\napp.get("/", (req, res) => {\n  res.send(`\n    <!DOCTYPE html>\n    <html>\n      <body>\n        <h1>Welcome</h1>\n      </body>\n    </html>\n    `);\n});\n\napp.listen(5000, () => {console.log(`http://localhost:5000`)});\n')),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"run the service and we should be able to see the welcome page on any machine's browser using the ip address"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"node server.js\n# open browser on any machine under the same wifi network of the Pi and enter the ip address of the Pi and port 5000 in address bar of the browser.\n# e.g., 192.168.1.75:5000\n# You should be able to see a welcome page.\n")),"\n",a.createElement(t.h2,null,"Replace the Nodejs server with the Nginx server"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"install Nginx"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"sudo apt install nginx\n")),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"set up the reverse proxy, by enabling the reverse proxy, we added a layer between nodeJS server and the client side to realize the load balance"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"sudo vim /etc/nginx/sites-available/default\n# in the default file, add one line (proxy_pass) to the location / section\n\nlocation / {\n          proxy_pass http://localhost:5000;\n          try_files $uri $uri/ =404;\n}\n")),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"now if we use any browser under the same wifi network to access the ip address, we can see the welcome page. All the request going to the ip will be handled by Nginx and be sent to localhost:5000 then."),"\n"),"\n",a.createElement(t.h2))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},c=n(9980),o=n(3090),i=n(5731),d=n(6564);const m={code:e=>{let{children:t,className:n}=e;return n?a.createElement(i.Z,{className:n},t):a.createElement("code",{className:"bg-bg-code-light dark:bg-bg-code-dark text-font-code-light dark:text-font-code-dark"},t)}},p=e=>{const{data:t,children:n}=e;if(!t.mdx||!t.mdx.frontmatter)return null;const r=t.mdx.frontmatter;return a.createElement(c.Z,{pageTitle:r.title},a.createElement("div",null,a.createElement("header",{className:"pt-6 xl:pb-6"},a.createElement("div",{className:"text-center space-y-1"},a.createElement("div",{className:"space-y-10"},a.createElement("div",null,a.createElement("p",{className:"text-base font-medium leading-6 text-teal-500"},r.date))),a.createElement("div",null,a.createElement("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"},r.title)))),a.createElement("div",{className:"divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0"},a.createElement("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0"},a.createElement("div",{className:"prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg prose-pre:p-0 prose-pre:m-0 prose-pre:bg-transparent"},a.createElement(l.Zo,{components:m},n))))),a.createElement(d.Z,null))},h=e=>{const{data:t,children:n}=e;if(!t.mdx||!t.mdx.frontmatter)return null;const l=t.mdx.frontmatter;return a.createElement(a.Fragment,null,a.createElement("html",{lang:"en"}),a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/qweather-icons@1.4.0/font/qweather-icons.css"}),a.createElement(o.Z,{title:l.title,des:l.description}))};function u(e){return a.createElement(p,e,a.createElement(s,e))}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-query-id-tsx-content-file-path-blog-service-on-raspberrypi-index-mdx-ecb6eedff3c7c9142535.js.map
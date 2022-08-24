# Coding mates FE repo

Structure is a general nextjs component based directory structure.

### pages

This is where `.tsx` files should be placed. Where all the file components go.
Pages files are always going through a `Layout` component as a children.

Inside `Layout` component you're supposed to give layout type and page meta datas.
meta datas go inside the public foler with all the static files as a json file.

### components

Where components are going. According to the domain, authentication, services it will be divided into
specific categories.

### core

Where the controller and apis go. All the apis are defined inside a controller as a class.

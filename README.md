# NodeJS, Express, Typescript starter kit.

This is just another starter kit for NodeJS API focused applications.

## Description

This projects comes with everything needed to start developing an NodeJS Express application with TypeScript. It comes with support for tslint, mocha, chai and nodemon for local development. Also has dockerfile ready for deployment in any container service like GCP, AWS, AZURE etc.

## Getting Started

### Dependencies

This project does not have any special dependencies, it was tested with node v14.16.0 and npm v6.14.11

### Installing

```
npm install
```

### Executing program

```
npm start
```

The npm start will run default test, tslint and build all *.ts files into the dist folder.

If you want to use this app with docker, just build the image with the dockerfile and create container with docker run or docker-compose.
```
docker build -t [project-name]:[tag] .
docker run -d --name [project-name] -p 3000:8080 [project-name]:[tag]
```
## Help

Any problem please refer to my github account.

## Authors

Contributors names and contact info

ex. Joshe Oñate
ex. [@JosheOnate](https://www.linkedin.com/in/josheonate)

## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the GNU General Public Family License - see the LICENSE.md file for details

## Acknowledgments

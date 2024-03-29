
# React Status

Live Status application provides a list of nodes and their respective status (Loading/Online/Offline). 

The current application is displaying a list of nodes. Each node represents a server which has many blocks and the blocks for each node are returned from the blocks endpoint.
The application is getting the status for each node and updating the state automatically. 

[Demo](https://jreisz.github.io/status/)

![Screenshot](./demo.gif)

## Development

```sh
$ git clone https://github.com/jreisz/status
$. `npm install` – install dependencies
$. `npm test` – run all tests 
$. `npm test:cover` – run test coverage 
$. `npm start` – serve the app at [http://localhost:3000/](http://localhost:3000/) (it automatically opens the app in your default browser)
```

## Contributing

Changes and improvements are more than welcome! Feel free to fork and open a pull request. Please make your changes in a specific branch and request to pull into `master`! If you can, please make sure the game fully works before sending the PR, as that will help speed up the process.

## TODO

- UX/UI Styling

## License

[GNU v3.0](https://opensource.org/licenses/GPL-3.0)

Copyright (c) Juan Manuel Reisz 2021
>>>>>>> develop

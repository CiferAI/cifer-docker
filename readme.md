# Cifer Blockchain
**Cifer Blockchain** streamlines the development of AI applications.
Built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli). It empowers developers to focus on building robust AI applications through:

- <strong>Byzantine Robust Federated Learning consensus mechanism:</strong> Ensures secure and fault-tolerant collaboration for decentralized AI model training.
- <strong>5-second Block Time:</strong> 2.4x faster than Ethereum to facilitates efficient development of AI-powered projects.
- <strong>Focus on Machine Learning:</strong> Designed specifically for robust machine learning workflows.


## Get started

### Running Cifer Blockchain using Docker ###
> This easy-to-use installation method is recommended for local development.

**1. Build the Cifer Docker Image**

Run the following command to build a Docker image for Cifer Chain:
```
$ docker build -f Dockerfile . -t cifer_i
```

**2. Create and Run a Cifer Container**

The next step involves creating a container based on the built image and mapping the necessary ports. Here's an example command with explanations for each part:
```
$ docker create --name cifer \ 
   -i \ 
   -v $(pwd):/cifer \ # Mount current directory to /cifer within container 
   -w /cifer \ # Set working directory within container 
   -p 6060:6060 \ # Map container port 6060 to host port 6060 (customizable) 
   -p 26656:26656 \ # Map container port 26656 to host port 26656 (Tendermint RPC) 
   # ... (other ports as needed) 
   cifer_i
```

After running this command, your Cifer container will be created but not yet started.
Start Cifer Docker Image.
```
$ docker start cifer
```

**3. Starting Blockchain**

Run the following command to start the Cifer Chain within the container
```
$ docker exec -it cifer ignite chain serve --reset-once
```

The `serve` command streamlines the development process by handling:

- Dependency installation
- Building the blockchain application
- Initialization
- Starting the Cifer Chain node in development mode


## Learn more

- [CiferAI Official Website](https://www.cifer.ai)
- [Ignite CLI](https://ignite.com/cli)
- [Ignite CLI docs](https://docs.ignite.com)
- [Cosmos SDK docs](https://docs.cosmos.network)

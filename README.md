# **Pub/Sub with NodeJS and Redis**

Example of how to use Pub/Sub with NodeJS and Redis

## Setup
<<<<<<<<< Temporary merge branch 1
Navigate to both publisher and subscriber folders to download the dependency for each node js application
=========
Navigate to both publisher and subscriber folders to install the dependency for each node js application
>>>>>>>>> Temporary merge branch 2

Publisher folder:
```
    cd publisher
    npm install
```

Subscriber folder: 
```
    cd subscriber
    npm install
```

## Running
All you have to do is running docker-compose (make sure you are in the project's root directory)
```
    docker-compose up --build -d
```

## Testing
The publisher app is running on port 8080 and provides an endpoint for creating an user in memory (/POST users). The subscriber app is running on port 8081 and does not provide any endpoint.

**Request information:** <br/>
URL: localhost:8080/users <br/>
Body: {
	"name": "Eduardo",
	"email": "eduardo@mail.com",
	"age": 21
} <br />

After creating a new user, the publisher app will publish the message to redis, which will send the message to the subscriber. When the subscriber receives the message, it will only log a message informing that the message was received and that it is going to send an email to the user (no email is actually sent). 
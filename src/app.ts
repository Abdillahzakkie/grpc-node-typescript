import * as grpcLibrary from "@grpc/grpc-js";
import { protoPackageLoader } from "./constants";
import { HelloRequest, HelloResponse, sayHello } from "./controllers";

interface Server {
	[key: string]: any;
	SayHello: grpcLibrary.handleUnaryCall<HelloRequest, HelloResponse>;
}

const server = new grpcLibrary.Server();

const protoPackage = protoPackageLoader({
	path: "greeter.proto",
	packageName: "greeter",
});

if (protoPackage && protoPackage["GreeterService"]) {
	server.addService(protoPackage["GreeterService"].service, {
		SayHello: sayHello,
	} as Server);
}

export default server;

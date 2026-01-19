import * as grpcLibrary from "@grpc/grpc-js";
import { protoPackageLoader } from "./constants";
import { sayHello } from "./controllers";
import type { ProtoGrpcType as GreeterServiceProtoType } from "./proto/generated/greeter";
import { authInterceptor, loggingInterceptor } from "./interceptors";

const server = new grpcLibrary.Server({
	interceptors: [loggingInterceptor, authInterceptor],
});

const protoPackage = protoPackageLoader<GreeterServiceProtoType>({
	path: "greeter.proto",
});

server.addService(protoPackage.greeter.GreeterService.service, {
	SayHello: sayHello,
});

export default server;

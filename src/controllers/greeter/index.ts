import * as grpcLibrary from "@grpc/grpc-js";

export interface HelloRequest {
	first_name: string;
	last_name: string;
}

export interface HelloResponse {
	message: string;
}

export const sayHello: grpcLibrary.handleUnaryCall<
	HelloRequest,
	HelloResponse
> = (
	call: grpcLibrary.ServerUnaryCall<HelloRequest, HelloResponse>,
	callback: grpcLibrary.sendUnaryData<HelloResponse>
) => {
	const firstName = call.request.first_name;
	const lastName = call.request.last_name;
	const message = `Hello, ${firstName} ${lastName}!`;
	callback(null, { message });
};

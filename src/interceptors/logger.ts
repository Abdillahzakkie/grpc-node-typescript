import * as grpcLibrary from "@grpc/grpc-js";

function logger(format: string, ...args: string[]) {
	console.log(`LOG (server):\t${format}\n`, ...args);
}
export default function loggingInterceptor(
	_methodDescriptor: grpcLibrary.ServerMethodDefinition<any, any>,
	call: grpcLibrary.ServerInterceptingCallInterface,
) {
	const listener = new grpcLibrary.ServerListenerBuilder()
		.withOnReceiveMessage((message, next) => {
			logger(
				`Receive a message ${JSON.stringify(
					message,
				)} at ${new Date().toISOString()}`,
			);
			next(message);
		})
		.build();
	const responder = new grpcLibrary.ResponderBuilder()
		.withStart((next) => {
			next(listener);
		})
		.withSendMessage((message, next) => {
			logger(
				`Send a message ${JSON.stringify(
					message,
				)} at ${new Date().toISOString()}`,
			);
			next(message);
		})
		.build();
	return new grpcLibrary.ServerInterceptingCall(call, responder);
}

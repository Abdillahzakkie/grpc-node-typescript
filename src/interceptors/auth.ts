import * as grpcLibrary from "@grpc/grpc-js";

function validateAuthorizationMetadata(_metadata: grpcLibrary.Metadata) {
	// const authorization = metadata.get("authorization");
	// if (authorization.length < 1) {
	// 	return false;
	// }
	// return authorization[0] === "some-secret-token";
	return true;
}

export default function authInterceptor(
	_methodDescriptor: grpcLibrary.ServerMethodDefinition<any, any>,
	call: grpcLibrary.ServerInterceptingCallInterface,
) {
	const listener = new grpcLibrary.ServerListenerBuilder()
		.withOnReceiveMetadata((metadata, next) => {
			if (validateAuthorizationMetadata(metadata)) {
				next(metadata);
			} else {
				call.sendStatus({
					code: grpcLibrary.status.UNAUTHENTICATED,
					details: "Auth metadata not correct",
				});
			}
		})
		.build();
	const responder = new grpcLibrary.ResponderBuilder()
		.withStart((next) => {
			next(listener);
		})
		.build();
	return new grpcLibrary.ServerInterceptingCall(call, responder);
}

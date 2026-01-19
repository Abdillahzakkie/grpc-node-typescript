import type { Options } from "@grpc/proto-loader";

interface IProtoLoaderOptions extends Options {}

export const protoLoaderOptions: IProtoLoaderOptions = {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true,
};

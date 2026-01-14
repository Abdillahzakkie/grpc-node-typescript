import * as grpcLibrary from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { resolve } from "node:path";
import { protoLoaderOptions } from "./protoLoaderOptions";
import { BASE_PROTO_FOLDER } from "./environments";

export default function protoPackageLoader<T>({
	basePath = BASE_PROTO_FOLDER,
	path,
}: {
	basePath?: string;
	path: string;
}): T {
	const fullPath = resolve(__dirname, "../../src", basePath, path);

	const packageDefinition = protoLoader.loadSync(fullPath, protoLoaderOptions);

	const protoDescriptor = grpcLibrary.loadPackageDefinition(packageDefinition);
	const resolvedPackage = protoDescriptor as T;
	return resolvedPackage;
}

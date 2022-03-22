const { s3_bucket_name, s3, s3_domain_name } = require("../configs/index");

export const deleteImagAvatar = async (rulOld: string) => {
	if (rulOld.includes(s3_bucket_name)) {
		console.log("ok");
		return;
	}
	let cutLeght: number = s3_domain_name.length + 1;
	console.log(cutLeght);
	let urlCut: string = rulOld.slice(cutLeght);
	console.log(urlCut, "urlCut");
	//let urlCut =  data + "/"

	const params = {
		Bucket: s3_bucket_name + "/avatar",
		Key: urlCut,
	};

	try {
		await s3.deleteObject(params).promise();
	} catch (error) {
		console.log(error);
		throw error;
	}
};

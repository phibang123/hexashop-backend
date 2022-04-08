const { s3_bucket_name, s3, s3_domain_name } = require('../configs/index');

import sharp from 'sharp';

export const putImagPicture = async (data: any, tenSanPham: string) => {
  const { buffer, originalname, mimetype, size } = data;

  if (size >= 3000000) {
    throw new Error('Ảnh phải nhỏ hơn 3mb');
  }

  if (!originalname.match(/\.(jpg|jpeg|png)$/)) {
    throw new Error('Chỉ nhận ảnh');
  }

  const dst = `picture/${tenSanPham}/${Date.now()}_${originalname}`;

  const bufferSharp = await sharp(buffer).resize({ width: 500, height: 750 }).png().toBuffer();

  const params = {
    Bucket: s3_bucket_name,
    Key: dst,
    Body: bufferSharp,
    ContentType: mimetype,
  };

  try {
    await s3.putObject(params).promise();
    const url: string = `${s3_domain_name}/${dst}`;
    return `http://${url.split(' ').join('%20')}`;
  } catch (error) {
    throw error;
  }
};

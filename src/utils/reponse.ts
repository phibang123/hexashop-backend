// hàm format kết quả trả về của API khi thành công cho client
const moment = require('moment');

interface IResp {
  success: boolean;
  data: any;
  message: any;
  status: number;
  statusText: string;
  dateTime: string;
  messageConstants: null;
}

export const ReS = (code: number, data: any, message?: string): object => {
  const resp: IResp = {
    success: true,
    data: data,
    message: message ? message : 'Xử lý thành công!',
    status: code,
    statusText: code.toString(),
    dateTime: moment().format(),
    messageConstants: null,
  };

  return { ...resp };
};

// hàm format kết quả trả về của API khi thất bại cho client
export const ReE = (code: number, err?: string, messages?: any): object => {
  const resp: IResp = {
    success: false,
    dateTime: moment().format(),
    messageConstants: null,
    status: code,
    statusText: code.toString(),
    message: Array.isArray(messages) ? messages.map((e) => e.message) : typeof messages === 'object' ? messages : messages,
    data: err ? err : 'Có gì đó đang lỗi!',
  };

  return { ...resp };
};

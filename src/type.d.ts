// 消息类型
type MessageType = "text" | "back" | "self";

// 单条消息信息
interface Item {
  id?: string;
  type: MessageType;
  text: string;
}

// submit 返回值类型
interface CallBack {
  status: "error" | "success";
  message: string;
}

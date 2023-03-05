import { defineStore } from 'pinia';
import { nanoid } from 'nanoid';

export const useStore = defineStore('global', {
  state() {
    return {
      user: window.localStorage.getItem('user') || '',
      key: window.localStorage.getItem('key') || '',
      list: [] as Item[]
    }
  },
  actions: {
    setUser(value: string) {
      window.localStorage.setItem('user', value);
      this.user = value;
    },
    setKey(value: string) {
      window.localStorage.setItem('key', value);
      this.key = value;
    },
    cleanUp() {
      this.list = [];
    },
    pushItem(item: Item) {
      item.id = nanoid(); // 创建唯一 id
      this.list.push(item);
    },
    async submit(text: string): Promise<CallBack> {
      // 向服务端请求 chatCPT
      try {
        const { user, key: openai_key } = this;
        // 请求
        const response = await fetch('/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
            content: text,
            user, openai_key
          })
        });
        
        const result = await response.text();

        return {
          status: 'error',
          message: result
        }

      } catch(e) {

        return {
          status: 'error',
          message: (e as Error).message
        }

      }
    }
  }
});
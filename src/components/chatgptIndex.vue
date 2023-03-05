<script>
    // import axios from 'axios'
    // axios.defaults.baseURL = 'http://127.0.0.1:8000/';
</script>

<template>
    <div>
        <div id="contentFrame">

        </div>
        <div>
            <p>
                <input type="text" name="content" id="content" @keydown.enter="getData">
                <button @click="getData">提问</button>
            </p>
            <p>
                <span>这里是你的OpenAI_KEY: </span><input type="text" id="openai_key" placeholder="请输入你的openai_key">
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "chatgptIndex",
        data () {
            return {
                
            }
        },
        methods: {
            getQueryVariable(variable) {
                let query = window.location.href;
                let vars = query.split("?");
                for (let i = 0; i < vars.length; i++) {
                    let pair = vars[i].split("=");
                    if (pair[0] == variable) {
                        return pair[1];
                    }
                }
                return null;
            },
            getData() {
                let content = document.getElementById("content").value;
                if(!content) {
                    console.log("no input");
                    return;
                }

                let openai_key = document.getElementById("openai_key").value;
                window.localStorage.setItem("MyOpenAIKey", openai_key);

                let user = this.getQueryVariable("user");
                let newChild = document.createElement("p");
                let parent = document.getElementById("contentFrame");
                newChild.innerHTML = "提问: " + content;
                parent.appendChild(newChild);

                document.getElementById("content").value = "";
                this.msg = this.$axios({
                    method: "post",
                    url: "/getContent",
                    data: {
                        "user": user,
                        "content": content,
                        "openai_key": openai_key
                    }
                })
                .then(response => {
                    let newChild = document.createElement("p");
                    let parent = document.getElementById("contentFrame");
                    newChild.innerHTML = "ChatGPT: " + response.data;
                    parent.appendChild(newChild);
                })
                .catch(error => {
                    this.msg = "error";
                })
            }
        },
        mounted() {
            document.getElementById("openai_key").value = window.localStorage.getItem("MyOpenAIKey");
        }
    }
</script>
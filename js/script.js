// Fase di preparazione

const app = Vue.createApp({
    name: "Vue Email List",
    data: () => ({
        emailsList: [],
        apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail"
    }),
    computed: {
        loadingCompleted() {
            return this.emailsList.length === 10;
        }
    },
    methods: {
        getRandomEmails() {
            for (let i = 0; i < 10; i++) {
                axios.get(this.apiUrl).then(response => {
                    this.emailsList.push(response.data.response);
                });
            }
        }
    },
    created() {
        this.getRandomEmails();
    }
});

app.mount("#app");
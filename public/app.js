new Vue({
  el: "#usuarios",
  data: {
    users: [],
    loading: false
  },
  mounted: function() {
    this.loadUsers();
  },
  methods: {
    loadUsers: async function() {
      try {
        this.loading = true;
        const url = 'https://reqres.in/api/users?per_page=10';
        const resp = await fetch(url);
        if (!resp.ok) throw new Error('Falha ao buscar usuários');
        const json = await resp.json();
        this.users = Array.isArray(json.data) ? json.data : [];
      } catch (err) {
        console.error(err);
        alert('Não foi possível carregar os usuários. Tente novamente.');
      } finally {
        this.loading = false;
      }
    }
  }
});

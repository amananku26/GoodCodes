  actions: {
    fetchUserLogin(data) {
      return axios
        .post('https://reqres.in/api/login', data)
        .then(res => {
          return res.data
        })
        .catch(error => {
          this.error = error
          this.alertLevel = 'danger'
          this.alertMessage = 'User ID or password is invalid.'
          this.alertShow = true
          this.identifier = data.email
          this.password = data.password
          this.isLoading = false
          throw new Error(error)
        })
    },
  },
  
  
   this.store
          .fetchUserLogin(data)
          .then(res => {
            this.userData = res
            this.$router.push({ path: '/en/dashboard' })
          })
          .catch(err => {
            return err
          })
      }
  
  
